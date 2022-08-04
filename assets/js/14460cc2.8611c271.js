"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={id:"authentication",title:"Authentication"},a=void 0,s={unversionedId:"providers/github/authentication",id:"version-0.27.0/providers/github/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.",source:"@site/versioned_docs/version-0.27.0/providers/github/authentication.mdx",sourceDirName:"providers/github",slug:"/providers/github/authentication",permalink:"/0.27.0/providers/github/authentication",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.27.0/providers/github/authentication.mdx",tags:[],version:"0.27.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.27.0/providers/aws/resources"},next:{title:"Supported Resources",permalink:"/0.27.0/providers/github/resources"}},c={},p=[{value:"Least privileged policy",id:"least-privileged-policy",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/integrations/github/latest/docs#argument-reference"},"environment variables"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ GITHUB_TOKEN=14758f1afd44c09b7992073ccf00b43d\\\n  GITHUB_ORGANIZATION=my-org\\\n  driftctl scan --to github+tf\n")),(0,i.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,i.kt)("p",null,"Below you can find the minimal scope required for driftctl to be able to scan every GitHub supported resources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Required to enumerate private repos\nrepo\n\n# Required to list your organization teams\n# and other organization related resources\nread:org\n")),(0,i.kt)("admonition",{title:"repository permissions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Beware that if you don't set permission ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," for your token, you won't see any errors for repositories listing.\n",(0,i.kt)("strong",{parentName:"p"},"Thus, all private repositories will appear as deleted from remote."))))}u.isMDXComponent=!0}}]);