import { createLazyMemo } from "@solid-primitives/memo";
import { $PROXY, $TRACK, Accessor, createRoot, untrack } from "solid-js";
import { unwrap } from "solid-js/store";
import { isDev } from "solid-js/web";

type Static<T = unknown> = { [K in number | string]: T } | T[];

function* entries<T extends Static>(
  obj: T,
): IterableIterator<T extends any[] ? [number, T[number]] : [keyof T, T[keyof T]]> {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      // @ts-ignore
      yield [i, obj[i]!];
    }
  } else {
    // @ts-ignore
    yield* Object.entries(obj)[Symbol.iterator]();
  }
}

type StoreNode = Record<typeof $TRACK, unknown> & Static;
type StoreNodeChildren = Static<StoreNode>;

const StoreNodeChildrenCache = new WeakMap<StoreNode, Accessor<StoreNodeChildren>>();

function getStoreNodechildren(node: StoreNode): StoreNodeChildren {
  let signal = StoreNodeChildrenCache.get(node);

  if (!signal) {
    const unwrapped = unwrap(node),
      isArray = Array.isArray(unwrapped);

    signal = createRoot(() =>
      createLazyMemo(() => {
        node[$TRACK];
        const children: StoreNodeChildren = isArray ? [] : {};
        for (const [key, child] of entries(unwrapped)) {
          let childNode: any;
          if (
            child != null &&
            typeof child === "object" &&
            ((childNode = (child as any)[$PROXY]) ||
              ((childNode = untrack(() => node[key as any])) && $TRACK in childNode))
          ) {
            children[key as any] = childNode;
          }
        }
        return children;
      }),
    );

    StoreNodeChildrenCache.set(node, signal);
  }

  return signal();
}

export type AllNestedObjects<T> = T extends Static<infer U> ? AllNestedObjects<U> | T : never;

export type NestedUpdate<T> = {
  path: (string | number)[];
  value: AllNestedObjects<T>;
};

export type StoreDelta<T> = NestedUpdate<T>[];

type StoreDeltaCache = {
  [K in string | number]: {
    children: StoreNodeChildren;
    record: StoreDeltaCache;
  };
};

let CurrentDelta!: StoreDelta<any>;
let SeenNodes!: WeakSet<StoreNode>;

function newCacheNode(children: StoreNodeChildren): StoreDeltaCache[number] {
  const record: StoreDeltaCache = { ...children } as any;

  for (const [key, node] of entries(children)) {
    if (SeenNodes.has(node)) continue;
    SeenNodes.add(node);
    record[key] = newCacheNode(getStoreNodechildren(node));
  }

  return { children, record };
}

function compareStoreWithCache(
  node: StoreNode,
  parent: StoreDeltaCache,
  key: string | number,
  path: (string | number)[],
): void {
  if (SeenNodes.has(node)) return;
  SeenNodes.add(node);

  const cacheNode = parent[key],
    children = getStoreNodechildren(node);

  if (cacheNode && children === cacheNode.children) {
    for (const [key, child] of entries(children)) {
      compareStoreWithCache(child, cacheNode.record, key, [...path, key]);
    }
  } else {
    parent[key] = newCacheNode(children);
    CurrentDelta.push({ path, value: node });
  }
}

export function createStoreDelta<T extends Static>(store: T): () => StoreDelta<T> {
  if (!($TRACK in store)) {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.warn("createStoreDelta expects a store, got", store);
    }

    return () => [];
  }

  const cache: StoreDeltaCache = {};

  return () => {
    // set globals before each cycle
    CurrentDelta = [];
    SeenNodes = new WeakSet();

    compareStoreWithCache(store, cache, "root", []);

    return CurrentDelta;
  };
}
