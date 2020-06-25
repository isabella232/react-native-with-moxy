(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),o=(n(0),n(158)),r={id:"internationalization",title:"Internationalization",sidebar_label:"Internationalization"},l={id:"what-is-included/internationalization",title:"Internationalization",description:"All of our projects have i18n support built-in, even if there's no need to initially have more than one locale. By having i18n support from the very beginning, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good portion of your app.",source:"@site/docs/what-is-included/internationalization.md",permalink:"/docs/what-is-included/internationalization",sidebar_label:"Internationalization",sidebar:"docs",previous:{title:"ESLint",permalink:"/docs/what-is-included/eslint"},next:{title:"Testing with Jest and Native Testing Library",permalink:"/docs/what-is-included/testing-with-jest-native-testing-library"}},c=[{value:"How to use",id:"how-to-use",children:[]},{value:"Locale resolution",id:"locale-resolution",children:[]},{value:"Adding a new locale",id:"adding-a-new-locale",children:[]},{value:"Removing this feature",id:"removing-this-feature",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All of our projects have i18n support built-in, even if there's no need to initially have more than one locale. By having i18n support from the very beginning, the project itself is built with that in mind, making it very easy to add new locales in the future without having to refactor a good portion of your app."),Object(o.b)("p",null,"We have chosen ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/formatjs/react-intl/"}),Object(o.b)("inlineCode",{parentName:"a"},"react-intl"))," for internationalization and localization because:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It has a large community and is being actively maintained."),Object(o.b)("li",{parentName:"ul"},"Built on the standard ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"Intl")," API."),Object(o.b)("li",{parentName:"ul"},"It can localize strings, numbers, dates and relative dates."),Object(o.b)("li",{parentName:"ul"},"Runs in the browser, Node.js and React Native.")),Object(o.b)("p",null,"Additionally, we also make use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-localize"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-localize"))," to get hold of locale settings from the device's operating system."),Object(o.b)("h2",{id:"how-to-use"},"How to use"),Object(o.b)("p",null,"The boilerplate ships with a few modules which you can use to format and translate your app's messages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LocaleProvider")," - React context provider. Wraps your app's navigation in ",Object(o.b)("inlineCode",{parentName:"li"},"src/app/App.js"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LocaleConsumer")," - React context consumer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useLocale")," - React hook."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"withLocale")," - React HOC (high-order component).")),Object(o.b)("p",null,"All four modules above belong to ",Object(o.b)("inlineCode",{parentName:"p"},"src/shared/modules/react-native-locale")," package. In the Home screen of the app, you can find an example of how to use ",Object(o.b)("inlineCode",{parentName:"p"},"useLocale")," and how to create a handler to switch the selected language between English and Portuguese when a button is pressed. The value returned by ",Object(o.b)("inlineCode",{parentName:"p"},"useLocale")," is exactly the same one injected by ",Object(o.b)("inlineCode",{parentName:"p"},"withLocale")," and rendered by ",Object(o.b)("inlineCode",{parentName:"p"},"LocaleConsumer"),"."),Object(o.b)("h2",{id:"locale-resolution"},"Locale resolution"),Object(o.b)("p",null,"When the app is launched, if ",Object(o.b)("inlineCode",{parentName:"p"},"initialLocaleId")," is not defined, ",Object(o.b)("inlineCode",{parentName:"p"},"LocaleProvider")," attempts to find the best possible match between the preferred locales defined in the device's operating system and the locales defined for the app. If a match is found, the translations for the matched locale are loaded. Otherwise, the translations for the default locale, ",Object(o.b)("inlineCode",{parentName:"p"},"en-US"),", are loaded. If your app offers an in-app locale picker and persists the user's choice, i.e. with Redux, make sure to pass it to ",Object(o.b)("inlineCode",{parentName:"p"},"initialLocaleId")," when ",Object(o.b)("inlineCode",{parentName:"p"},"LocaleProvider")," is first rendered."),Object(o.b)("h2",{id:"adding-a-new-locale"},"Adding a new locale"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the locale to the ",Object(o.b)("inlineCode",{parentName:"li"},"intl/index.js")," file, following the default ",Object(o.b)("inlineCode",{parentName:"li"},"en-US")," locale."),Object(o.b)("li",{parentName:"ol"},"Add the messages file to ",Object(o.b)("inlineCode",{parentName:"li"},"intl/messages/<locale>.json"),".")),Object(o.b)("h2",{id:"removing-this-feature"},"Removing this feature"),Object(o.b)("p",null,"If you are really sure internationalization is not needed in your project, you'll want to remove all the unnecessary ",Object(o.b)("inlineCode",{parentName:"p"},"intl")," related code. Be sure to follow these steps in order to clean your project properly:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Uninstall ",Object(o.b)("inlineCode",{parentName:"li"},"react-intl"),", ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-localize")," and ",Object(o.b)("inlineCode",{parentName:"li"},"full-icu"),"."),Object(o.b)("li",{parentName:"ol"},"Remove the ",Object(o.b)("inlineCode",{parentName:"li"},"NODE_ICU_DATA")," environment variable from ",Object(o.b)("inlineCode",{parentName:"li"},"test")," script, found in ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(o.b)("li",{parentName:"ol"},"Remove the ",Object(o.b)("inlineCode",{parentName:"li"},"intl")," folder."),Object(o.b)("li",{parentName:"ol"},"Search globally for ",Object(o.b)("inlineCode",{parentName:"li"},"react-intl")," and remove the corresponding code across the project."),Object(o.b)("li",{parentName:"ol"},"Update your unit tests if necessary so that they all pass!")))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);