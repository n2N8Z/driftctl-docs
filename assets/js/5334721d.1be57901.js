"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={id:"jenkins",title:"Jenkins"},a=void 0,l={unversionedId:"ci_cd/guides/jenkins",id:"version-0.23.0/ci_cd/guides/jenkins",title:"Jenkins",description:"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:",source:"@site/versioned_docs/version-0.23.0/ci_cd/guides/jenkins.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/jenkins",permalink:"/0.23.0/ci_cd/guides/jenkins",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.23.0/ci_cd/guides/jenkins.mdx",tags:[],version:"0.23.0",frontMatter:{id:"jenkins",title:"Jenkins"},sidebar:"version-0.23.0/docs",previous:{title:"GitlabCI",permalink:"/0.23.0/ci_cd/guides/gitlabci"}},o={},c=[{value:"Full example",id:"full-example",level:2}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"success",src:n(65361).Z,width:"569",height:"224"})),(0,i.kt)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"failure",src:n(97351).Z,width:"569",height:"224"})),(0,i.kt)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a scan every hour:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"schedule",src:n(13048).Z,width:"1440",height:"465"})),(0,i.kt)("h2",{id:"full-example"},"Full example"),(0,i.kt)("p",null,"Below you can find a full Jenkinsfile example with a complete GitOps workflow example and a driftctl scan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'# ====================\n# Classic GitOps workflow\n# ====================\n\npipeline {\n    agent any\n    environment {\n        AWS_DEFAULT_REGION="us-east-1"\n        AWS_ACCESS_KEY_ID=credentials("AWS_ACCESS_KEY_ID")\n        AWS_SECRET_ACCESS_KEY=credentials("AWS_SECRET_ACCESS_KEY")\n        PATH="$PATH:$HOME/dctlenv/bin/"\n    }\n    stages {\n        stage("Init") {\n            steps {\n                sh "terraform init"\n            }\n        }\n        stage(\'Validate\') {\n            failFast true\n            parallel {\n                stage("driftctl") {\n                    steps {\n                        sh "which dctlenv || git clone https://github.com/wbeuil/dctlenv"\n                        sh "dctlenv use latest"\n                        sh "driftctl scan"\n                    }\n                }\n                stage("terraform/fmt") {\n                    steps {\n                        sh "terraform fmt -check -diff"\n                    }\n                }\n                stage("terraform/validate") {\n                    steps {\n                        sh "terraform validate"\n                    }\n                }\n            }\n        }\n        stage("Plan") {\n            steps {\n                sh "terraform plan -out=plan.out"\n            }\n        }\n        stage("Deploy") {\n            steps {\n                sh "terraform apply -input=false plan.out"\n            }\n        }\n    }\n}\n\n')))}u.isMDXComponent=!0},97351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/failure-3cbe363cd95499cebd8a1eca8fb980e9.png"},13048:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/schedule-0c1ac072299c4932da6dd92af271dae7.png"},65361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/success-ffc266810e193ceadfc8d7608c31ee01.png"}}]);