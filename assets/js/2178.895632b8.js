(window.webpackJsonp=window.webpackJsonp||[]).push([[2178],{2525:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-node-js-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-node-js-application"}},[t._v("#")]),t._v(" Debugging Node.js application")]),t._v(" "),s("h2",{attrs:{id:"core-node-js-debugger-and-node-inspector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-node-js-debugger-and-node-inspector"}},[t._v("#")]),t._v(" Core node.js debugger and node inspector")]),t._v(" "),s("h3",{attrs:{id:"using-core-debugger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-core-debugger"}},[t._v("#")]),t._v(" Using core debugger")]),t._v(" "),s("p",[t._v("Node.js provides a build in non graphical debugging utility. To start the build in the debugger, start the application with this command:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("node debug filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])]),s("p",[t._v("Consider the following simple Node.js application contained in the "),s("code",[t._v("debugDemo.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function returns the sum of the two numbers")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The keyword "),s("code",[t._v("debugger")]),t._v(" will stop the debugger at that point in the code.")]),t._v(" "),s("h3",{attrs:{id:"command-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-reference"}},[t._v("#")]),t._v(" Command reference")]),t._v(" "),s("ol",[s("li",[t._v("Stepping")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Continue execution\nnext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Step next\nstep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Step "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\nout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Step out\n\n")])])]),s("ol",[s("li",[t._v("Breakpoints")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBreakpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Set breakpoint on current line\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBreakpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Set breakpoint on specific line\n\n")])])]),s("p",[t._v("To Debug the above code run the following command")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("node debug debugDemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])]),s("p",[t._v("Once the above commands runs you will see the following output. To exit from the debugger interface, type "),s("code",[t._v("process.exit()")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/XSJMF.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/XSJMF.png",alt:"enter image description here"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("watch(expression)")]),t._v(" command to add the variable or expression whose value you want to watch and "),s("code",[t._v("restart")]),t._v(" to restart the app and debugging.")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("repl")]),t._v(" to enter code interactively. The repl mode has the same context as the line you are debugging. This allows you to examine the contents of variables and test out lines of code. Press "),s("code",[t._v("Ctrl+C")]),t._v(" to leave the debug repl.")]),t._v(" "),s("h3",{attrs:{id:"using-built-in-node-inspector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-built-in-node-inspector"}},[t._v("#")]),t._v(" Using Built-in Node inspector")]),t._v(" "),s("p",[t._v("You can run node's "),s("a",{attrs:{href:"https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js",target:"_blank",rel:"noopener noreferrer"}},[t._v("built in"),s("OutboundLink")],1),t._v(" v8 inspector! The "),s("a",{attrs:{href:"https://github.com/node-inspector/node-inspector",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-inspector"),s("OutboundLink")],1),t._v(" plug-in is not needed anymore.")]),t._v(" "),s("p",[t._v("Simply pass the inspector flag and you'll be provided with a URL to the inspector")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("inspect server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])]),s("h3",{attrs:{id:"using-node-inspector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-node-inspector"}},[t._v("#")]),t._v(" Using Node inspector")]),t._v(" "),s("p",[t._v("Install the node inspector:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector\n\n")])])]),s("p",[t._v("Run your app with the node-debug command:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("debug filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n")])])]),s("p",[t._v("After that, hit in Chrome:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5858")]),t._v("\n\n")])])]),s("p",[t._v("Sometimes port 8080 might not be available on your computer. You may get the following error:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Cannot start the server at 0.0.0.0:8080. Error: listen EACCES.")]),t._v(" "),s("p",[t._v("In this case, start the node inspector on a different port using the following command.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inspector "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("\n\n")])])]),s("p",[t._v("You will see something like this:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/JpaL6.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/JpaL6.png",alt:"enter image description here"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);