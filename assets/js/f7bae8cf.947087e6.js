"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51707],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63557:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"jenkins",title:"Jenkins"},c=void 0,l={unversionedId:"ci_cd/guides/jenkins",id:"version-0.15.0/ci_cd/guides/jenkins",title:"Jenkins",description:"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:",source:"@site/versioned_docs/version-0.15.0/ci_cd/guides/jenkins.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/jenkins",permalink:"/0.15.0/ci_cd/guides/jenkins",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/ci_cd/guides/jenkins.mdx",tags:[],version:"0.15.0",frontMatter:{id:"jenkins",title:"Jenkins"},sidebar:"version-0.15.0/docs",previous:{title:"GitlabCI",permalink:"/0.15.0/ci_cd/guides/gitlabci"}},u={},p=[{value:"Full example",id:"full-example",level:2}],f={toc:p};function d(e){var n=e.components,o=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"success",src:t(10018).Z,width:"569",height:"224"})),(0,s.kt)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"failure",src:t(47458).Z,width:"569",height:"224"})),(0,s.kt)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a scan every hour:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"schedule",src:t(27935).Z,width:"1440",height:"465"})),(0,s.kt)("h2",{id:"full-example"},"Full example"),(0,s.kt)("p",null,"Below you can find a full Jenkinsfile example with a complete GitOps workflow example and a driftctl scan."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'# ====================\n# Classic GitOps workflow\n# ====================\n\npipeline {\n    agent any\n    environment {\n        AWS_DEFAULT_REGION="us-east-1"\n        AWS_ACCESS_KEY_ID=credentials("AWS_ACCESS_KEY_ID")\n        AWS_SECRET_ACCESS_KEY=credentials("AWS_SECRET_ACCESS_KEY")\n        PATH="$PATH:$HOME/dctlenv/bin/"\n    }\n    stages {\n        stage("Init") {\n            steps {\n                sh "terraform init"\n            }\n        }\n        stage(\'Validate\') {\n            failFast true\n            parallel {\n                stage("driftctl") {\n                    steps {\n                        sh "which dctlenv || git clone https://github.com/wbeuil/dctlenv"\n                        sh "dctlenv use latest"\n                        sh "driftctl scan"\n                    }\n                }\n                stage("terraform/fmt") {\n                    steps {\n                        sh "terraform fmt -check -diff"\n                    }\n                }\n                stage("terraform/validate") {\n                    steps {\n                        sh "terraform validate"\n                    }\n                }\n            }\n        }\n        stage("Plan") {\n            steps {\n                sh "terraform plan -out=plan.out"\n            }\n        }\n        stage("Deploy") {\n            steps {\n                sh "terraform apply -input=false plan.out"\n            }\n        }\n    }\n}\n\n')))}d.isMDXComponent=!0},47458:function(e,n,t){n.Z=t.p+"assets/images/failure-3cbe363cd95499cebd8a1eca8fb980e9.png"},27935:function(e,n,t){n.Z=t.p+"assets/images/schedule-0c1ac072299c4932da6dd92af271dae7.png"},10018:function(e,n,t){n.Z=t.p+"assets/images/success-ffc266810e193ceadfc8d7608c31ee01.png"}}]);