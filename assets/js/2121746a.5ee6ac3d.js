"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9683],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],l={id:"gitlabci",title:"GitlabCI"},o=void 0,s={unversionedId:"ci_cd/guides/gitlabci",id:"version-0.15.0/ci_cd/guides/gitlabci",isDocsHomePage:!1,title:"GitlabCI",description:"You can integrate driftctl in GitlabCI by taking as example this repository.",source:"@site/versioned_docs/version-0.15.0/ci_cd/guides/gitlabci.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/gitlabci",permalink:"/0.15.0/ci_cd/guides/gitlabci",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/ci_cd/guides/gitlabci.mdx",tags:[],version:"0.15.0",frontMatter:{id:"gitlabci",title:"GitlabCI"},sidebar:"version-0.15.0/docs",previous:{title:"GitHub Action",permalink:"/0.15.0/ci_cd/guides/ghaction"},next:{title:"Jenkins",permalink:"/0.15.0/ci_cd/guides/jenkins"}},u=[{value:"Full example",id:"full-example",children:[],level:2}],p={toc:u};function f(e){var t=e.components,l=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can integrate driftctl in GitlabCI by taking as example this ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/cloudskiff/driftctl-ci-example"},"repository"),"."),(0,a.kt)("p",null,"You can integrate driftctl within your GitOps workflow to get something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:n(2760).Z})),(0,a.kt)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"failure",src:n(496).Z})),(0,a.kt)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a driftctl run every hour"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"schedule",src:n(2068).Z})),(0,a.kt)("h2",{id:"full-example"},"Full example"),(0,a.kt)("p",null,"Below you can find a full GitlabCI example with a complete GitOps workflow example and a scheduled run of driftctl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'stages:\n  - init\n  - validate\n  - plan\n  - deploy\n\n.driftctl:\n  image:\n    name: snyk/driftctl\n    entrypoint: [""]\n  script:\n    - driftctl scan\n\n# ====================\n# Scheduled driftctl run\n# ====================\n# Scheduled driftctl run\ndriftctl:scheduled:\n  extends: .driftctl\n  only:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\n# ====================\n# Classic GitOps workflow\n# ====================\n\n# Used to share .terraform cached providers in terraform jobs\n.tfcache: &tfcache\n  cache:\n    key: ${CI_PIPELINE_ID}\n    paths:\n      - .terraform\n\n# Terraform image to use for every terraform jobs\n.terraform: &terraform\n  image:\n    name: hashicorp/terraform:0.14.4\n    entrypoint: [""]\n\nterraform/init:\n  <<: *terraform\n  <<: *tfcache\n  stage: init\n  except:\n    - schedules\n  script:\n    - terraform init\n\ndriftctl:\n  extends: .driftctl\n  except:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\nterraform/fmt:\n  <<: *terraform\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform fmt -check -diff\n\nterraform/validate:\n  <<: *terraform\n  <<: *tfcache\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform validate\n\nterraform/plan:\n  <<: *terraform\n  <<: *tfcache\n  stage: plan\n  except:\n    - schedules\n  artifacts:\n    name: plan\n    expire_in: 1 day\n    paths:\n      - "plan.out"\n  script:\n    - terraform plan -out=plan.out\n\nterraform/apply:\n  <<: *terraform\n  <<: *tfcache\n  stage: deploy\n  when: manual\n  dependencies:\n    - terraform/plan\n  except:\n    - schedules\n  script:\n    - terraform apply plan.out\n\n')))}f.isMDXComponent=!0},496:function(e,t,n){t.Z=n.p+"assets/images/failure-a4ca4f35cf518566b1c6280998a321e4.png"},2068:function(e,t,n){t.Z=n.p+"assets/images/schedule-638af56b6a9427cae93b13493b558e5d.png"},2760:function(e,t,n){t.Z=n.p+"assets/images/success-739403b2ff1c76505754d68b5cf4f3c3.png"}}]);