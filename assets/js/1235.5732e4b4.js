(window.webpackJsonp=window.webpackJsonp||[]).push([[1235],{1580:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"typed-holes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typed-holes"}},[a._v("#")]),a._v(" Typed holes")]),a._v(" "),e("h2",{attrs:{id:"syntax-of-typed-holes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-of-typed-holes"}},[a._v("#")]),a._v(" Syntax of typed holes")]),a._v(" "),e("p",[a._v("A typed hole is a single underscore ("),e("code",[a._v("_")]),a._v(") or a valid Haskell identifier which is not in scope, in an expression context. Before the existance of typed holes, both of these things would trigger an error, so the new syntax does not interfere with any old syntax.")]),a._v(" "),e("h3",{attrs:{id:"controlling-behaviour-of-typed-holes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#controlling-behaviour-of-typed-holes"}},[a._v("#")]),a._v(" Controlling behaviour of typed holes")]),a._v(" "),e("p",[a._v("The default behaviour of typed holes is to produce a compile-time error when encountering a typed hole. However, there are several flags to fine-tune their behaviour. These flags are summarized as follows ("),e("a",{attrs:{href:"https://ghc.haskell.org/trac/ghc/ticket/9497",target:"_blank",rel:"noopener noreferrer"}},[a._v("GHC trac"),e("OutboundLink")],1),a._v("):")]),a._v(" "),e("blockquote"),a._v(" "),e("p",[a._v("By default GHC has typed holes enabled and produces a compile error\nwhen it encounters a typed hole.")]),a._v(" "),e("p",[a._v("When `-fdefer-type-errors` **or** `-fdefer-typed-holes` is enabled, hole\nerrors are converted to warnings and result in runtime errors when\nevaluated.")]),a._v(" "),e("p",[a._v("The warning flag `-fwarn-typed-holes` is on by default. Without\n`-fdefer-type-errors` or `-fdefer-typed-holes` this flag is a no-op, since typed holes are an error under these conditions. If either of the\ndefer flags are enabled (converting typed hole errors into warnings)\nthe `-fno-warn-typed-holes` flag disables the warnings. This means\ncompilation silently succeeds and evaluating a hole will produce a\nruntime error.")]),a._v(" "),e("h2",{attrs:{id:"semantics-of-typed-holes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#semantics-of-typed-holes"}},[a._v("#")]),a._v(" Semantics of typed holes")]),a._v(" "),e("p",[a._v("The value of a type hole can simply said to be "),e("code",[a._v("undefined")]),a._v(", although a typed hole triggers a compile-time error, so it is not strictly necessary to assign it a value. However, a typed hole (when they are enabled) produces a compile time error (or warning with deferred type errors) which states the name of the typed hole, its inferred "),e("strong",[a._v("most general")]),a._v(" type, and the types of any local bindings. For example:")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_var")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("length")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("drop")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("interactive")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">:")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Warning")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Found")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("hole")]),a._v(" `"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_var")]),a._v("' "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("with")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Relevant")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bindings")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("include")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bound")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("at")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("interactive")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">:")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("it")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bound")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("at")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("interactive")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">:")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("first")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("argument")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v(" `"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("namely")]),a._v(" `"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_var")]),a._v("'\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("expression")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_var")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("length")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("drop")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("expression")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_var")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("length")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("drop")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),e("p",[a._v("Note that in the case of typed holes in expressions entered into the GHCi repl (as above), the type of the expression entered also reported, as "),e("code",[a._v("it")]),a._v(" (here of type "),e("code",[a._v("[a] -> Int")]),a._v(").")]),a._v(" "),e("h2",{attrs:{id:"using-typed-holes-to-define-a-class-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-typed-holes-to-define-a-class-instance"}},[a._v("#")]),a._v(" Using typed holes to define a class instance")]),a._v(" "),e("p",[a._v("Typed holes can make it easier to define functions, through an interactive process.")]),a._v(" "),e("p",[a._v("Say you want to define a class instance "),e("code",[a._v("Foo Bar")]),a._v(" (for your custom "),e("code",[a._v("Bar")]),a._v(" type, in order to use it with some polymorphic library function that requires a "),e("code",[a._v("Foo")]),a._v(" instance). You would now traditionally look up the documentation of "),e("code",[a._v("Foo")]),a._v(", figure out which methods you need to define, scrutinise their types etc. – but with typed holes, you can actually skip that!")]),a._v(" "),e("p",[a._v("First just define a dummy instance:")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n\n")])])]),e("p",[a._v("The compiler will now complain")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Bar.hs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Warning")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("No")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("explicit")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("implementation")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("for")]),a._v("\n  ‘"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v("’ "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("and")]),a._v(" ‘"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("quun")]),a._v("’\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("declaration")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("for")]),a._v(" ‘"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v("’\n\n")])])]),e("p",[a._v("Ok, so we need to define "),e("code",[a._v("foom")]),a._v(" for "),e("code",[a._v("Bar")]),a._v(". But what "),e("strong",[a._v("is")]),a._v(" that even supposed to be? Again we're too lazy to look in the documentation, and just ask the compiler:")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("\n\n")])])]),e("p",[a._v("Here we've used a typed hole as a simple “documentation query”. The compiler outputs")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Bar.hs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Found")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("hole")]),a._v(" ‘"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("’ "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("with")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Gronk")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Relevant")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bindings")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("include")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Gronk")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bound")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("at")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("Foo.hs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("28")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("expression")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("an")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("equation")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("for")]),a._v(" ‘"),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v("’"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("In")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("the")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("declaration")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("for")]),a._v(" ‘"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v("’\n\n")])])]),e("p",[a._v("Note how the compiler has already filled the class type variable with the concrete type "),e("code",[a._v("Bar")]),a._v(" that we want to instantiate it for. This can make the signature a lot easier to understand than the polymorphic one found in the class documentation, especially if you're dealing with a more complicated method of e.g. a multi-parameter type class.")]),a._v(" "),e("p",[a._v("But what the hell is "),e("code",[a._v("Gronk")]),a._v("? At this point, it is probably a good idea to ask "),e("a",{attrs:{href:"http://hayoo.fh-wedel.de/?query=Gronk",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hayoo"),e("OutboundLink")],1),a._v(". However we may still get away without that: as a blind guess, we assume that this is not only a type constructor but also the single value constructor, i.e. it can be used as a function that will somehow produce a "),e("code",[a._v("Gronk a")]),a._v(" value. So we try")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Gronk")]),a._v("\n\n")])])]),e("p",[a._v("If we're lucky, "),e("code",[a._v("Gronk")]),a._v(" is actually a value, and the compiler will now say")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n   Found hole ‘_’\n      with type: (Int -> [(Int, b0)] -> Gronk b0) -> Gronk Bar\n    Where: ‘b0’ is an ambiguous type variable\n\n")])])]),e("p",[a._v("Ok, that's ugly – at first just note that "),e("code",[a._v("Gronk")]),a._v(" has two arguments, so we can refine our attempt:")]),a._v(" "),e("div",{staticClass:"language-hs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-hs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instance")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Foo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("foom")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("bar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Gronk")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("_")]),a._v("\n\n")])])]),e("p",[a._v("And this now is pretty clear:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n   Found hole ‘_’ with type: [(Int, Bar)]\n    Relevant bindings include\n      bar :: Bar (bound at Bar.hs:14:29)\n      foom :: Bar -> Gronk Bar (bound at Foo.hs:15:24)\n    In the second argument of ‘Gronk’, namely ‘_’\n    In the expression: Gronk _ _\n    In an equation for ‘foom’: foom bar = Gronk _ _\n\n")])])]),e("p",[a._v("You can now further progress by e.g. deconstructing the "),e("code",[a._v("bar")]),a._v(" value (the components will then show up, with types, in the "),e("code",[a._v("Relevant bindings")]),a._v(" section). Often, it is at some point completely obvious what the correct definition will be, because you you see all avaliable arguments and the types fit together like a jigsaw puzzle. Or alternatively, you may see that the definition is "),e("strong",[a._v("impossible")]),a._v(" and why.")]),a._v(" "),e("p",[a._v("All of this works best in an editor with interactive compilation, e.g. Emacs with haskell-mode. You can then use typed holes much like mouse-over value queries in an IDE for an interpreted dynamic imperative language, but without all the limitations.")]),a._v(" "),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),e("p",[a._v("One of the strengths of Haskell is the ability to leverage the type system to model parts of your problem domain in the type system. In doing so, one often encounters very complex types. When writing programs with these types (i.e. with values having these types) it occasionally becomes nearly unmangeable to 'juggle' all of the types. As of GHC 7.8, there is a new syntactic feature called typed holes. Typed holes do not change the semantics of the core language; they are intended purely as an aid for writing programs.")]),a._v(" "),e("p",[a._v("For an in-depth explanation of typed holes, as well as a discussion of the design of typed holes, see the "),e("a",{attrs:{href:"https://wiki.haskell.org/GHC/Typed_holes",target:"_blank",rel:"noopener noreferrer"}},[a._v("Haskell wiki"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Section of the GHC user guide on "),e("a",{attrs:{href:"https://downloads.haskell.org/%7Eghc/7.8.4/docs/html/users_guide/typed-holes.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("typed holes"),e("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);