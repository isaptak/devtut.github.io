(window.webpackJsonp=window.webpackJsonp||[]).push([[2979],{3323:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"writing-functions-in-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-functions-in-r"}},[t._v("#")]),t._v(" Writing functions in R")]),t._v(" "),a("h2",{attrs:{id:"anonymous-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-functions"}},[t._v("#")]),t._v(" Anonymous functions")]),t._v(" "),a("p",[t._v("An anonymous function is, as the name implies, not assigned a name. This can be useful when the function is a part of a larger operation, but in itself does not take much place.\nOne frequent use-case for anonymous functions is within the "),a("code",[t._v("*apply")]),t._v(" family of Base functions.")]),t._v(" "),a("p",[t._v("Calculate the root mean square for each column in a "),a("code",[t._v("data.frame")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("df "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" data.frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" second"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" third"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    first    second     third \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.968719")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.814888")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.872983")]),t._v(" \n\n")])])]),a("p",[t._v("Create a sequence of step-length one from the smallest to the largest value for each row in a matrix.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" sample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("An anonymous function can also stand on its own:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("p",[t._v("is equivalent to")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"rstudio-code-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rstudio-code-snippets"}},[t._v("#")]),t._v(" RStudio code snippets")]),t._v(" "),a("p",[t._v("This is just a small hack for those who use self-defined functions often."),a("br"),t._v('\nType "fun" RStudio IDE and hit TAB.')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/gA8QV.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/gA8QV.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The result will be a skeleton of a new function.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("One can easily define their own snippet template, i.e. like the one below")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tidyverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" \n        return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("The option is "),a("code",[t._v("Edit Snippets")]),t._v(" in the "),a("code",[t._v("Global Options -> Code")]),t._v(" menu.")]),t._v(" "),a("h2",{attrs:{id:"named-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#named-functions"}},[t._v("#")]),t._v(" Named functions")]),t._v(" "),a("p",[t._v("R is full of functions, it is after all a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Functional_programming#R",target:"_blank",rel:"noopener noreferrer"}},[t._v("functional programming language"),a("OutboundLink")],1),t._v(", but sometimes the precise function you need isn't provided in the Base resources. You could conceivably "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/r/1719/installing-packages#t=201607251211199337159",target:"_blank",rel:"noopener noreferrer"}},[t._v("install a package"),a("OutboundLink")],1),t._v(" containing the function, but maybe your requirements are just so specific that no pre-made function fits the bill? Then you're left with the option of making your own.")]),t._v(" "),a("p",[t._v("A function can be very simple, to the point of being being pretty much pointless.\nIt doesn't even need to take an argument:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("one "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\ntwo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n")])])]),a("p",[t._v("What's between the curly braces "),a("code",[t._v("{ }")]),t._v(" is the function proper. As long as you can fit everything on a single line they aren't strictly needed, but can be useful to keep things organized.")]),t._v(" "),a("p",[t._v("A function can be very simple, yet highly specific. This function takes as input a vector ("),a("code",[t._v("vec")]),t._v(" in this example) and outputs the same vector with the vector's length (6 in this case) subtracted from each of the vector's elements.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("vec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nsubtract.length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsubtract.length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n")])])]),a("p",[t._v("Notice that "),a("code",[t._v("length()")]),t._v(" is in itself a pre-supplied (i.e. "),a("strong",[t._v("Base")]),t._v(") function. You can of course use a previously self-made function within another self-made function, as well as assign variables and perform other operations while spanning several lines:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("vec2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\nmsdf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multiplier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" multiplier\n    subl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" subtract.length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    data.frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmsdf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  mult subl\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17.5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("multiplier=4")]),t._v(" makes sure that "),a("code",[t._v("4")]),t._v(" is the default value of the argument "),a("code",[t._v("multiplier")]),t._v(", if no value is given when calling the function "),a("code",[t._v("4")]),t._v(" is what will be used.")]),t._v(" "),a("p",[t._v("The above are all examples of "),a("strong",[t._v("named")]),t._v(" functions, so called simply because they have been given names ("),a("code",[t._v("one")]),t._v(", "),a("code",[t._v("two")]),t._v(", "),a("code",[t._v("subtract.length")]),t._v(" etc.)")]),t._v(" "),a("h2",{attrs:{id:"passing-column-names-as-argument-of-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passing-column-names-as-argument-of-a-function"}},[t._v("#")]),t._v(" Passing column names as argument of a function")]),t._v(" "),a("p",[t._v("Sometimes one would like to pass names of columns from a data frame to a function. They may be provided as strings and used in a function using "),a("code",[t._v("[[")]),t._v(". Let's take a look at the following example, which prints to R console basic stats of selected variables:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("basic.stats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("summary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbasic.stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sepal.Length"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Petal.Width"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("As a result of running above given code, names of selected variables and their basic summary statistics (minima, first quantiles, medians, means, third quantiles and maxima) are printed in R console. The code "),a("code",[t._v("dset[[vars[i]]]")]),t._v(" selects i-th element from the argument "),a("code",[t._v("vars")]),t._v(" and selects a corresponding column in declared input data set "),a("code",[t._v("dset")]),t._v(". For example, declaring "),a("code",[t._v('iris[["Sepal.Length"]]')]),t._v(" alone would print the "),a("code",[t._v("Sepal.Length")]),t._v(" column from the "),a("code",[t._v("iris")]),t._v(" data set as a vector.")])])}),[],!1,null,null,null);s.default=e.exports}}]);