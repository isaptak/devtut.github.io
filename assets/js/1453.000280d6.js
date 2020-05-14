(window.webpackJsonp=window.webpackJsonp||[]).push([[1453],{1798:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"swift-changing-the-rootviewcontroller-in-appdelegate-to-present-main-or-login-onboarding-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-changing-the-rootviewcontroller-in-appdelegate-to-present-main-or-login-onboarding-flow"}},[t._v("#")]),t._v(" Swift: Changing the rootViewController in AppDelegate to present main or login/onboarding flow")]),t._v(" "),s("p",[t._v("It is often useful to present a first-run experience to new users of your App. This could be for any number of reasons, such as prompting them to sign in (if required for your situation), explaining how to use the App, or simply informing them of new features in an update (as Notes, Photos and Music do in iOS11).")]),t._v(" "),s("h2",{attrs:{id:"option-1-swap-the-root-view-controller-good"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-1-swap-the-root-view-controller-good"}},[t._v("#")]),t._v(" Option 1: Swap the Root View Controller (Good)")]),t._v(" "),s("p",[t._v("There are benefits to switching the root view controller, although the transition options are limited to those supported by "),s("code",[t._v("UIViewAnimationOptions")]),t._v(", so depending on how you wish to transition between flows might mean you have to implement a custom transition - which can be cumbersome.")]),t._v(" "),s("p",[t._v("You can show the Onboarding flow by simply setting the "),s("code",[t._v("UIApplication.shared.keyWindow.rootViewController")])]),t._v(" "),s("p",[t._v("Dismissal is handled by utilizing "),s("code",[t._v("UIView.transition(with:)")]),t._v(" and passing the transition style as a "),s("code",[t._v("UIViewAnimationOptions")]),t._v(", in this case Cross Dissolve. (Flips and Curls are also supported).")]),t._v(" "),s("p",[t._v("You also have to set the frame of the Main view before you transition back to it, as you're instantiating it for the first time.")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MARK: - Onboarding")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AppDelegate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" onboardingViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIStoryboard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Onboarding"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateInitialViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("OnboardingViewController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            onboardingViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n            window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" onboardingViewController\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mainViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIStoryboard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateInitialViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            mainViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds\n            "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionCrossDissolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mainViewController\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"option-2-present-alternative-flow-modally-better"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-2-present-alternative-flow-modally-better"}},[t._v("#")]),t._v(" Option 2: Present Alternative Flow Modally (Better)")]),t._v(" "),s("p",[t._v("In the most straightforward implementation, the Onboarding flow can simply be presented in a modal context, since semantically the User is on a single journey.")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("[Apple Human Interface Guidelines – Modality][1]:\nConsider creating a modal context only when it’s critical to get someone’s attention, when a task must be completed or abandoned to continue using the app, or to save important data.")]),t._v(" "),s("p",[t._v("Presenting modally allows the simple option of dismissal at the end of the journey, with little of the cruft of swapping controllers.")]),t._v(" "),s("p",[t._v("Custom transitions are also supported in the standard way, since this uses the "),s("code",[t._v("ViewController.present()")]),t._v(" API:")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MARK: - Onboarding")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AppDelegate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" onboardingViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIStoryboard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Onboarding"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateInitialViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("OnboardingViewController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            onboardingViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n            window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeKeyAndVisible")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("present")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onboardingViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" window "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyWindow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dismiss")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Firstly, as you are dealing with multiple flows, this is where Storyboards can be used effectively. By default your Application uses "),s("code",[t._v("Main.storyboard")]),t._v(" for your primary flow. Your onboarding/alternative flow can be contained in a secondary storyboard, eg. "),s("code",[t._v("Onboarding.storyboard")])]),t._v(" "),s("p",[t._v("This has a number of advantages:")]),t._v(" "),s("ul",[s("li",[t._v("in a team of developers, the work on each user flow can be separated")]),t._v(" "),s("li",[t._v("clearer source control (git)")]),t._v(" "),s("li",[t._v("separation of concerns")])]),t._v(" "),s("p",[t._v("When your App launches, you can determine which flow should be presented. The logic for this can be contained in your AppDelegate:")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didFinishLaunchingWithOptions launchOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIApplicationLaunchOptionsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isFirstRun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// logic to determine goes here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isFirstRun "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showOnboarding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("In order to show the Onboarding flow, it's worth considering how you'd like to handle the experience of dismissing it once the person using it has completed the journey, and which is semantically correct for what you are trying to create.")]),t._v(" "),s("h3",{attrs:{id:"approaches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approaches"}},[t._v("#")]),t._v(" Approaches:")]),t._v(" "),s("p",[t._v("The two main approaches are:")]),t._v(" "),s("ol",[s("li",[t._v("Swap the root view controller of the App's main window")]),t._v(" "),s("li",[t._v("Present the Onboarding flow as a modal journey, overlapping the Main flow.")])]),t._v(" "),s("p",[t._v("The implementation of this should be contained in an extension to AppDelegate.")])])}),[],!1,null,null,null);n.default=e.exports}}]);