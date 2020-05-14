(window.webpackJsonp=window.webpackJsonp||[]).push([[1358],{1704:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"custom-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-fonts"}},[t._v("#")]),t._v(" Custom fonts")]),t._v(" "),s("h2",{attrs:{id:"embedding-custom-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#embedding-custom-fonts"}},[t._v("#")]),t._v(" Embedding custom fonts")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("**Custom Font Support**"),s("br"),t._v("\nApplications that want to use custom fonts can now include those fonts in their application bundle and register those fonts with the system by including the UIAppFonts key in their Info.plist file. The value of this key is an array of strings identifying the font files in the application’s bundle. When the system sees the key, it loads the specified fonts and makes them available to the application.")]),t._v(" "),s("p",[t._v("Once the fonts have been set in the "),s("code",[t._v("Info.plist")]),t._v(", you can use your custom fonts as any other font in IB or programatically.")]),t._v(" "),s("ol",[s("li",[t._v('Drag and drop your font to Xcode Supporting Files folder. Don\'t forget to mark your app at "Add to targets" section. From this moment you can use this font in IB and choose it from font pallet.')])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/d9Vun.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/d9Vun.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("To make this font available on the device, open `Info.plist` and add `Fonts provided by application key` (UIAppFonts). Add font name as the value to the Item 0 key. Note: Font name can vary from your font file name.\n["),s("img",{attrs:{src:"https://i.stack.imgur.com/nN47U.png",alt:"enter image description here"}}),t._v("](https://i.stack.imgur.com/nN47U.png)")]),t._v(" "),s("ol",[s("li",[t._v("Get the custom added font name using below snippet")])]),t._v(" "),s("p",[t._v("["),s("strong",[t._v("Swift 3")]),t._v("]")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" family "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("familyNames "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("family"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fontNames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forFamilyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" family"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("["),s("strong",[t._v("Objective - C")]),t._v("]")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("familyName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),t._v(" familyNames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Family name: %@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" familyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),t._v(" fontNamesForFamilyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("familyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--Font name: %@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"custom-fonts-with-storyboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-fonts-with-storyboard"}},[t._v("#")]),t._v(" Custom Fonts with Storyboard")]),t._v(" "),s("p",[t._v("Custom Fonts for UI components from storyboard can be easily achieved with "),s("a",{attrs:{href:"https://developer.apple.com/library/ios/recipes/xcode_help-interface_builder/Chapters/AddUserDefinedRuntimeAttributes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Defined Runtime Attributes"),s("OutboundLink")],1),t._v(" in storyboard and "),s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/General/Conceptual/DevPedia-CocoaCore/Category.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Categories"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The advantages are like,")]),t._v(" "),s("ul",[s("li",[t._v("No need to define outlets for the ui element")]),t._v(" "),s("li",[t._v("No need to set font for elements programatically.")])]),t._v(" "),s("blockquote"),t._v(" "),s("p",[s("strong",[t._v("Steps to follow")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Font File:")]),t._v(" Add the Font file (.ttf) to the application bundle and add the entry for the font in Info.plist under "),s("strong",[s("em",[t._v("Font provided by\napplication")])]),t._v(" as in this "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/ios/drafts/41034",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(" of custom fonts.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Define Categories:")]),t._v(" Add a file like "),s("strong",[s("strong",[t._v("UIKit+IBExtensions")])]),t._v(" and add the categories for UI elements like UILabel, UIButton etc. for\nwhich you want to set custom font. All the categories will be having a\ncustom property say "),s("strong",[t._v("fontName")]),t._v(". This will be using from the\nstoryboard later for setting custom font (as in step 4).")])])])]),t._v(" "),s("h3",{attrs:{id:"uikit-ibextensions-h"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uikit-ibextensions-h"}},[t._v("#")]),t._v(" UIKit+IBExtensions.h")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("#"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIKit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Category extension for UILabel")]),t._v("\n@interface "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UILabel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n@end\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Category extension for UITextField")]),t._v("\n@interface "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n@end\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Category extension for UIButton")]),t._v("\n@interface "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIButton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@property "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n@end\n\n")])])]),s("blockquote"),t._v(" "),s("ol",{attrs:{start:"3"}},[t._v("\n- **Getters and Setters:** Define getters and setters for the fontName property towards each category added.\n")]),t._v(" "),s("h3",{attrs:{id:"uikit-ibextensions-m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uikit-ibextensions-m"}},[t._v("#")]),t._v(" UIKit+IBExtensions.m")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("#"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UIKit+IBExtensions.h"')]),t._v("\n\n@implementation "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UILabel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setFontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),t._v(" fontWithName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fontName size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@end\n\n@implementation "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UITextField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setFontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),t._v(" fontWithName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fontName size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@end\n\n@implementation "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIButton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("IBExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setFontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSString")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("fontName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIFont")]),t._v(" fontWithName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fontName size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@end\n\n")])])]),s("blockquote"),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("**Setting font in storyboard:**  Add an entry in User Defined Runtime Attributes with ****fontName**** as keyPath and your "),s("strong",[s("em",[t._v("Custom\nFont's Name")])]),t._v(" as value with type as String as shown.")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://i.stack.imgur.com/uG7Kh.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/uG7Kh.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("This will set your custom font while running the app.")])]),t._v(" "),s("p",[t._v("Notes:")]),t._v(" "),s("ul",[s("li",[t._v("Lato-Regular is the custom font I have used.")]),t._v(" "),s("li",[t._v("Same name in the "),s("strong",[s("strong",[t._v(".ttf")])]),t._v(" file added in bundle should be used without extension in storyboard.")]),t._v(" "),s("li",[t._v("Font size will be same as it is defined in the UI element's attribute inspector.")])]),t._v(" "),s("h2",{attrs:{id:"applying-custom-fonts-to-controls-within-a-storyboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applying-custom-fonts-to-controls-within-a-storyboard"}},[t._v("#")]),t._v(" Applying custom fonts  to controls within a Storyboard")]),t._v(" "),s("p",[t._v("The following example shows how to apply custom fonts to a Navigation Bar and includes fixes for some quirky behaviors found in Xcode. One also may apply the custom fonts to "),s("strong",[t._v("any other UIControls")]),t._v(" such as "),s("strong",[t._v("UILabels")]),t._v(", "),s("strong",[t._v("UIButtons")]),t._v(", and more by using the attributes inspector after the custom font is added to the project. Please note the external links to working samples and videos near the bottom.")]),t._v(" "),s("ol",[s("li",[t._v("Select Your Navigation Bar within your Navigation Controller")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/kTgul.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/kTgul.png",alt:"navbar"}}),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("Change the Title Font in the Attributes Inspector")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/FQyiW.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/FQyiW.png",alt:"title-font"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("(You will likely need to toggle the Bar Tint for the Navigation Bar before Xcode picks up the new font)")])]),t._v(" "),s("h3",{attrs:{id:"notes-caveats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-caveats"}},[t._v("#")]),t._v(" Notes (Caveats)")]),t._v(" "),s("p",[t._v("Verified that this does work on Xcode 7.1.1+. ("),s("strong",[t._v("See the Samples below")]),t._v(")")]),t._v(" "),s("ol",[s("li",[t._v("You do need to toggle the nav bar tint before the font takes effect (seems like a bug in Xcode; you can switch it back to default and font will stick)\n")]),s("li",[t._v("If you choose a system font ~ Be sure to make sure the size is not\n0.0 (Otherwise the new font will be ignored)")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/33nJ9.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/33nJ9.png",alt:"size"}}),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Seems like this works with no problem when only one NavBar is in the view\nhierarchy. It appears that secondary NavBars in the same stack are ignored. (Note that if you show the master navigation controller's navBar all the other custom navBar settings are ignored).")]),t._v(" "),s("h3",{attrs:{id:"gotchas-deux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gotchas-deux"}},[t._v("#")]),t._v(" Gotchas (deux)")]),t._v(" "),s("p",[s("strong",[t._v("Some of these are repeated which means they are very likely worth noting.")])]),t._v(" "),s("li",[t._v("Sometimes the storyboard xml gets corrupt. This requires you to\nreview the structure in Storyboard as Source Code mode (right click\nthe storyboard file > Open As ...)")]),t._v(" "),s("li",[t._v("In some cases the navigationItem tag associated with user defined runtime attribute was set as an xml\nchild of the view tag instead of the view controller tag. If so\nremove it from between the  tags for proper operation.")]),t._v(" "),s("li",[t._v("Toggle the NavBar Tint to ensure the custom font is\nused.")]),t._v(" "),s("li",[t._v("Verify the size parameter of the font unless using a dynamic font\nstyle")]),t._v(" "),s("li",[t._v("View hierarchy will override the settings. It appears that one font\nper stack is possible.")]),t._v(" "),s("h3",{attrs:{id:"result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://s28.postimg.org/gvgs0lxwd/NHg_Ex.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"http://s28.postimg.org/gvgs0lxwd/NHg_Ex.png",alt:"navbar-italic"}}),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samples"}},[t._v("#")]),t._v(" Samples")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://googledrive.com/host/0B8D3kbf8rViMS3MxQ3prcXRXUHM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Video Showing Multiple Fonts In Advanced Project"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bitbucket.org/mingsai/navbarfontupdate/get/b796b40e1ec5.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple Source Download"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bitbucket.org/mingsai/multiplenavstackfonttest/get/bfd5fcb34be9.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Project Download ~ Shows Multiple NavBar Fonts & Custom Font Workaround"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://googledrive.com/host/0B8D3kbf8rViMUHdUSE1BbW4zUnM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Video Showing Multiple Fonts & Custom Fonts"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"handling-custom-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-custom-fonts"}},[t._v("#")]),t._v(" Handling Custom Fonts")]),t._v(" "),s("p",[s("strong",[t._v("Note ~ A "),s("a",{attrs:{href:"http://codewithchris.com/common-mistakes-with-adding-custom-fonts-to-your-ios-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nice checklist"),s("OutboundLink")],1),t._v(" can be found from the Code With Chris website and you can see the sample download project.")])]),t._v(" "),s("p",[t._v("If you have your own font and want to use that in your storyboard, then there is a decent set of answers on the following "),s("a",{attrs:{href:"http://stackoverflow.com/questions/9090745/custom-font-in-a-storyboard#15155081",target:"_blank",rel:"noopener noreferrer"}},[t._v("SO Question"),s("OutboundLink")],1),t._v(". One answer identifies these steps.")]),t._v(" "),s("ol",[s("li",[t._v("Get you custom font file(.ttf,.ttc)")]),t._v(" "),s("li",[t._v("Import the font files to your Xcode project\n")]),s("li",[t._v("In the app-info.plist,add a key named Fonts provided by\napplication.It's an array type , add all your font file names to the\narray,note:including the file extension.")]),t._v(" "),s("li",[t._v("In the storyboard , on the NavigationBar go to the Attribute\nInspector,click the right icon button of the Font select area.In the\npopup panel , choose Font to Custom, and choose the Family of you\nembeded font name.")])]),t._v(" "),s("h3",{attrs:{id:"custom-font-workaround"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-font-workaround"}},[t._v("#")]),t._v(" Custom Font Workaround")]),t._v(" "),s("p",[t._v("So Xcode naturally looks like it can handle custom fonts on UINavigationItem but that feature is just not updating properly (The font selected is ignored).")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/1SvP0.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/1SvP0.png",alt:"UINavigationItem"}}),s("OutboundLink")],1)]),t._v(" "),s("blockquote"),t._v(" "),s("p",[s("strong",[t._v("To workaround this:")])]),s("p",[t._v("One way is to fix using the storyboard and adding a line of\ncode: First add a UIView (UIButton, UILabel, or some other UIView\nsubclass) to the View Controller (Not the Navigation Item...Xcode is not currently allowing one to do that). After you add the control\nyou can modify the font in the storyboard and add a reference as an\noutlet to your View Controller. Just assign that view to the\nUINavigationItem.titleView. You could also set the text name in code\nif necessary. Reported Bug (23600285).")]),s("p"),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@IBOutlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" customFontTitleView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIButton")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Sometime later...    ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" customFontTitleView\n\n")])])]),s("p",[t._v("Note - This example is derived from an answer I posted on SO ("),s("a",{attrs:{href:"http://stackoverflow.com/questions/19791762/ios-change-navigation-bar-title-font-and-color/33761674#33761674",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(").")])])}),[],!1,null,null,null);n.default=e.exports}}]);