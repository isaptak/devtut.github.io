(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{1567:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"state-monad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-monad"}},[t._v("#")]),t._v(" State Monad")]),t._v(" "),s("h2",{attrs:{id:"numbering-the-nodes-of-a-tree-with-a-counter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numbering-the-nodes-of-a-tree-with-a-counter"}},[t._v("#")]),t._v(" Numbering the nodes of a tree with a counter")]),t._v(" "),s("p",[t._v("We have a tree data type like this:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deriving")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Show")]),t._v("\n\n")])])]),s("p",[t._v("And we wish to write a function that assigns a number to each node of the tree, from an incrementing counter:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"the-long-way"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-long-way"}},[t._v("#")]),t._v(" The long way")]),t._v(" "),s("p",[t._v("First we'll do it the long way around, since it illustrates the "),s("code",[t._v("State")]),t._v(" monad's low-level mechanics quite nicely.")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token import_statement"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Control.Monad.State")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Function that numbers the nodes of a `Tree`.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- tagStep is where the action happens.  This just gets the ball")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- rolling, with `0` as the initial counter value.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("evalState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- This is one monadic "step" of the calculation.  It assumes that')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- it has access to the current counter value implicitly.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("State")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The `get :: State s s` action accesses the implicit state")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- parameter of the State monad.  Here we bind that value to")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- the variable `counter`.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("counter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("get")]),t._v(" \n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- The `put :: s -> State s ()` sets the implicit state parameter")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- of the `State` monad.  The next `get` that we execute will see")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- the value of `counter + 1` (assuming no other puts in between).")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("put")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("counter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Recurse into the subtrees.  `mapM` is a utility function")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- for executing a monadic actions (like `tagStep`) on a list of")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- elements, and producing the list of results.  Each execution of ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- `tagStep` will be executed with the counter value that resulted")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- from the previous list element's execution.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("mapM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("  \n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("'\n\n")])])]),s("h3",{attrs:{id:"refactoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refactoring"}},[t._v("#")]),t._v(" Refactoring")]),t._v(" "),s("h3",{attrs:{id:"split-out-the-counter-into-a-postincrement-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-out-the-counter-into-a-postincrement-action"}},[t._v("#")]),t._v(" Split out the counter into a postIncrement action")]),t._v(" "),s("p",[t._v("The bit where we are "),s("code",[t._v("get")]),t._v("ting the current counter and then "),s("code",[t._v("put")]),t._v("ting counter + 1 can be split off into a "),s("code",[t._v("postIncrement")]),t._v(" action, similar to what many C-style languages provide:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("postIncrement")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("State")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("postIncrement")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("get")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("modify")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("succ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("result")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"split-out-the-tree-walk-into-a-higher-order-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-out-the-tree-walk-into-a-higher-order-function"}},[t._v("#")]),t._v(" Split out the tree walk into a higher-order function")]),t._v(" "),s("p",[t._v("The tree walk logic can be split out into its own function, like this:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("mapTreeM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Monad")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("mapTreeM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("mapM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("mapTreeM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("'\n\n")])])]),s("p",[t._v("With this and the "),s("code",[t._v("postIncrement")]),t._v(" function we can rewrite "),s("code",[t._v("tagStep")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("State")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tagStep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("mapTreeM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("step")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("State")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" \n              "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("counter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("postIncrement")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"use-the-traversable-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-traversable-class"}},[t._v("#")]),t._v(" Use the "),s("code",[t._v("Traversable")]),t._v(" class")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("mapTreeM")]),t._v(" solution above can be easily rewritten into an instance of "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/754/traversable#t=201609012048577636313",target:"_blank",rel:"noopener noreferrer"}},[t._v("the "),s("code",[t._v("Traversable")]),t._v(" class"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Traversable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("traverse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<$>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<*>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("traverse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("subtrees")]),t._v("\n\n")])])]),s("p",[t._v("Note that this required us to use "),s("code",[t._v("Applicative")]),t._v(" (the "),s("code",[t._v("<*>")]),t._v(" operator) instead of "),s("code",[t._v("Monad")]),t._v(".")]),t._v(" "),s("p",[t._v("With that, now we can write "),s("code",[t._v("tag")]),t._v(" like a pro:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Traversable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("init")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("evalState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("traverse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("postIncrement")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Note that this works for any "),s("code",[t._v("Traversable")]),t._v(" type, not just our "),s("code",[t._v("Tree")]),t._v(" type!")]),t._v(" "),s("h3",{attrs:{id:"getting-rid-of-the-traversable-boilerplate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-rid-of-the-traversable-boilerplate"}},[t._v("#")]),t._v(" Getting rid of the "),s("code",[t._v("Traversable")]),t._v(" boilerplate")]),t._v(" "),s("p",[t._v("GHC has a "),s("code",[t._v("DeriveTraversable")]),t._v(" extension that eliminates the need for writing the instance above:")]),t._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{-# LANGUAGE DeriveFunctor, DeriveFoldable, DeriveTraversable #-}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tree")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deriving")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Functor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foldable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Traversable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Newcomers to Haskell often shy away from the "),s("code",[t._v("State")]),t._v(" monad and treat it like a taboo—like the claimed benefit of functional programming is the avoidance of state, so don't you lose that when you use "),s("code",[t._v("State")]),t._v("?  A more nuanced view is that:")]),t._v(" "),s("ul",[s("li",[t._v("State can be useful in "),s("strong",[t._v("small, controlled doses")]),t._v(";")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("State")]),t._v(" type provides the ability to control the dose very precisely.")])]),t._v(" "),s("p",[t._v("The reasons being that if you have "),s("code",[t._v("action :: State s a")]),t._v(", this tells you that:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("action")]),t._v(" is special because it depends on a state;")]),t._v(" "),s("li",[t._v("The state has type "),s("code",[t._v("s")]),t._v(", so "),s("code",[t._v("action")]),t._v(" cannot be influenced by any old value in your program—only an "),s("code",[t._v("s")]),t._v(" or some value reachable from some "),s("code",[t._v("s")]),t._v(";")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("runState :: State s a -> s -> (a, s)")]),t._v(' puts a "barrier" around the stateful action, so that its effectfulness '),s("strong",[t._v("cannot")]),t._v(" be observed from outside that barrier.")])]),t._v(" "),s("p",[t._v("So this is a good set of criteria for whether to use "),s("code",[t._v("State")]),t._v(" in particular scenario.  You want to see that your code is "),s("strong",[t._v("minimizing the scope of the state")]),t._v(", both by choosing a narrow type for "),s("code",[t._v("s")]),t._v(" and by putting "),s("code",[t._v("runState")]),t._v(' as close to "the bottom" as possible, (so that your actions can be influenced by as few thing as possible.')])])}),[],!1,null,null,null);a.default=n.exports}}]);