(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{284:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return s}));var t=n(3),i=n(7),o=(n(0),n(372)),a={id:"driftignore",title:".driftignore"},l={unversionedId:"usage/filtering/driftignore",id:"version-0.15.0/usage/filtering/driftignore",isDocsHomePage:!1,title:".driftignore",description:".driftignore is a simple way to ignore resources, you put resources in a .driftignore file like a .gitignore.",source:"@site/versioned_docs/version-0.15.0/usage/filtering/driftignore.mdx",slug:"/usage/filtering/driftignore",permalink:"/0.15.0/usage/filtering/driftignore",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.15.0/usage/filtering/driftignore.mdx",version:"0.15.0",sidebar:"version-0.15.0/docs",previous:{title:"Disable telemetry",permalink:"/0.15.0/usage/flags/disable-telemetry"},next:{title:"Filter Rules",permalink:"/0.15.0/usage/filtering/rules"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Precedence over filter rules",id:"precedence-over-filter-rules",children:[]},{value:"Automatically generate a driftignore file",id:"automatically-generate-a-driftignore-file",children:[]}],u={toc:c};function s(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},".driftignore")," is a simple way to ignore resources, you put resources in a ",Object(o.b)("inlineCode",{parentName:"p"},".driftignore")," file like a ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(o.b)("p",null,"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."),Object(o.b)("p",null,"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."),Object(o.b)("p",null,"Each line must be of kind"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resource_type.resource_id"),", resource_id could be a wildcard to exclude all resources of a given type."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resource_type.resource_id.path.to.field_name"),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards.")),Object(o.b)("p",null,"The .driftignore file also supports negation of rules. This way you could ignore everything except certain types."),Object(o.b)("p",null,"For example, if you want to ignore everything but IAM drifts:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ignore"},"*\n!aws_iam_*\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ignore"},"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-buckey\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environment for all lambda functions\naws_lambda_function.*.environment\n# Will ignore resources like aws_iam_role.AmazonSSMRoleForInstances and aws_iam_role.AWSServiceRoleForAmazonSSM\n*role.*Amazon*\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.last_modified\n")),Object(o.b)("h2",{id:"precedence-over-filter-rules"},"Precedence over filter rules"),Object(o.b)("p",null,"The above mechanism to ignore resources can be used in combination with filter rules. Bear in mind that if the same resource is included by a filter rule and excluded inside the .driftignore file, driftctl will just ignore this resource."),Object(o.b)("h2",{id:"automatically-generate-a-driftignore-file"},"Automatically generate a driftignore file"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"../cmd/gen-driftignore-usage"},"driftignore generator command"),"."))}s.isMDXComponent=!0},372:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var r=i.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=s(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=t,b=d["".concat(a,".").concat(p)]||d[p]||f[p]||o;return n?i.a.createElement(b,l(l({ref:r},u),{},{components:n})):i.a.createElement(b,l({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);