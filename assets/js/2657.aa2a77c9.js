(window.webpackJsonp=window.webpackJsonp||[]).push([[2657],{3003:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bitwise-operators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-operators"}},[t._v("#")]),t._v(" Bitwise Operators")]),t._v(" "),e("p",[t._v("Bitwise operations alter binary strings at the bit level. These operations are incredibly basic and are directly supported by the processor. These few operations are necessary in working with device drivers, low-level graphics, cryptography, and network communications. This section provides useful knowledge and examples of Python's bitwise operators.")]),t._v(" "),e("h2",{attrs:{id:"bitwise-not"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-not"}},[t._v("#")]),t._v(" Bitwise NOT")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("~")]),t._v(" operator will flip all of the bits in the number. Since computers use "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Signed_number_representations",target:"_blank",rel:"noopener noreferrer"}},[t._v("signed number representations"),e("OutboundLink")],1),t._v(" — most notably, the "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"}},[t._v("two's complement notation"),e("OutboundLink")],1),t._v(" to encode negative binary numbers where negative numbers are written with a leading one (1) instead of a leading zero (0).")]),t._v(" "),e("p",[t._v("This means that if you were using 8 bits to represent your two's-complement numbers, you would treat patterns from "),e("code",[t._v("0000 0000")]),t._v(" to "),e("code",[t._v("0111 1111")]),t._v(" to represent numbers from 0 to 127 and reserve "),e("code",[t._v("1xxx xxxx")]),t._v(" to represent negative numbers.")]),t._v(" "),e("p",[t._v("Eight-bit two's-complement numbers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Bits")]),t._v(" "),e("th",[t._v("Unsigned Value")]),t._v(" "),e("th",[t._v("Two's-complement Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0000 0000")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("0000 0001")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("0000 0010")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("2")])]),t._v(" "),e("tr",[e("td",[t._v("0111 1110")]),t._v(" "),e("td",[t._v("126")]),t._v(" "),e("td",[t._v("126")])]),t._v(" "),e("tr",[e("td",[t._v("0111 1111")]),t._v(" "),e("td",[t._v("127")]),t._v(" "),e("td",[t._v("127")])]),t._v(" "),e("tr",[e("td",[t._v("1000 0000")]),t._v(" "),e("td",[t._v("128")]),t._v(" "),e("td",[t._v("-128")])]),t._v(" "),e("tr",[e("td",[t._v("1000 0001")]),t._v(" "),e("td",[t._v("129")]),t._v(" "),e("td",[t._v("-127")])]),t._v(" "),e("tr",[e("td",[t._v("1000 0010")]),t._v(" "),e("td",[t._v("130")]),t._v(" "),e("td",[t._v("-126")])]),t._v(" "),e("tr",[e("td",[t._v("1111 1110")]),t._v(" "),e("td",[t._v("254")]),t._v(" "),e("td",[t._v("-2")])]),t._v(" "),e("tr",[e("td",[t._v("1111 1111")]),t._v(" "),e("td",[t._v("255")]),t._v(" "),e("td",[t._v("-1")])])])]),t._v(" "),e("p",[t._v("In essence, this means that whereas "),e("code",[t._v("1010 0110")]),t._v(" has an unsigned value of 166 (arrived at by adding "),e("code",[t._v("(128 * 1) + (64 * 0) + (32 * 1) + (16 * 0) + (8 * 0) + (4 * 1) + (2 * 1) + (1 * 0)")]),t._v("), it has a two's-complement value of -90 (arrived at by adding "),e("code",[t._v("(128 * 1) - (64 * 0) - (32 * 1) - (16 * 0) - (8 * 0) - (4 * 1) - (2 * 1) - (1 * 0)")]),t._v(", and complementing the value).")]),t._v(" "),e("p",[t._v("In this way, negative numbers range down to -128 ("),e("code",[t._v("1000 0000")]),t._v("). Zero (0) is represented as "),e("code",[t._v("0000 0000")]),t._v(", and  minus one (-1) as "),e("code",[t._v("1111 1111")]),t._v(".")]),t._v(" "),e("p",[t._v("In general, though, this means "),e("code",[t._v("~n = -n - 1")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 = 0b0000 0000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: -1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -1 = 0b1111 1111")]),t._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 = 0b0000 0001")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: -2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -2 = 1111 1110")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 = 0b0000 0010")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: -3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -3 = 0b1111 1101")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 123 = 0b0111 1011")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: -124")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -124 = 0b1000 0100")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Note")]),t._v(", the overall effect of this operation when applied to positive numbers can be summarized:")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[e("code",[t._v("~n -> -|n+1|")])]),t._v(" "),e("p",[t._v("And then, when applied to negative numbers, the corresponding effect is:")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[e("code",[t._v("~-n -> |n-1|")])]),t._v(" "),e("p",[t._v("The following examples illustrate this last rule...")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -0 = 0b0000 0000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: -1 ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -1 = 0b1111 1111")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 is the obvious exception to this rule, as -0 == 0 always")]),t._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -1 = 0b1000 0001")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 = 0b0000 0000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -2 = 0b1111 1110")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 = 0b0000 0001")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -123 = 0b1111 1011")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 122")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 122 = 0b0111 1010")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"bitwise-xor-exclusive-or"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-xor-exclusive-or"}},[t._v("#")]),t._v(" Bitwise XOR (Exclusive OR)")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("^")]),t._v(" operator will perform a binary "),e("strong",[t._v("XOR")]),t._v(" in which a binary "),e("code",[t._v("1")]),t._v(" is copied if and only if it is the value of exactly "),e("strong",[t._v("one")]),t._v(" operand. Another way of stating this is that the result is "),e("code",[t._v("1")]),t._v(" only if the operands are different. Examples include:")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 ^ 0 = 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 ^ 1 = 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 ^ 0 = 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 ^ 1 = 0")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 60 = 0b111100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 30 = 0b011110")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 34")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 34 = 0b100010")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0b100010")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"bitwise-and"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-and"}},[t._v("#")]),t._v(" Bitwise AND")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("&")]),t._v(" operator will perform a binary "),e("strong",[t._v("AND")]),t._v(", where a bit is copied if it exists in "),e("strong",[t._v("both")]),t._v(" operands. That means:")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 & 0 = 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 & 1 = 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 & 0 = 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 & 1 = 1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 60 = 0b111100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 30 = 0b011110")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 28")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 28 = 0b11100")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0b11100")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"bitwise-or"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-or"}},[t._v("#")]),t._v(" Bitwise OR")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("|")]),t._v(' operator will perform a binary "or," where a bit is copied if it exists in either operand. That means:')]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 | 0 = 0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0 | 1 = 1 ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 | 0 = 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 | 1 = 1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 60 = 0b111100 ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 30 = 0b011110")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 62")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 62 = 0b111110")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0b111110")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"bitwise-left-shift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-left-shift"}},[t._v("#")]),t._v(" Bitwise Left Shift")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("<<")]),t._v(' operator will perform a bitwise "left shift," where the left operand\'s value is moved left by the number of bits given by the right operand.')]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 = 0b10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 8")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8 = 0b1000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0b1000")]),t._v("\n\n")])])]),e("p",[t._v("Performing a left bit shift of "),e("code",[t._v("1")]),t._v(" is equivalent to multiplication by "),e("code",[t._v("2")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 14")]),t._v("\n\n")])])]),e("p",[t._v("Performing a left bit shift of "),e("code",[t._v("n")]),t._v(" is equivalent to multiplication by "),e("code",[t._v("2**n")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 48")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"bitwise-right-shift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitwise-right-shift"}},[t._v("#")]),t._v(" Bitwise Right Shift")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v(">>")]),t._v(' operator will perform a bitwise "right shift," where the left operand\'s value is moved right by the number of bits given by the right operand.')]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8 = 0b1000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2 = 0b10")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 0b10")]),t._v("\n\n")])])]),e("p",[t._v("Performing a right bit shift of "),e("code",[t._v("1")]),t._v(" is equivalent to integer division by "),e("code",[t._v("2")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 18")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 7")]),t._v("\n\n")])])]),e("p",[t._v("Performing a right bit shift of "),e("code",[t._v("n")]),t._v(" is equivalent to integer division by "),e("code",[t._v("2**n")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 3")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Out: 7")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"inplace-operations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inplace-operations"}},[t._v("#")]),t._v(" Inplace Operations")]),t._v(" "),e("p",[t._v("All of the Bitwise operators (except "),e("code",[t._v("~")]),t._v(") have their own in place versions")]),t._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b001")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b010")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = 0b000")]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b001")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b010")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = 0b011")]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b001")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = 0b100")]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b100")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = 0b001")]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b101")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b011")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a = 0b110")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("li",[t._v("\nx << y  # Bitwise Left Shift\n")]),t._v(" "),e("li",[t._v("\nx >> y # Bitwise Right Shift\n")]),t._v(" "),e("li",[t._v("\nx & y  # Bitwise AND\n")]),t._v(" "),e("li",[t._v("\nx | y  # Bitwise OR\n")]),t._v(" "),e("li",[t._v("\n~ x    # Bitwise NOT\n")]),t._v(" "),e("li",[t._v("\nx ^ y  # Bitwise XOR\n")])])}),[],!1,null,null,null);s.default=n.exports}}]);