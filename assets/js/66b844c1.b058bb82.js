"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"usage",title:"Usage"},i=void 0,s={unversionedId:"usage",id:"version-0.35.0/usage",title:"Usage",description:"Be sure to have configured your AWS credentials.",source:"@site/versioned_docs/version-0.35.0/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/0.35.0/usage",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.35.0/usage.mdx",tags:[],version:"0.35.0",frontMatter:{id:"usage",title:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/0.35.0/installation"},next:{title:"Limitations",permalink:"/0.35.0/limitations"}},c={},l=[],f={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Be sure to have ",(0,a.kt)("a",{parentName:"p",href:"/0.35.0/providers/aws/authentication"},"configured")," your AWS credentials."),(0,a.kt)("p",null,"You will need to assign ",(0,a.kt)("a",{parentName:"p",href:"/0.35.0/providers/aws/authentication#least-privileged-policy"},"proper permissions")," to allow driftctl to scan your account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ driftctl scan\n# Same as\n$ driftctl scan --from tfstate://terraform.tfstate\n\n# To specify AWS credentials\n$ AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX driftctl scan\n# or using a named profile\n$ AWS_PROFILE=profile_name driftctl scan\n\n# With state stored on a s3 backend\n$ driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using glob pattern\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n")))}p.isMDXComponent=!0}}]);