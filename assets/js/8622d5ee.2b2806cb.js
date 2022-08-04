"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=o,p=f["".concat(c,".").concat(g)]||f[g]||u[g]||i;return n?r.createElement(p,a(a({ref:t},d),{},{components:n})):r.createElement(p,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"gen-driftignore-usage",title:".driftignore generator"},a=void 0,s={unversionedId:"usage/cmd/gen-driftignore-usage",id:"version-0.30.0/usage/cmd/gen-driftignore-usage",title:".driftignore generator",description:"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution.",source:"@site/versioned_docs/version-0.30.0/usage/cmd/gen-driftignore.mdx",sourceDirName:"usage/cmd",slug:"/usage/cmd/gen-driftignore-usage",permalink:"/0.30.0/usage/cmd/gen-driftignore-usage",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.30.0/usage/cmd/gen-driftignore.mdx",tags:[],version:"0.30.0",frontMatter:{id:"gen-driftignore-usage",title:".driftignore generator"},sidebar:"docs",previous:{title:"Completion",permalink:"/0.30.0/usage/cmd/completion-usage"},next:{title:"Crash Reporting",permalink:"/0.30.0/usage/flags/crash-reporting"}},c={},l=[{value:"Using Docker",id:"using-docker",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution."),(0,o.kt)("p",null,"You can start using driftctl with a clean state, by ignoring all the current resources that are not yet under control. driftctl provides a command to automatically generate a .driftignore file from a previous scan given the type of resources you want to exclude (e.g. unmanaged, missing or changed resources). This command parses a JSON input from a given file and sends output to stdout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Append all current drift to .driftignore\n$ driftctl scan -o json://stdout | driftctl gen-driftignore\n\n# Print proposed driftignore based on all current drift to stdout\n$ driftctl scan -o json://stdout | driftctl gen-driftignore -o -\n\n# Changed resources will be excluded\n$ driftctl scan --from tfstate://state1.tfstate -o json://stdout | driftctl gen-driftignore --exclude-changed\n\n# Unmanaged resources will be excluded\n# In this example, we use a file as an intermediate step instead of piping into\n# gen-driftignore\n$ driftctl scan --from tfstate://state1.tfstate -o json://result.json\n$ driftctl gen-driftignore -i result.json --exclude-unmanaged\n")),(0,o.kt)("p",null,"You can filter which kind of resource you want to ignore using these flags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--exclude-unmanaged")," : Exclude resources not managed by IaC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--exclude-missing")," : Exclude resources missing on cloud provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--exclude-changed")," : Exclude resources that changed from IaC")),(0,o.kt)("h2",{id:"using-docker"},"Using Docker"),(0,o.kt)("p",null,"Run a scan with JSON output enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=driftctl-demo \\\n  -e AWS_REGION=us-east-1 \\\n  snyk/driftctl scan --from tfstate://**/*.tfstate --output json://drifts.json\n[...]\n")),(0,o.kt)("p",null,"Finally, generate the ",(0,o.kt)("inlineCode",{parentName:"p"},".driftignore")," file from the JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=driftctl-demo \\\n  -e AWS_REGION=us-east-1 \\\n  snyk/driftctl gen-driftignore -i drifts.json\n[...]\n")))}u.isMDXComponent=!0}}]);