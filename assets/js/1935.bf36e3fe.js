(window.webpackJsonp=window.webpackJsonp||[]).push([[1935],{2281:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"set-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-operations"}},[t._v("#")]),t._v(" Set operations")]),t._v(" "),s("h2",{attrs:{id:"elementary-set-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elementary-set-operations"}},[t._v("#")]),t._v(" Elementary set operations")]),t._v(" "),s("p",[t._v("It's possible to perform elementary set operations with Matlab. Let's assume we have given two vectors or arrays")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("and we want to find all elements which are in "),s("code",[t._v("A")]),t._v(" and in "),s("code",[t._v("B")]),t._v(". For this we can use")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("C "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intersect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("C")]),t._v(" will include all numbers which are part of "),s("code",[t._v("A")]),t._v(" and part of "),s("code",[t._v("B")]),t._v(".\nIf we also want to find the position of these elements we call")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intersect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("pos")]),t._v(" is the position of these elements such that "),s("code",[t._v("C == A(pos)")]),t._v(".")]),t._v(" "),s("p",[t._v("Another basic operation is the union of two sets")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("D "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Herby contains "),s("code",[t._v("D")]),t._v(" all elements of "),s("code",[t._v("A")]),t._v(" and "),s("code",[t._v("B")]),t._v(".")]),t._v(" "),s("p",[t._v("Note that "),s("code",[t._v("A")]),t._v(" and "),s("code",[t._v("B")]),t._v(" are hereby treated as sets which means that it does not matter how often an element is part of "),s("code",[t._v("A")]),t._v(" or "),s("code",[t._v("B")]),t._v(". To clarify this one can check\n"),s("code",[t._v("D == union(D,C)")]),t._v(".")]),t._v(" "),s("p",[t._v("If we want to obtain the data that is in 'A' but not in 'B' we can use the following function")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("E "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setdiff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("We want to note again that this are sets such that following statement holds "),s("code",[t._v("D == union(E,B)")]),t._v(".")]),t._v(" "),s("p",[t._v("Suppose we want to check if")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("is an element of either "),s("code",[t._v("A")]),t._v(" or "),s("code",[t._v("B")]),t._v(" we can execute the command")]),t._v(" "),s("div",{staticClass:"language-matlab extra-class"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ismember")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ismember")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("If "),s("code",[t._v("a==1")]),t._v(" then "),s("code",[t._v("x")]),t._v(" is element of "),s("code",[t._v("A")]),t._v(" and "),s("code",[t._v("x")]),t._v(" is no element is "),s("code",[t._v("a==0")]),t._v(". The same goes for "),s("code",[t._v("B")]),t._v(". If "),s("code",[t._v("a==1 && b==1")]),t._v(" "),s("code",[t._v("x")]),t._v(" is also an element of "),s("code",[t._v("C")]),t._v(". If "),s("code",[t._v("a == 1 || b == 1")]),t._v(" "),s("code",[t._v("x")]),t._v(" is element of "),s("code",[t._v("D")]),t._v(" and if "),s("code",[t._v("a == 1 || b == 0")]),t._v(" it's also element of "),s("code",[t._v("E")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ol",[s("li",[t._v("C = union(A,B);")]),t._v(" "),s("li",[t._v("C = intersect(A,B);")]),t._v(" "),s("li",[t._v("C = setdiff(A,B);")]),t._v(" "),s("li",[t._v("a = ismember(A,x);")])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("A,B")]),t._v(" "),s("td",[t._v("sets, possibly matrices or vectors")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("possible element of a set")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);