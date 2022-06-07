"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54057],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function p(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34267:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"intro",title:"What is driftctl?",slug:"/"},c=void 0,l={unversionedId:"intro",id:"version-0.28.0/intro",title:"What is driftctl?",description:"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift.",source:"@site/versioned_docs/version-0.28.0/intro.mdx",sourceDirName:".",slug:"/",permalink:"/0.28.0/",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.28.0/intro.mdx",tags:[],version:"0.28.0",frontMatter:{id:"intro",title:"What is driftctl?",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/0.28.0/installation"}},s={},f=[{value:"Why driftctl?",id:"why-driftctl",level:2},{value:"Features",id:"features",level:2}],d={toc:f};function p(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"driftctl is CLI tool that measures infrastructure as code coverage, and tracks infrastructure drift."),(0,a.kt)("h2",{id:"why-driftctl"},"Why driftctl?"),(0,a.kt)("p",null,"Infrastructure as code is awesome, but there are too many moving parts: codebase, state file, actual cloud state. Things tend to drift."),(0,a.kt)("p",null,"Drift can have multiple causes: from developers creating or updating infrastructure through the web console without telling anyone, to uncontrolled updates on the cloud provider side. Handling infrastructure drift vs the codebase can be challenging."),(0,a.kt)("p",null,"You can't efficiently improve what you don't track. We track coverage for unit tests, why not infrastructure as code coverage?"),(0,a.kt)("p",null,"driftctl tracks how well your IaC codebase covers your cloud configuration. driftctl warns you about drift."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scan")," cloud provider and map resources with IaC code"),(0,a.kt)("li",{parentName:"ul"},"Analyze diff, and warn about drift and unwanted unmanaged resources"),(0,a.kt)("li",{parentName:"ul"},"Allow users to ",(0,a.kt)("strong",{parentName:"li"},"ignore")," resources"),(0,a.kt)("li",{parentName:"ul"},"Multiple output formats")),(0,a.kt)("p",null,"If you want to learn more, find below a good introduction talk:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/wDRr2i6XOa0?t=700"},"Infrastructure drifts aren\u2019t like Pokemon. You can\u2019t catch \u201dem all.")))}p.isMDXComponent=!0}}]);