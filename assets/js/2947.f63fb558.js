(window.webpackJsonp=window.webpackJsonp||[]).push([[2947],{3295:function(t,e,_){"use strict";_.r(e);var v=_(19),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rmarkdown-and-knitr-presentation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rmarkdown-and-knitr-presentation"}},[t._v("#")]),t._v(" RMarkdown and knitr presentation")]),t._v(" "),_("h2",{attrs:{id:"adding-a-footer-to-an-ioslides-presentation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-footer-to-an-ioslides-presentation"}},[t._v("#")]),t._v(" Adding a footer to an ioslides presentation")]),t._v(" "),_("p",[t._v("Adding a footer is not natively possible. Luckily, we can make use of jQuery and CSS to add a footer to the slides of an ioslides presentation rendered with knitr.\nFirst of all we have to include the jQuery plugin. This is done by the line")]),t._v(" "),_("div",{staticClass:"language-r extra-class"},[_("pre",{pre:!0,attrs:{class:"language-r"}},[_("code",[_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),_("p",[t._v("Now we can use jQuery to alter the DOM ("),_("strong",[t._v("document object model")]),t._v(") of our presentation. In other words: we alter the HTML structure of the document.\nAs soon as the presentation is loaded ("),_("code",[t._v("$(document).ready(function() { ... })")]),t._v("), we select all slides, that do not have the class attributes "),_("code",[t._v(".title-slide")]),t._v(", "),_("code",[t._v(".backdrop")]),t._v(", or "),_("code",[t._v(".segue")]),t._v(" and add the tag "),_("code",[t._v("<footer></footer>")]),t._v(" right before each slide is 'closed' (so before "),_("code",[t._v("</slide>")]),t._v("). The attribute "),_("code",[t._v("label")]),t._v(" carries the content that will be displayed later on.")]),t._v(" "),_("p",[t._v("All we have to do now is to layout our footer with CSS:")]),t._v(" "),_("p",[t._v("After each "),_("code",[t._v("<footer>")]),t._v(" ("),_("code",[t._v("footer::after")]),t._v("):")]),t._v(" "),_("ul",[_("li",[t._v("display the content of the attribute "),_("code",[t._v("label")])]),t._v(" "),_("li",[t._v("use font size 12")]),t._v(" "),_("li",[t._v("position the footer (20 pixels from the bottom of the slide and 60 pxs from the left)")])]),t._v(" "),_("p",[t._v("(the other properties can be ignored but might have to be modified if the presentation uses a different style template).")]),t._v(" "),_("div",{staticClass:"language-r extra-class"},[_("pre",{pre:!0,attrs:{class:"language-r"}},[_("code",[_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\ntitle"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Adding a footer to presentaion slides"')]),t._v("\nauthor"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Martin Schmelzer"')]),t._v("\ndate"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26 Juli 2016"')]),t._v("\noutput"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ioslides_presentation\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n```r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r setup"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nknitr"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("opts_chunk"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("set"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echo "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".ready"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slide:not(.title-slide, .backdrop, .segue)'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".append"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<footer label=\\\"My amazing footer!\\\"></footer>'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  footer"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    content"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" attr"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("label"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    font"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("pt"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    position"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" absolute"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    bottom"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("px"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    left"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("px"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    line"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.9")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Slide 1")]),t._v("\n\nThis is slide "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Slide 2")]),t._v("\n\nThis is slide "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Test")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Slide 3")]),t._v("\n\nAnd slide "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("\n\n")])])]),_("p",[t._v("The result will look like this:")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://i.stack.imgur.com/ioNUE.png",target:"_blank",rel:"noopener noreferrer"}},[_("img",{attrs:{src:"http://i.stack.imgur.com/ioNUE.png",alt:"enter image description here"}}),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"rstudio-example"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rstudio-example"}},[t._v("#")]),t._v(" Rstudio example")]),t._v(" "),_("p",[t._v("This is a script saved as .Rmd, on the contrary of r scripts saved as .R.")]),t._v(" "),_("p",[t._v("To knit the script, either use the "),_("code",[t._v("render")]),t._v(" function or use the shortcut button in Rstudio.")]),t._v(" "),_("div",{staticClass:"language-r extra-class"},[_("pre",{pre:!0,attrs:{class:"language-r"}},[_("code",[_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \ntitle"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rstudio exemple of a rmd file"')]),t._v("\nauthor"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stack user'")]),t._v("\ndate"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22 July 2016"')]),t._v("\noutput"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" html_document\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\nThe header is used to define the general parameters and the metadata.\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## R Markdown")]),t._v("\n\nThis is an R Markdown document.\nIt is a script written "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" markdown with the possibility to insert chunk of R code "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" it.\nTo insert R code"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it needs to be encapsulated into inverted quote.\n\nLike that "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a long piece of code"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n```r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r cars"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsummary"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cars"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\nAnd like ``r cat"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"that"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`` "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" small piece of code.\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Including Plots")]),t._v("\n\nYou can also embed plots"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" example"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n```r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r echo"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nplot"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pressure"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n```r\n\n")])])]),_("h4",{attrs:{id:"syntax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),_("li",[t._v("Header:\n"),_("ul",[t._v("\n- YAML format, used when the script is compile to define general parameter and metadata\n"),_("h4",{attrs:{id:"parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Parameter")]),t._v(" "),_("th",[t._v("definition")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("the title of the document")])]),t._v(" "),_("tr",[_("td",[t._v("author")]),t._v(" "),_("td",[t._v("The author of the document")])]),t._v(" "),_("tr",[_("td",[t._v("date")]),t._v(" "),_("td",[t._v('The date of the document: Can be "'),_("code",[t._v("r format(Sys.time(), '%d %B, %Y')")]),t._v('"')])]),t._v(" "),_("tr",[_("td",[t._v("author")]),t._v(" "),_("td",[t._v("The author of the document")])]),t._v(" "),_("tr",[_("td",[t._v("output")]),t._v(" "),_("td",[t._v("The output format of the document: at least 10 format available. For html document, "),_("code",[t._v("html_output")]),t._v(". For PDF document, "),_("code",[t._v("pdf_document")]),t._v(", ..")])])])]),t._v(" "),_("h4",{attrs:{id:"remarks"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),_("h3",{attrs:{id:"sub-options-parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sub-options-parameters"}},[t._v("#")]),t._v(" Sub options parameters:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("sub-option")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("html")]),t._v(" "),_("th",[t._v("pdf")]),t._v(" "),_("th",[t._v("word")]),t._v(" "),_("th",[t._v("odt")]),t._v(" "),_("th",[t._v("rtf")]),t._v(" "),_("th",[t._v("md")]),t._v(" "),_("th",[t._v("github")]),t._v(" "),_("th",[t._v("ioslides")]),t._v(" "),_("th",[t._v("slidy")]),t._v(" "),_("th",[t._v("beamer")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("citation_package")]),t._v(" "),_("td",[t._v("The LaTeX package to process citations, natbib, biblatex or none")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("code_folding")]),t._v(" "),_("td",[t._v('Let readers to toggle the display of R code, "none", "hide", or "show"')]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("colortheme")]),t._v(" "),_("td",[t._v("Beamer color theme to use")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("css")]),t._v(" "),_("td",[t._v("CSS file to use to style document")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("dev")]),t._v(" "),_("td",[t._v('Graphics device to use for figure output (e.g. "png")')]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("duration")]),t._v(" "),_("td",[t._v("Add a countdown timer (in minutes) to footer of slides")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("fig_caption")]),t._v(" "),_("td",[t._v("Should figures be rendered with captions?")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("fig_height, fig_width")]),t._v(" "),_("td",[t._v("Default figure height and width (in inches) for document")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("highlight")]),t._v(" "),_("td",[t._v('Syntax highlighting: "tango", "pygments", "kate","zenburn", "textmate"')]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("includes")]),t._v(" "),_("td",[t._v("File of content to place in document (in_header, before_body, after_body)")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("incremental")]),t._v(" "),_("td",[t._v("Should bullets appear one at a time (on presenter mouse clicks)?")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("keep_md")]),t._v(" "),_("td",[t._v("Save a copy of .md file that contains knitr output")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("keep_tex")]),t._v(" "),_("td",[t._v("Save a copy of .tex file that contains knitr output")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("latex_engine")]),t._v(" "),_("td",[t._v('Engine to render latex, or ""pdflatex", "xelatex", lualatex"')]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("lib_dir")]),t._v(" "),_("td",[t._v("Directory of dependency files to use (Bootstrap, MathJax, etc.)")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("mathjax")]),t._v(" "),_("td",[t._v("Set to local or a URL to use a local/URL version of MathJax to render")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("md_extensions")]),t._v(" "),_("td",[t._v("Markdown extensions to add to default definition or R Markdown")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("number_sections")]),t._v(" "),_("td",[t._v("Add section numbering to headers")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("pandoc_args")]),t._v(" "),_("td",[t._v("Additional arguments to pass to Pandoc")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("preserve_yaml")]),t._v(" "),_("td",[t._v("Preserve YAML front matter in final document?")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("reference_docx")]),t._v(" "),_("td",[t._v("docx file whose styles should be copied when producing docx output")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("self_contained")]),t._v(" "),_("td",[t._v("Embed dependencies into the doc")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("slide_level")]),t._v(" "),_("td",[t._v("The lowest heading level that defines individual slides")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("smaller")]),t._v(" "),_("td",[t._v("Use the smaller font size in the presentation?")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("smart")]),t._v(" "),_("td",[t._v("Convert straight quotes to curly, dashes to em-dashes, ... to ellipses, etc.")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("template")]),t._v(" "),_("td",[t._v("Pandoc template to use when rendering file")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("theme")]),t._v(" "),_("td",[t._v("Bootswatch or Beamer theme to use for page")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("toc")]),t._v(" "),_("td",[t._v("Add a table of contents at start of document")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("toc_depth")]),t._v(" "),_("td",[t._v("The lowest level of headings to add to table of contents")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("toc_float")]),t._v(" "),_("td",[t._v("Float the table of contents to the left of the main content")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);