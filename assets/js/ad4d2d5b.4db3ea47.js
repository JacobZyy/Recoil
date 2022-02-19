"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7039],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5481:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={title:"<RecoilURLSync ...props />",sidebar_label:"<RecoilURLSync/>"},l=void 0,s={unversionedId:"recoil-sync/api/RecoilURLSync",id:"recoil-sync/api/RecoilURLSync",title:"<RecoilURLSync ...props />",description:"A component from the Recoil Sync library to sync atoms using the syncEffect() or urlSyncEffect() atom effects with the browser URL.",source:"@site/docs/recoil-sync/api/RecoilURLSync.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/RecoilURLSync",permalink:"/docs/recoil-sync/api/RecoilURLSync",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/recoil-sync/api/RecoilURLSync.md",tags:[],version:"current",frontMatter:{title:"<RecoilURLSync ...props />",sidebar_label:"<RecoilURLSync/>"},sidebar:"recoil-sync",previous:{title:"<RecoilSync />",permalink:"/docs/recoil-sync/api/RecoilSync"},next:{title:"useRecoilURLSync()",permalink:"/docs/recoil-sync/api/useRecoilURLSync"}},p=[{value:"URL Location",id:"url-location",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Custom serialization",id:"custom-serialization",children:[],level:2},{value:"Browser Abstraction",id:"browser-abstraction",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},"Recoil Sync library")," to sync atoms using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/urlSyncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"urlSyncEffect()"))," atom effects with the browser URL."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function RecoilURLSync(props: {\n  storeKey?: string,\n\n  location: LocationOption,\n\n  serialize: mixed => string,\n  deserialize: string => mixed,\n\n  browserInterface?: BrowserInterface,\n}): React.Node\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"storeKey")," is used to match up which atoms should sync with this external store."),(0,a.kt)("h2",{id:"url-location"},"URL Location"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," prop specifies what part of the URL to sync with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type LocationOption =\n  | {part: 'href'}\n  | {part: 'hash'}\n  | {part: 'search'}\n  | {part: 'queryParams', param?: string};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryParams")," with no ",(0,a.kt)("inlineCode",{parentName:"li"},"param")," - Atoms sync with individual query params"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryParams")," with a ",(0,a.kt)("inlineCode",{parentName:"li"},"param")," - Atoms are encoded in a single query param"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search")," - State is encoded with the entire query search string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash")," - State is encoded in the anchor tag"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"href")," - Escape to be able to encode the entire URL.  Care must be taken to provide a valid and legal URL.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/url-persistence"},"URL Persistence Guide")," for examples."),(0,a.kt)("h2",{id:"custom-serialization"},"Custom serialization"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"serialize()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deserialize()")," callbacks can provide custom serializations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  serialize: x => JSON.stringify(x),\n  deserialize: x => JSON.parse(x),\n")),(0,a.kt)("p",null,"If you provide your own callbacks, they should be memoized with something like ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," to avoid re-parsing the URL with every render."),(0,a.kt)("h2",{id:"browser-abstraction"},"Browser Abstraction"),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"<RecoilURLSync/>")," will sync directly with the URL in the browser.  However, you may override this by providing a custom browser interface implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type BrowserInterface = {\n  replaceURL?: string => void,\n  pushURL?: string => void,\n  getURL?: () => string,\n  listenChangeURL?: (handler: () => void) => (() => void),\n};\n")))}d.isMDXComponent=!0}}]);