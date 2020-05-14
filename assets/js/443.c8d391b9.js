(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{792:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"grunt-tasks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grunt-tasks"}},[t._v("#")]),t._v(" Grunt tasks")]),t._v(" "),n("h2",{attrs:{id:"run-application-locally"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-application-locally"}},[t._v("#")]),t._v(" Run application locally")]),t._v(" "),n("blockquote"),t._v(" "),n("p",[t._v("Following example requires that [node.js](https://nodejs.org) is installed and [npm](https://www.npmjs.com) is available."),n("br"),t._v("\nFull working code can be forked from GitHub @ [https://github.com/mikkoviitala/angular-grunt-run-local](https://github.com/mikkoviitala/angular-grunt-run-local)")]),t._v(" "),n("p",[t._v("Usually one of the first things you want to do when developing new web application is to make it run locally.")]),t._v(" "),n("p",[t._v("Below you'll find complete example achieving just that, using "),n("a",{attrs:{href:"http://gruntjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt"),n("OutboundLink")],1),t._v(" (javascript task runner), "),n("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),n("OutboundLink")],1),t._v(" (node package manager) and "),n("a",{attrs:{href:"https://bower.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("bower"),n("OutboundLink")],1),t._v(" (yet another package manager).")]),t._v(" "),n("p",[n("strong",[t._v("Beside your actual application files")]),t._v(" you'll need to install few 3rd party dependencies using tools mentioned above. In your project directory, "),n("strong",[t._v("preferably root")]),t._v(", you'll need three (3) files.")]),t._v(" "),n("ul",[n("li",[t._v("package.json (dependencies managed by npm)")]),t._v(" "),n("li",[t._v("bower.json (dependencies managed by bower)")]),t._v(" "),n("li",[t._v("gruntfile.js (grunt tasks)")])]),t._v(" "),n("p",[t._v("So your project directory looks like so:")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://i.stack.imgur.com/GlnAc.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://i.stack.imgur.com/GlnAc.png",alt:"enter image description here"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("package.json")])]),t._v(" "),n("p",[t._v("We'll be installing "),n("strong",[t._v("grunt")]),t._v(" itself, "),n("strong",[t._v("matchdep")]),t._v(" to make our life easier allowing us to filter dependencies by name, "),n("strong",[t._v("grunt-express")]),t._v(" used to start express web server via grunt and "),n("strong",[t._v("grunt-open")]),t._v(" to open urls/files from a grunt task.")]),t._v(" "),n("p",[t._v('So these packages are all about "infrastructure" and helpers we\'ll be building our application on.')]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grunt"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~0.4.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"matchdep"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~0.1.2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grunt-express"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~1.0.0-beta2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grunt-open"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~0.2.1"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postinstall"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bower install"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("strong",[t._v("bower.json")])]),t._v(" "),n("p",[t._v("Bower is (or at least should be) all about front-end and we'll be using it to install "),n("strong",[t._v("angular")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"angular"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~1.3.x"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("strong",[t._v("gruntfile.js")])]),t._v(" "),n("p",[t._v('Inside gruntfile.js we\'ll have the actual "running application locally" magic, which opens our application in new browser window, running on '),n("a",{attrs:{href:"http://localhost:9000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9000/"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// see http://rhumaric.com/2013/07/renewing-the-grunt-livereload-magic/")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("grunt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matchdep'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterDev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'grunt-*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grunt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadNpmTasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n  grunt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    express"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      all"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          hostname"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          bases"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n    open"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      all"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:<%= express.all.options.port%>'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n  grunt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerTask")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-keepalive'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[n("strong",[t._v("Usage")])]),t._v(" "),n("p",[t._v("To get your application up & running from scratch, save above files to your project's root directory (any empty folder will do). Then fire up console/command line and type in the following to install all required dependencies.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g grunt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli bower\nnpm install\n\n")])])]),n("p",[t._v("And then run your application using")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("grunt app\n\n")])])]),n("p",[t._v("Note that yes, you'll be needing your actual application files, too."),n("br"),t._v("\nFor almost-minimal example browse "),n("a",{attrs:{href:"https://github.com/mikkoviitala/angular-grunt-run-local",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repository"),n("OutboundLink")],1),t._v(" mentioned in beginning of this example.")]),t._v(" "),n("p",[t._v("There structure ain't that different. There's just "),n("code",[t._v("index.html")]),t._v(" template, angular code in "),n("code",[t._v("app.js")]),t._v(" and few styles in "),n("code",[t._v("app.css")]),t._v(". Other files are for Git and editor configuration and some generic stuff. Give it a try!")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://i.stack.imgur.com/58e4t.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://i.stack.imgur.com/58e4t.png",alt:"enter image description here"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://i.stack.imgur.com/M1649.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"http://i.stack.imgur.com/M1649.png",alt:"enter image description here"}}),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);