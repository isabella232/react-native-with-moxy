(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(9),o=(a(0),a(159)),c={id:"app-icon",title:"App icon",sidebar_label:"App icon"},p={id:"welcome/instructions/app-icon",title:"App icon",description:"Every app should have an impactul icon that stands out from all the others apps available on the user's device.",source:"@site/docs/welcome/instructions/app-icon.md",permalink:"/docs/welcome/instructions/app-icon",sidebar_label:"App icon",sidebar:"docs",previous:{title:"Splash screen",permalink:"/docs/welcome/instructions/splash-screen"},next:{title:"Conventions",permalink:"/docs/welcome/conventions"}},r=[{value:"How to generate the assets",id:"how-to-generate-the-assets",children:[]},{value:"Output assets location",id:"output-assets-location",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:r};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every app should have an impactul icon that stands out from all the others apps available on the user's device."),Object(o.b)("p",null,"An app icon is a graphic that represents your app to users. It can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Appear in the list of apps installed on a device and on the Home screen."),Object(o.b)("li",{parentName:"ul"},"Represent shortcuts into your app (for example, a contact shortcut icon that opens detail information for a contact)."),Object(o.b)("li",{parentName:"ul"},"Help users find your app on Google Play and App Store.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f  An app icon is mandatory to publish the app to TestFlight/App Store and Google Play.")),Object(o.b)("h3",{id:"how-to-generate-the-assets"},"How to generate the assets"),Object(o.b)("p",null,"First and foremost, we need to take into consideration that automatic generation won't work everytime.\nSometimes, small adjustments to an icon may be necessary and that should probably be done manually so it looks exactly how it is supposed to.\nThere are design tools that solve this problem, e.g. Sketch and Adobe Illustrator, which allow further customization and can assist designers in automatically exporting the icons.\nNonetheless, automatic generation from a single asset should always be the first step to take as it is the most efficient and effective for most use cases."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2757\ufe0f The raw app icon asset's resolution should be 1024x1024px or bigger, so it can be used to generate both Android and iOS icons through the recommended generators.")),Object(o.b)("h4",{id:"android"},"Android"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2757\ufe0f Android 8.0 Oreo introduced adaptive icons and apps running on it or later versions are ought to support them.")),Object(o.b)("p",null,"Android assets can be generated using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/studio/write/image-asset-studio"}),"Image Asset Studio"),"."),Object(o.b)("p",null,"To start Image Asset Studio, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the project on Android Studio."),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"Project")," window, select the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/studio/projects#ProjectFiles"}),"Android view"),"."),Object(o.b)("li",{parentName:"ol"},"Right-click the ",Object(o.b)("strong",{parentName:"li"},"res")," folder and select ",Object(o.b)("strong",{parentName:"li"},"New > Image Asset"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/image-asset-studio.png",alt:"Image Asset Studio"}))),Object(o.b)("p",null,"The app icon should have both a square and a round version.\nThe tool offers a few options which you can tweak as much as you like, but we only cover the necessary ones."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f  The following instructions don't cover how to generate ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive"}),"adaptive icons"),", which are icons that can display a variety of shapes across different device models.\nHowever it isn't much different, actually. To generate those, you should use the ",Object(o.b)("strong",{parentName:"p"},"Launcher Icons (Adaptive and Legacy)")," option for the ",Object(o.b)("strong",{parentName:"p"},"Icon Type"),".")),Object(o.b)("h5",{id:"square-icons"},"Square icons"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Icon Type")," should be the ",Object(o.b)("strong",{parentName:"li"},"Launcher Icons (Legacy only)")," option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Name")," should be renamed from ",Object(o.b)("inlineCode",{parentName:"li"},"ic_launcher")," to ",Object(o.b)("inlineCode",{parentName:"li"},"app_icon"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Asset Type")," should be ",Object(o.b)("strong",{parentName:"li"},"Image")," and the raw app icon path should be given."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Shape")," should be ",Object(o.b)("strong",{parentName:"li"},"Square"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/image-asset-studio-launcher-icons-legacy-only-square.png",alt:"Image Asset Studio - Launcher Icons (Legacy only) with Square shape"}))),Object(o.b)("p",null,"After that you should click on ",Object(o.b)("strong",{parentName:"p"},"Next")," and finally on the ",Object(o.b)("strong",{parentName:"p"},"Finish")," button."),Object(o.b)("h5",{id:"round-icons"},"Round icons"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Icon Type")," should be the ",Object(o.b)("strong",{parentName:"li"},"Launcher Icons (Legacy only)")," option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Name")," should be renamed from ",Object(o.b)("inlineCode",{parentName:"li"},"ic_launcher")," to ",Object(o.b)("inlineCode",{parentName:"li"},"app_icon_round"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Asset Type")," should be ",Object(o.b)("strong",{parentName:"li"},"Image")," and the raw app icon path should be given."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Shape")," should be ",Object(o.b)("strong",{parentName:"li"},"Circle"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/image-asset-studio-launcher-icons-legacy-only-circle.png",alt:"Image Asset Studio - Launcher Icons (Legacy only) with Circle shape"}))),Object(o.b)("p",null,"After that you should click on ",Object(o.b)("strong",{parentName:"p"},"Next")," and finally on the ",Object(o.b)("strong",{parentName:"p"},"Finish")," button."),Object(o.b)("h5",{id:"google-play-icon"},"Google Play icon"),Object(o.b)("p",null,"Having a proper Google Play icon can help your app attract new users.\nThis icon won't replace your app's launcher icon, it will be used in various locations on Google Play instead."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Note that the Google Play icon isn't generated by the Image Asset Studio, so it should be manually created by following the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/google-play/resources/icon-design-specifications"}),"official design specifications"),".")),Object(o.b)("p",null,"How to upload the icon:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign in to your ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://play.google.com/apps/publish/"}),"Play Console"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"All Applications"),"."),Object(o.b)("li",{parentName:"ol"},"Select an app."),Object(o.b)("li",{parentName:"ol"},"On the left menu, click ",Object(o.b)("strong",{parentName:"li"},"Store Presence > Store listing"),"."),Object(o.b)("li",{parentName:"ol"},'Under "Graphic Assets" you can upload your images, including the Google Play icon (Hi-res icon).')),Object(o.b)("h4",{id:"ios"},"iOS"),Object(o.b)("p",null,"iOS assets can be generated using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://appicon.co/"}),"App Icon Generator"),'.\nIn the "iOS and macOS" section, only ',Object(o.b)("inlineCode",{parentName:"p"},"iPhone")," and ",Object(o.b)("inlineCode",{parentName:"p"},"iPad"),' should be selected.\nIt is possible to either click and browse the image source or simply drag and drop it.\nAfter selecting the image, click on the "Generate" button to download the assets.'),Object(o.b)("p",null,"We can also recommend the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Fueled/ios-icon-generator"}),"Fueled/ios-icon-generator")," tool, which is a command line interface (CLI) that generates the icons."),Object(o.b)("p",null,"Although not mandatory, we recommend to rename the generated assets according to the following pattern: ",Object(o.b)("inlineCode",{parentName:"p"},"<resolution>@x<multiplier>"),".\nThis way, it becomes makes easier to identify the attributes of each icon and their purpose simply by glancing at its name."),Object(o.b)("h3",{id:"output-assets-location"},"Output assets location"),Object(o.b)("h4",{id:"android-1"},"Android"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Note that if you used Image Asset Studio, you won't have to bother about this, because the tool automatically places the assets into the correct locations.")),Object(o.b)("h5",{id:"square-icons-1"},"Square icons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mdpi (48x48@1x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-mdpi/app_icon.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hdpi (72x72@1",".","5x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-hdpi/app_icon.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xhdpi (96x96@2x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xhdpi/app_icon.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xxhdpi (144x144@3x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxhdpi/app_icon.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xxxhdpi (192x192@4x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxxhdpi/app_icon.png"))),Object(o.b)("h5",{id:"round-icons-1"},"Round icons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mdpi (48x48@1x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-mdpi/app_icon_round.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hdpi (72x72@1",".","5x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-hdpi/app_icon_round.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xhdpi (96x96@2x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xhdpi/app_icon_round.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xxhdpi (144x144@3x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxhdpi/app_icon_round.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"xxxhdpi (192x192@4x):")," ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/main/res/mipmap-xxxhdpi/app_icon_round.png"))),Object(o.b)("p",null,"After moving the assets to the following locations, there is nothing more to do."),Object(o.b)("h4",{id:"ios-1"},"iOS"),Object(o.b)("p",null,"There are two options: either you manually move the icons and reflect the changes on the ",Object(o.b)("inlineCode",{parentName:"p"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/Contents.json")," file or\ndrag and drop the assets using XCode, which will automatically update it."),Object(o.b)("p",null,"Using XCode:"),Object(o.b)("p",null,"In the project tree, navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"reactNativeWithMoxy > Images.xcassets"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/xcode-app-icon.png",alt:"XCode AppIcon"}))),Object(o.b)("p",null,"Now you should be able to drag and drop each asset to its correct location."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2757\ufe0f When the drag and drop approach is used, XCode will change a file's name if it's already being used for another purpose.\nBe sure to manually rename it to its original name on ",Object(o.b)("inlineCode",{parentName:"p"},"Contents.json"),".")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Before"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"After"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",Object(n.a)({parentName:"td"},{src:"/img/xcode-app-icon-drag-n-drop.png",alt:"XCode AppIcon Drag and Drop"}))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("img",Object(n.a)({parentName:"td"},{src:"/img/xcode-app-icon-drag-n-drop-completed.png",alt:"XCode AppIcon Drag and Drop Completed"})))))),Object(o.b)("h5",{id:"iphone-notifications-ios-7-13-20pt"},"iPhone Notifications (iOS 7-13 20pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"40x40@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@2x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"60x60@3x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/60x60@3x.png"))),Object(o.b)("h5",{id:"iphone-settings-ios-7-13-29pt"},"iPhone Settings (iOS 7-13 29pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"58x58@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/58x58@2x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"87x87@3x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/87x87@3x.png"))),Object(o.b)("h5",{id:"iphone-spotlight-ios-7-13-40pt"},"iPhone Spotlight (iOS 7-13 40pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"80x80@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/80x80@2x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"120x120@3x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/120x120@3x.png"))),Object(o.b)("h5",{id:"iphone-app-ios-7-13-60pt"},"iPhone App (iOS 7-13 60pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"120x120@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/120x120@2x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"180x180@3x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/180x180@3x.png"))),Object(o.b)("h5",{id:"ipad-notifications-ios-7-13-20pt"},"iPad Notifications (iOS 7-13 20pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"20x20@1x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/20x20@1x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"40x40@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@2x.png"))),Object(o.b)("h5",{id:"ipad-settings-ios-7-13-29pt"},"iPad Settings (iOS 7-13 29pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"29x29@1x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/29x29@1x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"58x58@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/58x58@2x.png"))),Object(o.b)("h5",{id:"ipad-spotlight-ios-7-13-40pt"},"iPad Spotlight (iOS 7-13 40pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"40x40@1x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/40x40@1x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"80x80@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/80x80@2x.png"))),Object(o.b)("h5",{id:"ipad-app-ios-7-13-76pt"},"iPad App (iOS 7-13 76pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"76x76@1x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/76x76@1x.png")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"152x152@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/152x152@2x.png"))),Object(o.b)("h5",{id:"ipad-pro-app-ios-7-13-835pt"},"iPad Pro App (iOS 7-13 83.5pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"167x167@2x"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/167x167@2x.png"))),Object(o.b)("h5",{id:"app-store-ios-1024pt"},"App Store (iOS 1024pt)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"1024x1024"),": ",Object(o.b)("inlineCode",{parentName:"li"},"ios/reactNativeWithMoxy/Images.xcassets/AppIcon.appiconset/1024x1024.png"))),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/"}),"App Icon - Icons and Images - iOS - Human Interface guidelines")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/google-play/resources/icon-design-specifications"}),"Google Play icon design specifications")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/google-design/understanding-android-adaptive-icons-cee8a9de93e2"}),"Understanding Android Adaptive Icons - Google Design")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/google-design/designing-adaptive-icons-515af294c783"}),"Designing Adaptive Icons - Google Design")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/androiddevelopers/implementing-adaptive-icons-1e4d1795470e"}),"Implementing Adaptive Icons - Android Developers"))))}s.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return a?i.a.createElement(u,p(p({ref:t},l),{},{components:a})):i.a.createElement(u,p({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);