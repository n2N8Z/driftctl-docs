"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"disable-telemetry",title:"Disable telemetry"},i=void 0,l={unversionedId:"usage/flags/disable-telemetry",id:"version-0.20.0/usage/flags/disable-telemetry",title:"Disable telemetry",description:"By default, driftctl sends telemetry data to help us improve the product.",source:"@site/versioned_docs/version-0.20.0/usage/flags/disable-telemetry.mdx",sourceDirName:"usage/flags",slug:"/usage/flags/disable-telemetry",permalink:"/0.20.0/usage/flags/disable-telemetry",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.20.0/usage/flags/disable-telemetry.mdx",tags:[],version:"0.20.0",frontMatter:{id:"disable-telemetry",title:"Disable telemetry"},sidebar:"version-0.20.0/docs",previous:{title:"Version Check",permalink:"/0.20.0/usage/flags/version-check"},next:{title:".driftignore",permalink:"/0.20.0/usage/filtering/driftignore"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, driftctl sends telemetry data to help us improve the product.\nYou can find below a sample of what data are collected by driftctl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0.7.1",\n    "os": "linux",\n    "arch": "amd64",\n    "total_resources": 100,\n    "total_managed": 10,\n    "duration": 300, // analysis time in seconds\n    "provider_name": "aws"\n}\n')),(0,a.kt)("p",null,"To disable this behavior, either use the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-telemetry")," or define the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DCTL_DISABLE_TELEMETRY=true"),"."))}p.isMDXComponent=!0}}]);