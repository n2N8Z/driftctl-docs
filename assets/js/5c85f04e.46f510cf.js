"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90801],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},73703:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={id:"crash-reporting",title:"Crash Reporting"},i=void 0,s={unversionedId:"usage/flags/crash-reporting",id:"version-0.24.0/usage/flags/crash-reporting",title:"Crash Reporting",description:"When a crash occurs in driftctl, we do not send any crash reports.",source:"@site/versioned_docs/version-0.24.0/usage/flags/crash-reporting.mdx",sourceDirName:"usage/flags",slug:"/usage/flags/crash-reporting",permalink:"/0.24.0/usage/flags/crash-reporting",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.24.0/usage/flags/crash-reporting.mdx",tags:[],version:"0.24.0",frontMatter:{id:"crash-reporting",title:"Crash Reporting"},sidebar:"version-0.24.0/docs",previous:{title:".driftignore generator",permalink:"/0.24.0/usage/cmd/gen-driftignore-usage"},next:{title:"Version Check",permalink:"/0.24.0/usage/flags/version-check"}},l={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a crash occurs in driftctl, we do not send any crash reports."),(0,a.kt)("p",null,"For debugging purposes, you can add ",(0,a.kt)("inlineCode",{parentName:"p"},"--send-crash-report")," when running driftctl and crash data will be sent to us via ",(0,a.kt)("a",{parentName:"p",href:"https://sentry.io"},"Sentry"),"."),(0,a.kt)("p",null,"Below is a list of data we retrieve when error reporting is enabled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"date"),": Event date"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"os name"),': Operating System (string, e.g. : "linux | mac | windows")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"architecture"),': Architecture of your CPU (string, e.g. : "amd64 | i389")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"num_cpu"),": Number of cores of your CPU (int, e.g. : 8)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"release"),': driftctl version (string, e.g. : "v0.2.2")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"server_name"),': Your computer hostname (string, e.g. : "yourhostname")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"runtime version"),': Golang version (string, e.g. : "go1.15.2")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"runtime infos"),": Variables go_maxprocs, go_numcgocalls, go_numroutines"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"packages"),": Golang used packages and their versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stacktrace"),": The error stack")),(0,a.kt)("p",null,"The crash reporting is silent, it will never make your scan fail. You can know whether a report has been sent or not by setting the log level to debug : ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug driftctl scan ..."),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Below is a full example of a nil pointer crash report."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sentry",src:t(29666).Z,width:"1201",height:"2079"})),(0,a.kt)("p",null,"The RAW stack for this example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'runtime.errorString: runtime error: invalid memory address or nil pointer dereference\n  File "/go/src/app/pkg/parallel_runner.go", line 93, in (*ParallelRunner).Run.func1.1\n  File "/go/src/app/pkg/remote/aws/s3_bucket_supplier.go", line 71, in readBucketRegion\n  File "/go/src/app/pkg/remote/aws/s3_bucket_inventory_supplier.go", line 42, in (*S3BucketInventorySupplier).Resources\n  File "/go/src/app/pkg/scanner.go", line 28, in (*Scanner).Resources.func1\n  File "/go/src/app/pkg/parallel_runner.go", line 97, in (*ParallelRunner).Run.func1\n')))}u.isMDXComponent=!0},29666:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/sentry-2fbf7805ce69b6f14c223592c4570f0a.png"}}]);