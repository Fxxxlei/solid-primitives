
// Do not modify
// Generated from "./scripts/update-site/build-pages"

import PrimitivePageMain from "~/components/Primitives/PrimitivePageMain";
import CopyPackages from "~/components/CopyPackage/CopyPackages";
import { NoHydration } from "solid-js/web";

/*@jsxRuntime automatic @jsxImportSource solid-js*/
import {useMDXComponents as _provideComponents} from "solid-mdx";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    ul: "ul",
    li: "li",
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    pre: "pre",
    span: "span"
  }, _provideComponents(), props.components);
  if (!CopyPackages) _missingMdxReference("CopyPackages", true);
  return <><NoHydration><_components.p>{"A set of primitives based on Solid signals, used to trigger computations."}</_components.p>{"\n"}<_components.ul>{"\n"}<_components.li><_components.a href="#createTrigger"><_components.code>{"createTrigger"}</_components.code></_components.a>{" - Set listeners in reactive computations and then trigger them when you want."}</_components.li>{"\n"}<_components.li><_components.a href="#createTriggerCache"><_components.code>{"createTriggerCache"}</_components.code></_components.a>{" - A map of triggers cached by a key."}</_components.li>{"\n"}<_components.li><_components.a href="#createWeakTriggerCache"><_components.code>{"createWeakTriggerCache"}</_components.code></_components.a>{" - A weakmap of triggers cached by a weak key."}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.h2 id="installation"><_components.a className="header-anchor" href="#installation">{"#"}</_components.a>{"Installation"}</_components.h2>{"\n"}</NoHydration><CopyPackages packageName="@solid-primitives/trigger" /><NoHydration>{"\n"}<_components.h2 id="createtrigger"><_components.a className="header-anchor" href="#createtrigger">{"#"}</_components.a><_components.code>{"createTrigger"}</_components.code></_components.h2>{"\n"}<_components.p>{"Set listeners in reactive computations and then trigger them when you want."}</_components.p>{"\n"}<_components.h3 id="how-to-use-it"><_components.a className="header-anchor" href="#how-to-use-it">{"#"}</_components.a>{"How to use it"}</_components.h3>{"\n"}<_components.pre><_components.code className="hljs language-ts"><_components.span className="hljs-keyword">{"import"}</_components.span>{" { createTrigger } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"@solid-primitives/trigger\""}</_components.span>{";\n\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" [track, dirty] = "}<_components.span className="hljs-title function_">{"createTrigger"}</_components.span>{"();\n\n"}<_components.span className="hljs-title function_">{"createEffect"}</_components.span>{"("}<_components.span className="hljs-function">{"() =>"}</_components.span>{" {\n  "}<_components.span className="hljs-title function_">{"track"}</_components.span>{"();\n  "}<_components.span className="hljs-comment">{"// ..."}</_components.span>{"\n});\n\n"}<_components.span className="hljs-comment">{"// later"}</_components.span>{"\n"}<_components.span className="hljs-title function_">{"dirty"}</_components.span>{"();\n"}</_components.code></_components.pre>{"\n"}<_components.h2 id="createtriggercache"><_components.a className="header-anchor" href="#createtriggercache">{"#"}</_components.a><_components.code>{"createTriggerCache"}</_components.code></_components.h2>{"\n"}<_components.p>{"A map of triggers cached by a key."}</_components.p>{"\n"}<_components.h3 id="how-to-use-it-1"><_components.a className="header-anchor" href="#how-to-use-it-1">{"#"}</_components.a>{"How to use it"}</_components.h3>{"\n"}<_components.p><_components.code>{"track"}</_components.code>{" and "}<_components.code>{"dirty"}</_components.code>{" are called with a "}<_components.code>{"key"}</_components.code>{" so that each tracker will trigger an update only when his individual "}<_components.code>{"key"}</_components.code>{" would get marked as dirty."}</_components.p>{"\n"}<_components.pre><_components.code className="hljs language-ts"><_components.span className="hljs-keyword">{"import"}</_components.span>{" { createTriggerCache } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"@solid-primitives/trigger\""}</_components.span>{";\n\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" { track, dirty } = "}<_components.span className="hljs-title function_">{"createTriggerCache"}</_components.span>{"();\n\n"}<_components.span className="hljs-title function_">{"createEffect"}</_components.span>{"("}<_components.span className="hljs-function">{"() =>"}</_components.span>{" {\n  "}<_components.span className="hljs-title function_">{"track"}</_components.span>{"("}<_components.span className="hljs-number">{"1"}</_components.span>{");\n  "}<_components.span className="hljs-comment">{"//  ..."}</_components.span>{"\n});\n\n"}<_components.span className="hljs-comment">{"// later"}</_components.span>{"\n"}<_components.span className="hljs-title function_">{"dirty"}</_components.span>{"("}<_components.span className="hljs-number">{"1"}</_components.span>{");\n"}<_components.span className="hljs-comment">{"// this won't cause an update:"}</_components.span>{"\n"}<_components.span className="hljs-title function_">{"dirty"}</_components.span>{"("}<_components.span className="hljs-number">{"2"}</_components.span>{");\n"}</_components.code></_components.pre>{"\n"}<_components.h2 id="createweaktriggercache"><_components.a className="header-anchor" href="#createweaktriggercache">{"#"}</_components.a><_components.code>{"createWeakTriggerCache"}</_components.code></_components.h2>{"\n"}<_components.p>{"A weakmap of triggers cached by a weak key."}</_components.p>{"\n"}<_components.h3 id="how-to-use-it-2"><_components.a className="header-anchor" href="#how-to-use-it-2">{"#"}</_components.a>{"How to use it"}</_components.h3>{"\n"}<_components.p><_components.code>{"track"}</_components.code>{" and "}<_components.code>{"dirty"}</_components.code>{" are called with a "}<_components.code>{"key"}</_components.code>{" so that each tracker will trigger an update only when his individual "}<_components.code>{"key"}</_components.code>{" would get marked as dirty."}</_components.p>{"\n"}<_components.pre><_components.code className="hljs language-ts"><_components.span className="hljs-keyword">{"import"}</_components.span>{" { createWeakTriggerCache } "}<_components.span className="hljs-keyword">{"from"}</_components.span>{" "}<_components.span className="hljs-string">{"\"@solid-primitives/trigger\""}</_components.span>{";\n\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" { track, dirty } = "}<_components.span className="hljs-title function_">{"createWeakTriggerCache"}</_components.span>{"();\n"}<_components.span className="hljs-keyword">{"const"}</_components.span>{" key = {};\n\n"}<_components.span className="hljs-title function_">{"createEffect"}</_components.span>{"("}<_components.span className="hljs-function">{"() =>"}</_components.span>{" {\n  "}<_components.span className="hljs-title function_">{"track"}</_components.span>{"(key);\n  "}<_components.span className="hljs-comment">{"//  ..."}</_components.span>{"\n});\n\n"}<_components.span className="hljs-comment">{"// later"}</_components.span>{"\n"}<_components.span className="hljs-title function_">{"dirty"}</_components.span>{"(key);\n"}<_components.span className="hljs-comment">{"// this won't cause an update:"}</_components.span>{"\n"}<_components.span className="hljs-title function_">{"dirty"}</_components.span>{"({});\n"}</_components.code></_components.pre>{"\n"}<_components.h2 id="demo"><_components.a className="header-anchor" href="#demo">{"#"}</_components.a>{"Demo"}</_components.h2>{"\n"}<_components.p><_components.a href="https://solidjs-community.github.io/solid-primitives/trigger/">{"Live Site"}</_components.a></_components.p>{"\n"}<_components.p>{"TODO"}</_components.p>{"\n"}<_components.h2 id="changelog"><_components.a className="header-anchor" href="#changelog">{"#"}</_components.a>{"Changelog"}</_components.h2>{"\n"}<_components.p>{"See "}<_components.a href="./CHANGELOG.md">{"CHANGELOG.md"}</_components.a></_components.p></NoHydration></>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}

function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


export default function Index () {
  return (
    <PrimitivePageMain packageName="@solid-primitives/trigger" name="trigger" stage={0} packageList={[{"name":"trigger","gzipped":"1.7 KB","minified":"5.38 KB"}]} primitiveList={[{"name":"createTriggerCache","gzipped":"1.66 KB","minified":"5.02 KB"},{"name":"createWeakTriggerCache","gzipped":"1.54 KB","minified":"4.63 KB"},{"name":"createTrigger","gzipped":"1.39 KB","minified":"4.02 KB"}]}>
      <MDXContent/>
    </PrimitivePageMain>
  )
}
