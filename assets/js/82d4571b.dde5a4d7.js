"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"rules",title:"Filter Rules"},i=void 0,l={unversionedId:"usage/filtering/rules",id:"usage/filtering/rules",title:"Filter Rules",description:"Filter rules can be used not only to scan resources, but also to ignore resources.",source:"@site/docs/usage/filtering/rules.mdx",sourceDirName:"usage/filtering",slug:"/usage/filtering/rules",permalink:"/next/usage/filtering/rules",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/usage/filtering/rules.mdx",tags:[],version:"current",frontMatter:{id:"rules",title:"Filter Rules"},sidebar:"docs",previous:{title:".driftignore",permalink:"/next/usage/filtering/driftignore"},next:{title:"Log level",permalink:"/next/usage/log-level"}},s={},u=[{value:"Examples",id:"examples",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Filter rules can be used not only to ",(0,a.kt)("strong",{parentName:"p"},"scan")," resources, but also to ",(0,a.kt)("strong",{parentName:"p"},"ignore")," resources."),(0,a.kt)("p",{parentName:"admonition"},"You can indeed use both inclusion and exclusion logics.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Filter rules")," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",(0,a.kt)("a",{parentName:"p",href:"https://jmespath.org/"},"JMESPath")," you could build a complex include and exclude expression."),(0,a.kt)("p",null,"Filter rules could be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"scan")," cmd with ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," flag.\nYou could also use the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DCTL_FILTER"),".\nFilter rules syntax in use is actually ",(0,a.kt)("a",{parentName:"p",href:"https://jmespath.org/specification.html"},"JMESPath"),"."),(0,a.kt)("p",null,"Filter are applied on a normalized struct which contains the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type"),": Type of the resource, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"aws_s3_bucket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Id"),": Id of the resource, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"my-bucket-name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Attr"),": Contains every resource attributes (check ",(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket#attributes-reference"},"terraform attributes reference")," for a full list of supported attributes of a bucket)")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you want to filter on ",(0,a.kt)("inlineCode",{parentName:"p"},"Attr")," you should enable deep mode otherwise you will not have access to resource's details.")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --deep --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.tags != null && !contains(keys(Attr.tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n# Ignore GitHub archived repositories\ndriftctl scan --to github+tf --deep --filter '!(Attr.Archived)'\n")))}p.isMDXComponent=!0}}]);