(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return v}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?o.a.createElement(v,a(a({ref:r},u),{},{components:t})):o.a.createElement(v,a({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),i=(t(0),t(372)),c={id:"version-check",title:"Version Check"},a={unversionedId:"usage/flags/version-check",id:"version-0.4.0/usage/flags/version-check",isDocsHomePage:!1,title:"Version Check",description:"By default, driftctl checks for a new version remotely.",source:"@site/versioned_docs/version-0.4.0/usage/flags/version-check.mdx",slug:"/usage/flags/version-check",permalink:"/0.4.0/usage/flags/version-check",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.4.0/usage/flags/version-check.mdx",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Error Reporting",permalink:"/0.4.0/usage/flags/error-reporting"},next:{title:"Authentication",permalink:"/0.4.0/providers/aws/authentication"}},s=[],u={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, driftctl checks for a new version remotely."),Object(i.b)("p",null,"To disable this behavior, either use the flag ",Object(i.b)("inlineCode",{parentName:"p"},"--no-version-check")," or define the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"DCTL_NO_VERSION_CHECK"),"."))}l.isMDXComponent=!0}}]);