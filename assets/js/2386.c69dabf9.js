(window.webpackJsonp=window.webpackJsonp||[]).push([[2386],{2733:function(e,t,r){"use strict";r.r(t);var a=r(19),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started-with-perl-language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-perl-language"}},[e._v("#")]),e._v(" Getting started with Perl Language")]),e._v(" "),r("h2",{attrs:{id:"getting-started-with-perl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-perl"}},[e._v("#")]),e._v(" Getting started with Perl")]),e._v(" "),r("p",[e._v("Perl tries to do what you mean:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("print")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World\\n"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),r("p",[e._v("The two tricky bits are the semicolon at the end of the line and the "),r("code",[e._v("\\n")]),e._v(", which adds a newline (line feed). If you have a relatively new version of perl, you can use "),r("code",[e._v("say")]),e._v(" instead of "),r("code",[e._v("print")]),e._v(" to have the carriage return added automatically:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" feature "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'say'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("say")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),r("p",[e._v("The say feature is also enabled automatically with a "),r("code",[e._v("use v5.10")]),e._v(" (or higher) declaration:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token vstring string"}},[e._v("v5.10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("say")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),r("p",[e._v("It's pretty common to just use "),r("a",{attrs:{href:"http://perldoc.perl.org/perlrun.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("perl on the command line"),r("OutboundLink")],1),e._v(" using the "),r("code",[e._v("-e")]),e._v(" option:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("$ perl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-e")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'print \"Hello World\\n\"'")]),e._v("\nHello World\n\n")])])]),r("p",[e._v("Adding the "),r("code",[e._v("-l")]),e._v(" option is one way to print newlines automatically:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("$ perl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("le")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'print \"Hello World\"'")]),e._v("\nHello World\n\n")])])]),r("p",[e._v("If you want to enable "),r("a",{attrs:{href:"http://perldoc.perl.org/feature.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("new features"),r("OutboundLink")],1),e._v(", use the "),r("code",[e._v("-E")]),e._v(" option instead:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[e._v("$ perl "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("E "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'say \"Hello World\"'")]),e._v("\nHello World\n\n")])])]),r("p",[e._v("You can also, of course, save the script in a file. Just remove the "),r("code",[e._v("-e")]),e._v(" command line option and use the filename of the script: "),r("code",[e._v("perl script.pl")]),e._v(". For programs longer than a line, it's wise to turn on a couple of options:")]),e._v(" "),r("div",{staticClass:"language-perl extra-class"},[r("pre",{pre:!0,attrs:{class:"language-perl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" strict"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" warnings"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("print")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello World\\n"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),r("p",[e._v("There's no real disadvantage other than making the code slightly longer. In exchange, the strict pragma prevents you from using code that is potentially unsafe and warnings notifies you of many common errors.")]),e._v(" "),r("p",[e._v("Notice the line-ending semicolon is optional for the last line, but is a good idea in case you later add to the end of your code.")]),e._v(" "),r("p",[e._v("For more options how to run Perl, see "),r("a",{attrs:{href:"http://perldoc.perl.org/perlrun.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("perlrun"),r("OutboundLink")],1),e._v("  or type "),r("code",[e._v("perldoc perlrun")]),e._v(" at a command prompt. For a more detailed introduction to Perl, see "),r("a",{attrs:{href:"http://perldoc.perl.org/perlintro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("perlintro"),r("OutboundLink")],1),e._v(" or type "),r("code",[e._v("perldoc perlintro")]),e._v(" at a command prompt. For a quirky interactive tutorial, "),r("a",{attrs:{href:"http://tryperl.pl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Try Perl"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"remarks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),r("p",[e._v("Perl is the camel of languages: useful, but not always beautiful. It has rather good documentation of its own which can be accessed using the "),r("code",[e._v("perldoc")]),e._v(" command from your shell/command prompt. It's also available online at "),r("a",{attrs:{href:"http://perldoc.perl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("perldoc.perl.org"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);