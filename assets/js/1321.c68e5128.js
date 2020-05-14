(window.webpackJsonp=window.webpackJsonp||[]).push([[1321],{1667:function(t,a,e){"use strict";e.r(a);var n=e(19),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"background-modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-modes"}},[t._v("#")]),t._v(" Background Modes")]),t._v(" "),e("p",[t._v("Being responsive is a need for every app. Users want to have apps which have their content ready when they open it, so developers should use Background Modes to make their apps more user friendly.")]),t._v(" "),e("h2",{attrs:{id:"turning-on-the-background-modes-capability"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turning-on-the-background-modes-capability"}},[t._v("#")]),t._v(" Turning on the Background Modes capability")]),t._v(" "),e("li",[t._v("\nGo to Xcode and open your project.\n")]),t._v(" "),e("li",[t._v("\nIn your app target, navigate to Capabilities tab.\n")]),t._v(" "),e("li",[t._v("\nTurn on Background Modes.\n")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/5Fj8R.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/5Fj8R.png",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"background-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-fetch"}},[t._v("#")]),t._v(" Background Fetch")]),t._v(" "),e("p",[t._v("Background fetch is a new mode that lets your app appear always up-to-date with the latest information while minimizing the impact on battery. You could download feeds within fixed time intervals with this capability.")]),t._v(" "),e("p",[t._v("To get started:")]),t._v(" "),e("p",[t._v("1- Check Background Fetch in capabilities screen in Xcode.")]),t._v(" "),e("p",[t._v("2- In "),e("code",[t._v("application(_:didFinishLaunchingWithOptions:)")]),t._v(" method in "),e("code",[t._v("AppDelegate")]),t._v(", add:")]),t._v(" "),e("h3",{attrs:{id:"swift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMinimumBackgroundFetchInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplicationBackgroundFetchIntervalMinimum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"objective-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective-c"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),t._v(" shared"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" setMinimumBackgroundFetchInterval"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplicationBackgroundFetchIntervalMinimum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),e("blockquote"),t._v(" "),e("p",[t._v("Instead of "),e("code",[t._v("UIApplicationBackgroundFetchIntervalMinimum")]),t._v(", you could use any "),e("code",[t._v("CGFloat")]),t._v(" value to set fetch intervals.")]),t._v(" "),e("p",[t._v("3- You must implement "),e("code",[t._v("application(_:performFetchWithCompletionHandler:)")]),t._v(". Add that to your "),e("code",[t._v("AppDelegate")]),t._v(":")]),t._v(" "),e("h3",{attrs:{id:"swift-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swift-2"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" performFetchWithCompletionHandler completionHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @escaping "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIBackgroundFetchResult")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your code here")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"testing-background-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-background-fetch"}},[t._v("#")]),t._v(" Testing background fetch")]),t._v(" "),e("p",[t._v("1- Run the app on a real device and attach it to Xcode debugger.")]),t._v(" "),e("p",[t._v("2- From Debug menu, select "),e("strong",[t._v("Simulate Background Fetch")]),t._v(":")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/OE4dg.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/OE4dg.png",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("3- Now Xcode will pause the app with SIGSTOP signal. Just tap the continue button to let the app do the background fetch.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/wWxSS.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/wWxSS.png",alt:"enter image description here"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Now you will see that data is fetched and ready for you.")]),t._v(" "),e("h2",{attrs:{id:"background-audio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-audio"}},[t._v("#")]),t._v(" Background Audio")]),t._v(" "),e("p",[t._v("By default, when you are streaming an audio, by exiting the app it will stop, but you can prevent this by turning on the first check box in Background capability page in Xcode.")]),t._v(" "),e("p",[t._v("iOS will automatically handle this for you, and you don't need to write any code!")])])}),[],!1,null,null,null);a.default=s.exports}}]);