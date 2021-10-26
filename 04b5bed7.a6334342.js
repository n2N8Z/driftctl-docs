(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{372:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),u=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?i.a.createElement(b,s(s({ref:n},o),{},{components:t})):i.a.createElement(b,s({ref:n},o))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<a;o++)c[o]=t[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},417:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/success-ffc266810e193ceadfc8d7608c31ee01.png"},418:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/failure-3cbe363cd95499cebd8a1eca8fb980e9.png"},419:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/schedule-0c1ac072299c4932da6dd92af271dae7.png"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(372)),c={id:"jenkins",title:"Jenkins"},s={unversionedId:"ci_cd/guides/jenkins",id:"ci_cd/guides/jenkins",isDocsHomePage:!1,title:"Jenkins",description:"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:",source:"@site/docs/ci_cd/guides/jenkins.mdx",slug:"/ci_cd/guides/jenkins",permalink:"/next/ci_cd/guides/jenkins",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/docs/ci_cd/guides/jenkins.mdx",version:"current",sidebar:"docs",previous:{title:"GitlabCI",permalink:"/next/ci_cd/guides/gitlabci"}},l=[{value:"Full example",id:"full-example",children:[]}],o={toc:l};function u(e){var n=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can integrate driftctl in Jenkins and within your GitOps workflow to get something like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"success",src:t(417).default})),Object(a.b)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"failure",src:t(418).default})),Object(a.b)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a scan every hour:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"schedule",src:t(419).default})),Object(a.b)("h2",{id:"full-example"},"Full example"),Object(a.b)("p",null,"Below you can find a full Jenkinsfile example with a complete GitOps workflow example and a driftctl scan."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'# ====================\n# Classic GitOps workflow\n# ====================\n\npipeline {\n    agent any\n    environment {\n        AWS_DEFAULT_REGION="us-east-1"\n        AWS_ACCESS_KEY_ID=credentials("AWS_ACCESS_KEY_ID")\n        AWS_SECRET_ACCESS_KEY=credentials("AWS_SECRET_ACCESS_KEY")\n        PATH="$PATH:$HOME/dctlenv/bin/"\n    }\n    stages {\n        stage("Init") {\n            steps {\n                sh "terraform init"\n            }\n        }\n        stage(\'Validate\') {\n            failFast true\n            parallel {\n                stage("driftctl") {\n                    steps {\n                        sh "which dctlenv || git clone https://github.com/wbeuil/dctlenv"\n                        sh "dctlenv use latest"\n                        sh "driftctl scan"\n                    }\n                }\n                stage("terraform/fmt") {\n                    steps {\n                        sh "terraform fmt -check -diff"\n                    }\n                }\n                stage("terraform/validate") {\n                    steps {\n                        sh "terraform validate"\n                    }\n                }\n            }\n        }\n        stage("Plan") {\n            steps {\n                sh "terraform plan -out=plan.out"\n            }\n        }\n        stage("Deploy") {\n            steps {\n                sh "terraform apply -input=false plan.out"\n            }\n        }\n    }\n}\n\n')))}u.isMDXComponent=!0}}]);