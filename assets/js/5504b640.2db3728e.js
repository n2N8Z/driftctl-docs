"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"intro",title:"Introduction"},c=void 0,a={unversionedId:"ci_cd/intro",id:"version-0.17.0/ci_cd/intro",title:"Introduction",description:"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.",source:"@site/versioned_docs/version-0.17.0/ci_cd/intro.mdx",sourceDirName:"ci_cd",slug:"/ci_cd/intro",permalink:"/0.17.0/ci_cd/intro",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.17.0/ci_cd/intro.mdx",tags:[],version:"0.17.0",frontMatter:{id:"intro",title:"Introduction"},sidebar:"version-0.17.0/docs",previous:{title:"Supported Resources",permalink:"/0.17.0/providers/azure/resources"},next:{title:"CircleCI",permalink:"/0.17.0/ci_cd/guides/circleci"}},l={},s=[{value:"Scheduled run",id:"scheduled-run",level:2},{value:"GitOps workflow",id:"gitops-workflow",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"driftctl can be viewed as a drift monitoring tool, and thus, it needs to run continuously to detect new drifts.\nWe have identified two main workflows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A scheduled execution of driftctl to actively monitor drifts as they happen"),(0,o.kt)("li",{parentName:"ul"},"An integrated driftctl to secure GitOps workflow")),(0,o.kt)("h2",{id:"scheduled-run"},"Scheduled run"),(0,o.kt)("p",null,'One of the biggest problem with drifts in an IaC managed infrastructure is to be able to know where do these drifts come from and from whom.\nIt can be someone that has updated a parameter and forgot to report it to IaC code, a script that has messed up something, etc ...\nAlthough driftctl cannot identify precisely the initiator, you can catch the "when" by scheduling regularly driftctl.\nSome CI/CD systems can allow you to run scheduled jobs, driftctl team strongly advises you to run driftctl regularly to identify your drifts ASAP.'),(0,o.kt)("h2",{id:"gitops-workflow"},"GitOps workflow"),(0,o.kt)("p",null,"driftctl can be integrated in your existing GitOps flow to secure terraform operations against uncontrolled drifts.\nYou can find below an example of a typical GitOps workflow with driftctl integrated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitops_flow",src:r(75545).Z,width:"571",height:"863"})))}u.isMDXComponent=!0},75545:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gitops_flow-5b65947feca098ed877f9103e336664a.svg"}}]);