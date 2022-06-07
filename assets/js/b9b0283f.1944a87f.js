"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63302],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60605:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"crash-reporting",title:"Crash Reporting"},l=void 0,c={unversionedId:"usage/flags/crash-reporting",id:"version-0.22.0/usage/flags/crash-reporting",title:"Crash Reporting",description:"When a crash occurs in driftctl, we do not send any crash reports.",source:"@site/versioned_docs/version-0.22.0/usage/flags/crash-reporting.mdx",sourceDirName:"usage/flags",slug:"/usage/flags/crash-reporting",permalink:"/0.22.0/usage/flags/crash-reporting",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.22.0/usage/flags/crash-reporting.mdx",tags:[],version:"0.22.0",frontMatter:{id:"crash-reporting",title:"Crash Reporting"},sidebar:"version-0.22.0/docs",previous:{title:".driftignore generator",permalink:"/0.22.0/usage/cmd/gen-driftignore-usage"},next:{title:"Version Check",permalink:"/0.22.0/usage/flags/version-check"}},p={},u=[{value:"Example",id:"example",level:2}],g={toc:u};function m(e){var r=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},g,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a crash occurs in driftctl, we do not send any crash reports."),(0,o.kt)("p",null,"For debugging purposes, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"--send-crash-report")," when running driftctl and crash data will be sent to us via ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io"},"Sentry"),"."),(0,o.kt)("p",null,"Below is a list of data we retrieve when error reporting is enabled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"date"),": Event date"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"os name"),': Operating System (string, e.g. : "linux | mac | windows")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"architecture"),': Architecture of your CPU (string, e.g. : "amd64 | i389")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"num_cpu"),": Number of cores of your CPU (int, e.g. : 8)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"release"),': driftctl version (string, e.g. : "v0.2.2")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"server_name"),': Your computer hostname (string, e.g. : "yourhostname")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"runtime version"),': Golang version (string, e.g. : "go1.15.2")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"runtime infos"),": Variables go_maxprocs, go_numcgocalls, go_numroutines"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"packages"),": Golang used packages and their versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"stacktrace"),": The error stack")),(0,o.kt)("p",null,"The crash reporting is silent, it will never make your scan fail. You can know whether a report has been sent or not by setting the log level to debug : ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug driftctl scan ..."),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below is a full example of a nil pointer crash report."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry",src:n(93865).Z,width:"1201",height:"2079"})),(0,o.kt)("p",null,"The RAW stack for this example is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'runtime.errorString: runtime error: invalid memory address or nil pointer dereference\n  File "/go/src/app/pkg/parallel_runner.go", line 93, in (*ParallelRunner).Run.func1.1\n  File "/go/src/app/pkg/remote/aws/s3_bucket_supplier.go", line 71, in readBucketRegion\n  File "/go/src/app/pkg/remote/aws/s3_bucket_inventory_supplier.go", line 42, in (*S3BucketInventorySupplier).Resources\n  File "/go/src/app/pkg/scanner.go", line 28, in (*Scanner).Resources.func1\n  File "/go/src/app/pkg/parallel_runner.go", line 97, in (*ParallelRunner).Run.func1\n')))}m.isMDXComponent=!0},93865:function(e,r,n){r.Z=n.p+"assets/images/sentry-2fbf7805ce69b6f14c223592c4570f0a.png"}}]);