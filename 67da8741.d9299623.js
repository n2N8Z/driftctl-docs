(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(372)),c={id:"intro",title:"What is driftctl?",slug:"/"},i={unversionedId:"intro",id:"version-0.4.0/intro",isDocsHomePage:!1,title:"What is driftctl?",description:"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift.",source:"@site/versioned_docs/version-0.4.0/intro.mdx",slug:"/",permalink:"/0.4.0/",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.4.0/intro.mdx",version:"0.4.0",sidebar:"version-0.4.0/docs",next:{title:"Installation",permalink:"/0.4.0/installation"}},u=[{value:"Why driftctl?",id:"why-driftctl",children:[]},{value:"Features",id:"features",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift."),Object(a.b)("h2",{id:"why-driftctl"},"Why driftctl?"),Object(a.b)("p",null,"Infrastructure as code is awesome, but there are too many moving parts: codebase, state file, actual cloud state. Things tend to drift."),Object(a.b)("p",null,"Drift can have multiple causes: from developers creating or updating infrastructure through the web console without telling anyone, to uncontrolled updates on the cloud provider side. Handling infrastructure drift vs the codebase can be challenging."),Object(a.b)("p",null,"You can't efficiently improve what you don't track. We track coverage for unit tests, why not infrastructure as code coverage?"),Object(a.b)("p",null,"driftctl tracks how well your IaC codebase covers your cloud configuration. driftctl warns you about drift."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Scan")," cloud provider and map resources with IaC code"),Object(a.b)("li",{parentName:"ul"},"Analyze diff, and warn about drift and unwanted unmanaged resources"),Object(a.b)("li",{parentName:"ul"},"Allow users to ",Object(a.b)("strong",{parentName:"li"},"ignore")," resources"),Object(a.b)("li",{parentName:"ul"},"Multiple output formats")),Object(a.b)("p",null,"If you want to learn more, find below a good introduction talk:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://youtu.be/wDRr2i6XOa0?t=700"},"Infrastructure drifts aren\u2019t like Pokemon. You can\u2019t catch \u201dem all.")))}s.isMDXComponent=!0},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return r?o.a.createElement(b,i(i({ref:t},l),{},{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);