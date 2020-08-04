(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(81)),i={id:"splash-screen",title:"Splash screen",sidebar_label:"Splash screen"},s={unversionedId:"welcome/instructions/splash-screen",id:"welcome/instructions/splash-screen",isDocsHomePage:!1,title:"Splash screen",description:"React Native with MOXY includes a splash screen which was generated from MOXY's logo by react-native-bootsplash. Nowadays, it's common for apps to have a splash screen with a plain background color and a logo both vertically and horizontally centered in the screen. As such, by default, we adhere to this principle. Take Twitter and Notion apps for example:",source:"@site/docs/welcome/instructions/splash-screen.md",permalink:"/docs/welcome/instructions/splash-screen",sidebar_label:"Splash screen",sidebar:"docs",previous:{title:"Android app signing",permalink:"/docs/welcome/instructions/android-app-signing"},next:{title:"App icon",permalink:"/docs/welcome/instructions/app-icon"}},c=[{value:"Output assets location",id:"output-assets-location",children:[]},{value:"Custom splash screens",id:"custom-splash-screens",children:[]},{value:"<code>SplashScreen</code> component",id:"splashscreen-component",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native with MOXY includes a splash screen which was generated from MOXY's logo by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zoontek/react-native-bootsplash"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-bootsplash")),". Nowadays, it's common for apps to have a splash screen with a plain background color and a logo both vertically and horizontally centered in the screen. As such, by default, we adhere to this principle. Take Twitter and Notion apps for example:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Notion"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Twitter"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(n.a)({parentName:"td"},{src:"/img/twitter-splash-screen.png",alt:"Twitter splash screen"}))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(n.a)({parentName:"td"},{src:"/img/notion-splash-screen.png",alt:"Notion splash screen"})))))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"react-native-bootsplash")," conveniently ships with a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zoontek/react-native-bootsplash#assets-generation"}),"CLI")," to generate the necessary assets to create a splash screen for both iOS and Android. The recommended size for the logo is 100dp which is equivalent to 100px in medium-density screens (~160dpi or ",Object(r.b)("em",{parentName:"p"},"mdpi"),", the base line density) on Android. In a 640dpi screen (",Object(r.b)("em",{parentName:"p"},"xxxhdpi"),", the largest density), 100dp equals 400px. Therefore, you should use a logo 400x400px in size. You can use the same size for iOS because 100dp is ",Object(r.b)("em",{parentName:"p"},"roughly")," equivalent to 100pt (actually more like ~102pt) on a base line density of 163dpi. However, you can go for a greater size if you wish."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 If you don't understand what's the relationship between px (pixels) and dp (density-independent pixels), we recommend you to have a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/multiscreen/screendensities"}),"official Android documentation"),".")),Object(r.b)("p",null,"To create a splash screen with your own logo, replacing the existing one, run the following command from the root of your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npx generate-bootsplash\n")),Object(r.b)("p",null,"The CLI will prompt you to answer a few ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/img/generate-splash-screen.png"}),"questions"),". Please follow the instructions and answer yes when you're prompted to replace all existing images. If all goes well, fire up the app and you should see your splash screen come up to life! Otherwise, if you have any doubt or run into trouble, confer ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-bootsplash"),"'s ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zoontek/react-native-bootsplash/blob/2.1.0/README.md"}),Object(r.b)("inlineCode",{parentName:"a"},"README"))," or ask for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zoontek/react-native-bootsplash/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"}),"help")," if you get stuck."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Feel free to remove the ",Object(r.b)("inlineCode",{parentName:"p"},"assets")," directory that is created after you're done. You won't need it.")),Object(r.b)("h3",{id:"output-assets-location"},"Output assets location"),Object(r.b)("h4",{id:"android"},"Android"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"mdpi:")," ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-mdpi/bootsplash_logo.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hdpi:")," ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-hdpi/bootsplash_logo.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"xhdpi:")," ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xhdpi/bootsplash_logo.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"xxhdpi:")," ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxhdpi/bootsplash_logo.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"xxxhdpi:")," ",Object(r.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxxhdpi/bootsplash_logo.png"))),Object(r.b)("h4",{id:"ios"},"iOS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1x"),": ",Object(r.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"2x"),": ",Object(r.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@2x.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"3x"),": ",Object(r.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@3x.png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"4x"),": ",Object(r.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/BootSplashLogo.imageset/bootsplash_logo@4x.png"))),Object(r.b)("h3",{id:"custom-splash-screens"},"Custom splash screens"),Object(r.b)("p",null,"It shouldn't be difficult to create a customized splash screen for iOS by fiddling with ",Object(r.b)("inlineCode",{parentName:"p"},"BootSplash.storyboard")," through Xcode, which can be found at ",Object(r.b)("inlineCode",{parentName:"p"},"ios/reactNativeWithMoxy")," directory. However, you should know your way around iOS' Storyboards and Xcode Layout Editor."),Object(r.b)("p",null,"In case of Android, it's a bit more complicated because you have to create a custom layout, either imperatively with Java or declaratively with XML. Whatever route you take, at the time of writing, ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-bootsplash")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zoontek/react-native-bootsplash/issues/112"}),"does not offer support for custom layouts"),". Nonetheless, you should be able to add extra drawables to ",Object(r.b)("inlineCode",{parentName:"p"},"layer-list")," and position them to your liking by manipulating ",Object(r.b)("inlineCode",{parentName:"p"},"bootsplash.xml"),", which can can be found at ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/src/main/res/drawable")," directory. Confer the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/resources/drawable-resource#LayerList"}),"official Android documentation"),"."),Object(r.b)("h2",{id:"splashscreen-component"},Object(r.b)("inlineCode",{parentName:"h2"},"SplashScreen")," component"),Object(r.b)("p",null,"This component, which you can find at ",Object(r.b)("inlineCode",{parentName:"p"},"src/shared/modules/react-native-splash-screen"),", wraps ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-bootsplash")," and takes care of hiding the splash screen once the app is ready. It does, however, provide some configuration which you can control, in the form of the following props:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hide"),": ",Object(r.b)("em",{parentName:"li"},"true")," or ",Object(r.b)("em",{parentName:"li"},"false"),". If left untouched, the splash screen will be hidden automatically when the JavaScript is done loading. This prop is useful if you need to need to delay startup until one or more asynchronous operations are completed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fadeOutDurationMs"),": value in milliseconds. Determines the duration of the fade out transition.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u2757\ufe0fYour app's navigation should be a children of ",Object(r.b)("inlineCode",{parentName:"p"},"SplashScreen")," so it's not rendered until the splash screen is being displayed. See ",Object(r.b)("inlineCode",{parentName:"p"},"src/app/App.js"),".")))}l.isMDXComponent=!0},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(h,s(s({ref:t},p),{},{components:a})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);