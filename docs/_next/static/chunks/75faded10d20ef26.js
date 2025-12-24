(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6760,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var s=[],c=!1,l=-1;function f(){c&&r&&(c=!1,r.length?s=r.concat(s):l=-1,s.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=s.length;t;){for(r=s,s=[];++l<t;)r&&r[l].run();l=-1,t=s.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},u=!0;try{r[e](n,n.exports,i),u=!1}finally{u&&delete o[e]}return n.exports}i.ab="/ROOT/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/process/",t.exports=i(229)},8648,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(6760)},2879,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},9893,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return{$$typeof:r,type:e,key:o,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=o,n.jsxs=o},8601,(e,t,n)=>{"use strict";t.exports=e.r(9893)},2836,(e,t,n)=>{"use strict";var r=e.i(8648),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),l=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),h=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function w(){}function E(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var S=E.prototype=new w;S.constructor=E,_(S,b.prototype),S.isPureReactComponent=!0;var x=Array.isArray;function k(){}var j={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(e,t,n){var r=n.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==r?r:null,props:n}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function C(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function H(e,t,n){if(null==e)return e;var r=[],u=0;return!function e(t,n,r,u,a){var s,c,l,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var d=!1;if(null===t)d=!0;else switch(f){case"bigint":case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case o:case i:d=!0;break;case y:return e((d=t._init)(t._payload),n,r,u,a)}}if(d)return a=a(t),d=""===u?"."+C(t,0):u,x(a)?(r="",null!=d&&(r=d.replace(N,"$&/")+"/"),e(a,n,r,"",function(e){return e})):null!=a&&(P(a)&&(s=a,c=r+(null==a.key||t&&t.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+d,a=O(s.type,c,s.props)),n.push(a)),1;d=0;var p=""===u?".":u+":";if(x(t))for(var m=0;m<t.length;m++)f=p+C(u=t[m],m),d+=e(u,n,r,f,a);else if("function"==typeof(m=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=h&&l[h]||l["@@iterator"])?l:null))for(t=m.call(t),m=0;!(u=t.next()).done;)f=p+C(u=u.value,m++),d+=e(u,n,r,f,a);else if("object"===f){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(k,k):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,u,a);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return d}(e,r,"","",function(e){return t.call(n,e,u++)}),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=m,n.Children={map:H,forEach:function(e,t,n){H(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return H(e,function(){t++}),t},toArray:function(e){return H(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=u,n.Profiler=s,n.PureComponent=E,n.StrictMode=a,n.Suspense=d,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=_({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)T.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var u=Array(i),a=0;a<i;a++)u[a]=arguments[a+2];r.children=u}return O(e.type,o,r)},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},n.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)T.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return O(e,i,o)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:f,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:M}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),o=j.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(k,$)}catch(e){$(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},n.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},n.use=function(e){return j.H.use(e)},n.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},n.useCallback=function(e,t){return j.H.useCallback(e,t)},n.useContext=function(e){return j.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return j.H.useEffect(e,t)},n.useEffectEvent=function(e){return j.H.useEffectEvent(e)},n.useId=function(){return j.H.useId()},n.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return j.H.useMemo(e,t)},n.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},n.useRef=function(e){return j.H.useRef(e)},n.useState=function(e){return j.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return j.H.useTransition()},n.version="19.2.3"},5705,(e,t,n)=>{"use strict";t.exports=e.r(2836)},7602,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=i?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o}},3776,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return b},NormalizeError:function(){return _},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return u},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return l},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return y},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return E}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function u(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>a.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function l(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function y(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await y(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let m="undefined"!=typeof performance,h=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class _ extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},9463,e=>{"use strict";let t=`# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

\`code\`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^`;e.s(["APP_NAME",0,"md","INITIAL_MARKDOWN",0,t])},2620,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(2879)._(e.r(5705)).default.createContext({})},1242,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6296,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});let r=e.r(5705),o="undefined"==typeof window,i=o?()=>{}:r.useLayoutEffect,u=o?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),a()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6248,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return f}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(2879),u=e.r(7602),a=e.r(8601),s=u._(e.r(5705)),c=i._(e.r(6296)),l=e.r(2620);function f(){return[(0,a.jsx)("meta",{charSet:"utf-8"},"charset"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(1242);let p=["name","httpEquiv","charSet","itemProp"];function y(e){let t,n,r,o;return e.reduce(d,[]).reverse().concat(f().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,u=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){u=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!u)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return s.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,s.useContext)(l.HeadManagerContext);return(0,a.jsx)(c.default,{reduceComponentsToState:y,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},7914,e=>{e.v({className:"geist_67d76b20-module__yOMf8W__className",variable:"geist_67d76b20-module__yOMf8W__variable"})},4510,e=>{e.v({className:"geist_mono_66039167-module__O0reuq__className",variable:"geist_mono_66039167-module__O0reuq__variable"})},2020,(e,t,n)=>{t.exports=e.r(6248)},4914,e=>{"use strict";var t=e.i(8601),n=e.i(9463),r=e.i(7914);let o={className:r.default.className,style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"}};null!=r.default.variable&&(o.variable=r.default.variable);var i=e.i(4510);let u={className:i.default.className,style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"}};null!=i.default.variable&&(u.variable=i.default.variable);var a=e.i(2020);e.s(["default",0,({Component:e,pageProps:r})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:`${n.APP_NAME}`})}),(0,t.jsx)("div",{className:`${o.className} ${u.className}`,children:(0,t.jsx)(e,{...r})})]})],4914)},7394,(e,t,n)=>{let r="/_app";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(4914)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},8806,e=>{e.v(t=>Promise.all(["static/chunks/18c53969d22cbbb0.js"].map(t=>e.l(t))).then(()=>t(4317)))},7403,e=>{e.v(t=>Promise.all(["static/chunks/74587be309663335.js"].map(t=>e.l(t))).then(()=>t(5367)))}]);