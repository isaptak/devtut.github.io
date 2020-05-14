(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{547:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"handling-deep-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-deep-links"}},[t._v("#")]),t._v(" Handling Deep Links")]),t._v(" "),s("p",[t._v("Deep links are URLs that take users directly to specific content in your app. You can set up deep links by adding intent filters and extracting data from incoming intents to drive users to the right screen in your app.")]),t._v(" "),s("h2",{attrs:{id:"retrieving-query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-query-parameters"}},[t._v("#")]),t._v(" Retrieving query parameters")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIntent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uri")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" param1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" param2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("If the user clicks on a linkto "),s("code",[t._v("http://www.example.com/map?param1=FOO&param2=BAR")]),t._v(", then "),s("code",[t._v("param1")]),t._v(" here will have a value of "),s("code",[t._v('"FOO"')]),t._v(" and "),s("code",[t._v("param2")]),t._v(" will have a value of "),s("code",[t._v('"BAR"')]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"simple-deep-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-deep-link"}},[t._v("#")]),t._v(" Simple deep link")]),t._v(" "),s("p",[s("strong",[t._v("AndroidManifest.xml:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will accept any link starting with "),s("code",[t._v("http://www.example.com")]),t._v(" as a deep link to start your "),s("code",[t._v("MainActivity")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"multiple-paths-on-a-single-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-paths-on-a-single-domain"}},[t._v("#")]),t._v(" Multiple paths on a single domain")]),t._v(" "),s("p",[s("strong",[t._v("AndroidManifest.xml:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/map"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will launch your "),s("code",[t._v("MainActivity")]),t._v(" when the user clicks any of these links:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("http://www.example.com/")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example.com/about")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example.com/map")])])]),t._v(" "),s("h2",{attrs:{id:"multiple-domains-and-multiple-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-domains-and-multiple-paths"}},[t._v("#")]),t._v(" Multiple domains and multiple paths")]),t._v(" "),s("p",[s("strong",[t._v("AndroidManifest.xml:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example2.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/map"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will launch your MainActivity when the user clicks any of these links:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("http://www.example.com/")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example2.com/")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example.com/map")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example2.com/map")])])]),t._v(" "),s("h2",{attrs:{id:"both-http-and-https-for-the-same-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#both-http-and-https-for-the-same-domain"}},[t._v("#")]),t._v(" Both http and https for the same domain")]),t._v(" "),s("p",[s("strong",[t._v("AndroidManifest.xml:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example.com"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/map"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will launch your MainActivity when the user clicks any of these links:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("http://www.example.com/")])]),t._v(" "),s("li",[s("code",[t._v("https://www.example.com/")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example.com/map")])]),t._v(" "),s("li",[s("code",[t._v("https://www.example.com/map")])])]),t._v(" "),s("h2",{attrs:{id:"using-pathprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-pathprefix"}},[t._v("#")]),t._v(" Using pathPrefix")]),t._v(" "),s("p",[s("strong",[t._v("AndroidManifest.xml:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("activity android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.MainActivity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scheme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.example.com"')]),t._v("\n              android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/item"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("activity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("This will launch your MainActivity when the user clicks any link starting with "),s("code",[t._v("http://www.example.com/item")]),t._v(", such as:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("https://www.example.com/item")])]),t._v(" "),s("li",[s("code",[t._v("http://www.example.com/item/1234")])]),t._v(" "),s("li",[s("code",[t._v("https://www.example.com/item/xyz/details")])])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("<data>")]),t._v(" Attribute")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("scheme")]),t._v(" "),s("td",[t._v("The "),s("strong",[t._v("scheme")]),t._v(" part of a URI (case-sensitive). Examples: "),s("code",[t._v("http")]),t._v(", "),s("code",[t._v("https")]),t._v(", "),s("code",[t._v("ftp")])])]),t._v(" "),s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("The "),s("strong",[t._v("host")]),t._v(" part of a URI (case-sensitive). Examples: "),s("code",[t._v("google.com")]),t._v(", "),s("code",[t._v("example.org")])])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("The "),s("strong",[t._v("port")]),t._v(" part of a URI. Examples: "),s("code",[t._v("80")]),t._v(", "),s("code",[t._v("443")])])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("The "),s("strong",[t._v("path")]),t._v(" part of a URI. Must begin with  "),s("code",[t._v("/")]),t._v(". Examples:  "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("/about")])])]),t._v(" "),s("tr",[s("td",[t._v("pathPrefix")]),t._v(" "),s("td",[t._v("A prefix for the "),s("strong",[t._v("path")]),t._v(" part of a URI. Examples: "),s("code",[t._v("/item")]),t._v(", "),s("code",[t._v("/article")])])]),t._v(" "),s("tr",[s("td",[t._v("pathPattern")]),t._v(" "),s("td",[t._v("A pattern to match for the "),s("strong",[t._v("path")]),t._v(" part of a URI. Examples: "),s("code",[t._v("/item/.*")]),t._v(", "),s("code",[t._v("/article/[0-9]*")])])]),t._v(" "),s("tr",[s("td",[t._v("mimeType")]),t._v(" "),s("td",[t._v("A mime type to match. Examples: "),s("code",[t._v("image/jpeg")]),t._v(", "),s("code",[t._v("audio/*")])])])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("h3",{attrs:{id:"the-intent-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-intent-filter"}},[t._v("#")]),t._v(" The "),s("code",[t._v("<intent-filter>")])]),t._v(" "),s("p",[t._v("This combination of "),s("code",[t._v("<action>")]),t._v(" and "),s("code",[t._v("<category>")]),t._v(" elements is what tells the Android system that a specific Activity should be launched when the user clicks on a link in another application.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("action android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.action.VIEW"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.DEFAULT"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("category android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android.intent.category.BROWSABLE"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"multiple-data-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-data-tags"}},[t._v("#")]),t._v(" Multiple "),s("code",[t._v("<data>")]),t._v(" tags")]),t._v(" "),s("p",[t._v("The set of deep links that your "),s("code",[t._v("<intent-filter>")]),t._v(" supports is the cross-product of all the "),s("code",[t._v("<data>")]),t._v(" elements that you define in that intent-filter. The multiple domain, multiple path, and multiple scheme examples demonstrate this.")]),t._v(" "),s("h3",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.android.com/training/app-indexing/deep-linking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enabling Deep Links for App Content"),s("OutboundLink")],1),t._v(" (developer.android.com)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.android.com/guide/topics/manifest/intent-filter-element.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("<intent-filter>")]),s("OutboundLink")],1),t._v(" (developer.android.com")])])])}),[],!1,null,null,null);a.default=e.exports}}]);