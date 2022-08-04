"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"limitations",title:"Known Issues and Limitations",sidebar_label:"Limitations"},o=void 0,s={unversionedId:"limitations",id:"version-0.18.0/limitations",title:"Known Issues and Limitations",description:"AWS Regions & Credentials Limits",source:"@site/versioned_docs/version-0.18.0/limitations.mdx",sourceDirName:".",slug:"/limitations",permalink:"/0.18.0/limitations",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.18.0/limitations.mdx",tags:[],version:"0.18.0",frontMatter:{id:"limitations",title:"Known Issues and Limitations",sidebar_label:"Limitations"},sidebar:"version-0.18.0/docs",previous:{title:"Usage",permalink:"/0.18.0/usage"},next:{title:"Scan",permalink:"/0.18.0/usage/cmd/scan-usage"}},l={},u=[{value:"AWS Regions &amp; Credentials Limits",id:"aws-regions--credentials-limits",level:2},{value:"Terraform &amp; Providers Support",id:"terraform--providers-support",level:2},{value:"Integration in terraform workflow",id:"integration-in-terraform-workflow",level:2},{value:"Terraform Resources",id:"terraform-resources",level:2},{value:"AWS",id:"aws",level:3},{value:"Github",id:"github",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aws-regions--credentials-limits"},"AWS Regions & Credentials Limits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user needs to use the same AWS region and credentials for both the scanned infrastructure and the S3 bucket where the Terraform state is stored (for example, a Terraform state stored on S3 on us-east-1 for an infrastructure to be scanned on us-west-1 won't work). Think ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_PROFILE")," for the underlying reason. See the related ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/snyk/driftctl/discussions/130"},"GitHub Discussion"),"."),(0,i.kt)("li",{parentName:"ul"},"driftctl currently doesn't support multiple aliased providers in a single Terraform state (like a single account but multiple regions). This will be implemented soon.")),(0,i.kt)("h2",{id:"terraform--providers-support"},"Terraform & Providers Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terraform version >= 0.11 is supported"),(0,i.kt)("li",{parentName:"ul"},"Terraform AWS provider version >= 3.x is supported")),(0,i.kt)("p",null,"When performing a scan using a non-supported Terraform state, driftctl will ignore that state, will display a warning message and the scan will continue anyway. So if you specify multiple states at once, only supported ones will be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ driftctl scan --from tfstate://terraform.tfstate\nWARNING: terraform.tfstate was generated using Terraform 0.10.8 which is currently not supported by driftctl\nPlease read documentation at https://docs.driftctl.com/limitations\nScanning resources: \u28df (36)\n...\n")),(0,i.kt)("h2",{id:"integration-in-terraform-workflow"},"Integration in terraform workflow"),(0,i.kt)("p",null,"driftctl compares your real infrastructure to your state.\nWhen running ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform refresh")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply")," , since it triggers a refresh, terraform updates your state with upstream modifications.\nThus, driftctl won't be able to compute diffs between state and infrastructure as both sides are in sync."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"driftctl should be run BEFORE any terraform actions in your CI/CD pipeline")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create an aws_s3_bucket with terraform, apply to create a bucket"),(0,i.kt)("li",{parentName:"ul"},"manually enable the bucket versioning in the console"),(0,i.kt)("li",{parentName:"ul"},"run driftctl => it will detect the drift ",(0,i.kt)("inlineCode",{parentName:"li"},"~ Versioning.0.Enabled: false => true")),(0,i.kt)("li",{parentName:"ul"},"run terraform apply => no changes, but under the hood it will update your state and set versioning to true"),(0,i.kt)("li",{parentName:"ul"},"run driftctl => *",(0,i.kt)("em",{parentName:"li"},"no changes"))),(0,i.kt)("h2",{id:"terraform-resources"},"Terraform Resources"),(0,i.kt)("h3",{id:"aws"},"AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aws_security_group and aws_security_group_rule:")),(0,i.kt)("p",null,"For security group that has in-line egress or ingress rules, driftctl will output an alert message at the end of the scan to warn you that those rules are falsely unmanaged. The explanation is that we can't distinct, based only on the Terraform state, rules created in the console and rules created in-line in either egress or ingress blocks."),(0,i.kt)("h3",{id:"github"},"Github"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"github_branch_protection_v3:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This resource is not supported and will probably never be as it overlaps with github_branch_protection. ",(0,i.kt)("inlineCode",{parentName:"li"},"github_branch_protection")," is more suitable for performance purpose. We cannot support these two resources as we don't have any way to discriminate them by enumerating resources from remote side. They represent the same notion but are from two different APIs (REST vs GraphQL). driftctl team recommends you to use the newer ",(0,i.kt)("inlineCode",{parentName:"li"},"github_branch_protection"),", or at least ignore all your ",(0,i.kt)("inlineCode",{parentName:"li"},"github_branch_protection_v3")," in driftignore."))),(0,i.kt)("li",{parentName:"ul"},"github_branch_protection:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Branch protection resources are not returned as unmanaged if the branch protection pattern does not match at least one branch."),(0,i.kt)("li",{parentName:"ul"},"We cannot show the related repository name in driftctl output as the terraform provider does not retrieve this information.")))))}p.isMDXComponent=!0}}]);