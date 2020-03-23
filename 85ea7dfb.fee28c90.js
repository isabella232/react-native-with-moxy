(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),i=(n(0),n(153)),a={id:"instructions",title:"Instructions",sidebar_label:"Instructions"},c={id:"welcome/instructions",title:"Instructions",description:"To kick-start your own project from this boilerplate, you can fork it from its [repository](https://github.com/moxystudio/react-native-with-moxy).",source:"@site/docs/welcome/instructions.md",permalink:"/docs/welcome/instructions",sidebar_label:"Instructions",sidebar:"docs",previous:{title:"What is this",permalink:"/docs/welcome/what-is-this"},next:{title:"Conventions",permalink:"/docs/welcome/conventions"}},l=[{value:"1. Tweak some project files",id:"1-tweak-some-project-files",children:[{value:"TODO",id:"todo",children:[]}]},{value:"2. Replace the root README.md",id:"2-replace-the-root-readmemd",children:[]},{value:"3. Setup documentation",id:"3-setup-documentation",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To kick-start your own project from this boilerplate, you can fork it from its ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-native-with-moxy"}),"repository"),".\nAfterwards, you'll just need to install its dependencies and you're good to go! \ud83d\ude80"),Object(i.b)("p",null,"Keep in mind, part of adapting this boilerplate into a deliverable project is also changing this document into one that's about your project in specific. There are some things you must change to clean up any evidence of using this boilerplate."),Object(i.b)("h2",{id:"1-tweak-some-project-files"},"1. Tweak some project files"),Object(i.b)("h3",{id:"todo"},"TODO"),Object(i.b)("p",null,"Add instructions on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How to update package name for Android, bundle identifier for iOS, project name, etc."),Object(i.b)("li",{parentName:"ul"},"How to setup environment (.env) configuration"),Object(i.b)("li",{parentName:"ul"},"Which files are unnecessary and should be deleted"),Object(i.b)("li",{parentName:"ul"},"App signing: How to create Android's upload key and add it to the project"),Object(i.b)("li",{parentName:"ul"},"App signing: How to create a team, iOS' provisioning profile and developer certificates and add setup them up in the project"),Object(i.b)("li",{parentName:"ul"},"How to update Android app icon"),Object(i.b)("li",{parentName:"ul"},"How to update iOS app icon")),Object(i.b)("h2",{id:"2-replace-the-root-readmemd"},"2. Replace the root README.md"),Object(i.b)("p",null,"Replace the root README.md file of the project with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-md"}),"# {Project Name}\n\n{Brief explanation of the project}\n\n## Documentation\n\nThis project comes with a documentation web page. To view it:\n\n```bash\nnpm i --prefix docusaurus\nnpm run docs\n```\n\n")),Object(i.b)("h2",{id:"3-setup-documentation"},"3. Setup documentation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove algolia search from Docusaurus config:"),Object(i.b)("p",{parentName:"li"},"Remove the ",Object(i.b)("inlineCode",{parentName:"p"},"themeConfig.algolia")," key from ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus/docusaurus.config.js"),". The reason is that the search results indexed by Algolia will become out of sync with the documentation, causing it to possibly return wrong results (404 pages).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prepare the rest of the documentation website to be deliverable to your clients!"))))}u.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=o,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return n?r.a.createElement(m,c({ref:t},p,{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);