"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"intro",title:"What is driftctl?",slug:"/"},i=void 0,l={unversionedId:"intro",id:"version-0.20.0/intro",title:"What is driftctl?",description:"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift.",source:"@site/versioned_docs/version-0.20.0/intro.mdx",sourceDirName:".",slug:"/",permalink:"/0.20.0/",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.20.0/intro.mdx",tags:[],version:"0.20.0",frontMatter:{id:"intro",title:"What is driftctl?",slug:"/"},sidebar:"version-0.20.0/docs",next:{title:"Installation",permalink:"/0.20.0/installation"}},c={},u=[{value:"Why driftctl?",id:"why-driftctl",level:2},{value:"Features",id:"features",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift."),(0,o.kt)("h2",{id:"why-driftctl"},"Why driftctl?"),(0,o.kt)("p",null,"Infrastructure as code is awesome, but there are too many moving parts: codebase, state file, actual cloud state. Things tend to drift."),(0,o.kt)("p",null,"Drift can have multiple causes: from developers creating or updating infrastructure through the web console without telling anyone, to uncontrolled updates on the cloud provider side. Handling infrastructure drift vs the codebase can be challenging."),(0,o.kt)("p",null,"You can't efficiently improve what you don't track. We track coverage for unit tests, why not infrastructure as code coverage?"),(0,o.kt)("p",null,"driftctl tracks how well your IaC codebase covers your cloud configuration. driftctl warns you about drift."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scan")," cloud provider and map resources with IaC code"),(0,o.kt)("li",{parentName:"ul"},"Analyze diff, and warn about drift and unwanted unmanaged resources"),(0,o.kt)("li",{parentName:"ul"},"Allow users to ",(0,o.kt)("strong",{parentName:"li"},"ignore")," resources"),(0,o.kt)("li",{parentName:"ul"},"Multiple output formats")),(0,o.kt)("p",null,"If you want to learn more, find below a good introduction talk:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/wDRr2i6XOa0?t=700"},"Infrastructure drifts aren\u2019t like Pokemon. You can\u2019t catch \u201dem all.")))}d.isMDXComponent=!0}}]);