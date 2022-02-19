"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4776],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1872:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"waitForAllSettled(dependencies)",sidebar_label:"waitForAllSettled()"},c=void 0,u={unversionedId:"api-reference/utils/waitForAllSettled",id:"api-reference/utils/waitForAllSettled",title:"waitForAllSettled(dependencies)",description:"A concurrency helper that returns a set of Loadables for the current state of the requested dependencies.  It waits until at least all of the dependencies are either in a value state, or an error state.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForAllSettled",permalink:"/ko/docs/api-reference/utils/waitForAllSettled",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",tags:[],version:"current",frontMatter:{title:"waitForAllSettled(dependencies)",sidebar_label:"waitForAllSettled()"},sidebar:"docs",previous:{title:"waitForAll()",permalink:"/ko/docs/api-reference/utils/waitForAll"},next:{title:"waitForNone()",permalink:"/ko/docs/api-reference/utils/waitForNone"}},s=[],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A concurrency helper that returns a set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"),"s")," for the current state of the requested dependencies.  It waits until at least all of the dependencies are either in a value state, or an error state."),(0,o.kt)("p",null,"The dependencies may either be provided as a tuple array or as named dependencies in an object."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForAllSettled()")," is similar to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNone()")),", except that it waits while any of the dependencies are in a loading state."))}d.isMDXComponent=!0}}]);