"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40295],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(g,i(i({ref:t},u),{},{components:o})):r.createElement(g,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},90263:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"authentication",title:"Authentication"},i=void 0,s={unversionedId:"providers/google/authentication",id:"version-0.31.0/providers/google/authentication",title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to your GCP project.",source:"@site/versioned_docs/version-0.31.0/providers/google/authentication.mdx",sourceDirName:"providers/google",slug:"/providers/google/authentication",permalink:"/0.31.0/providers/google/authentication",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.31.0/providers/google/authentication.mdx",tags:[],version:"0.31.0",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Supported Resources",permalink:"/0.31.0/providers/github/resources"},next:{title:"Supported Resources",permalink:"/0.31.0/providers/google/resources"}},l={},c=[{value:"Least privileged policy",id:"least-privileged-policy",level:2},{value:"Required roles",id:"required-roles",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To use driftctl, we need credentials to make authenticated requests to your GCP project."),(0,n.kt)("admonition",{title:"service account",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Since driftctl use Cloud Asset API, using a service account is ",(0,n.kt)("strong",{parentName:"p"},"mandatory"),".")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/production"},"official documentation")," to setup a proper service account."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ GOOGLE_APPLICATION_CREDENTIALS=your-creds.json\\\n  CLOUDSDK_CORE_PROJECT=my-project\\\n  driftctl scan --to gcp+tf\n")),(0,n.kt)("p",null,"You can use any env var from ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/properties#setting_properties_via_environment_variables"},"google cloud sdk environment variable"),"."),(0,n.kt)("h2",{id:"least-privileged-policy"},"Least privileged policy"),(0,n.kt)("p",null,"driftctl uses ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/api/cloudasset.googleapis.com/overview"},"Google Asset API")," to enumerate efficiently resources on your account.\nIt also uses ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com"},"Cloud Resource Manager API")," to enumerate project IAM Resources.\nBe sure to have enabled these APIs for the GCP project you are using."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"enable_api",src:o(31744).Z,width:"642",height:"391"})),(0,n.kt)("p",null,"To be able to enumerate resources, you need at least the role ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles#cloud-asset-roles"},"Cloud Asset Viewer"),"."),(0,n.kt)("admonition",{title:"deep mode",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to use driftctl with deep mode, driftctl will also need to retrieve resource's details and the ",(0,n.kt)("strong",{parentName:"p"},"Cloud Asset Viewer")," will not be enough.\nIf you want to be able to get the details you should set up the basic role ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles#basic-definitions"},"Viewer")," on your project.\nTo read your IAM policies you will also need role ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles#iam-roles"},"iam.securityReviewer")," on your project.")),(0,n.kt)("h3",{id:"required-roles"},"Required roles"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Mandatory role to allow driftctl to enumerate resources\nroles/cloudasset.viewer\n\n# Required for deep mode only\nroles/viewer\n")))}p.isMDXComponent=!0},31744:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/enable_api-dffb8e57a0ce1c667527ede14b2728df.png"}}]);