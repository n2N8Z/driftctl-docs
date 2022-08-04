"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"authentication",title:"Authentication"},i=void 0,c={unversionedId:"providers/azure/authentication",id:"version-0.17.0/providers/azure/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your Azure account.",source:"@site/versioned_docs/version-0.17.0/providers/azure/authentication.mdx",sourceDirName:"providers/azure",slug:"/providers/azure/authentication",permalink:"/0.17.0/providers/azure/authentication",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.17.0/providers/azure/authentication.mdx",tags:[],version:"0.17.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"version-0.17.0/docs",previous:{title:"Supported Resources",permalink:"/0.17.0/providers/google/resources"},next:{title:"Supported Resources",permalink:"/0.17.0/providers/azure/resources"}},s={},u=[{value:"Least privileged policy",id:"least-privileged-policy",level:2}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to your Azure account.\nWe retrieve configuration from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/developer/go/azure-sdk-authorization#use-environment-based-authentication"},"environment variables"),"."),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure"},"Terraform documentation")," for a guide to configure Azure authentication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Here we use a service principal account with a client secret\n$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_TENANT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_ID=00000000-0000-0000-0000-000000000000\\\n  AZURE_CLIENT_SECRET=password\\\n  driftctl scan --to azure+tf\n")),(0,o.kt)("p",null,"You can also authenticate using ",(0,o.kt)("strong",{parentName:"p"},"az CLI"),". In that case you will only have ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_SUBSCRIPTION_ID")," to specify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ AZURE_SUBSCRIPTION_ID=00000000-0000-0000-0000-000000000000\\\n  driftctl scan --to azure+tf\n")),(0,o.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,o.kt)("p",null,"driftctl needs to have read only access to your account, if you want to scan your whole Azure account you can set up the ",(0,o.kt)("strong",{parentName:"p"},"Reader")," role on your subscription."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"auth",src:r(81838).Z,width:"1214",height:"604"})),(0,o.kt)("p",null,"You may want to scan only a resource group, you can assign ",(0,o.kt)("strong",{parentName:"p"},"Reader")," role only on some restricted resources groups too."))}p.isMDXComponent=!0},81838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/auth-d38df6fe7a4318ec9ebf82d0e5f9edae.png"}}]);