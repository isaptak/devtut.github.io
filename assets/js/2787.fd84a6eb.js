(window.webpackJsonp=window.webpackJsonp||[]).push([[2787],{3131:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"python-serial-communication-pyserial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-serial-communication-pyserial"}},[a._v("#")]),a._v(" Python Serial Communication (pyserial)")]),a._v(" "),s("h2",{attrs:{id:"initialize-serial-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-serial-device"}},[a._v("#")]),a._v(" Initialize serial device")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" serial\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Serial takes these two parameters: serial device and baudrate")]),a._v("\nser "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/dev/ttyUSB0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"read-from-serial-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-from-serial-port"}},[a._v("#")]),a._v(" Read from serial port")]),a._v(" "),s("p",[a._v("Initialize serial device")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" serial\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Serial takes two parameters: serial device and baudrate")]),a._v("\nser "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/dev/ttyUSB0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("to read single byte from serial device")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("to read given number of bytes from the serial device")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("to read one line from serial device.")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("readline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("p",[a._v("to read the data from serial device while something is being written over it.")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#for python2.7")]),a._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inWaiting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#for python3")]),a._v("\nser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("inWaiting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"check-what-serial-ports-are-available-on-your-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-what-serial-ports-are-available-on-your-machine"}},[a._v("#")]),a._v(" Check what serial ports are available on your machine")]),a._v(" "),s("p",[a._v("To get a list of available serial ports use")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[a._v("python "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("list_ports\n\n")])])]),s("p",[a._v("at a command prompt or")]),a._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" serial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" list_ports\nlist_ports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("comports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Outputs list of available serial ports")]),a._v("\n\n")])])]),s("p",[a._v("from the Python shell.")]),a._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("li",[a._v("\nser.read(size=1)\n")]),a._v(" "),s("li",[a._v("\nser.readline()\n")]),a._v(" "),s("li",[a._v("\nser.write()\n")]),a._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("parameter")]),a._v(" "),s("th",[a._v("details")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("port")]),a._v(" "),s("td",[a._v("Device name e.g. /dev/ttyUSB0 on GNU/Linux or COM3 on Windows.")])]),a._v(" "),s("tr",[s("td",[a._v("baudrate")]),a._v(" "),s("td",[a._v("baudrate type: int default: 9600 standard values: 50, 75, 110, 134, 150, 200, 300, 600, 1200, 1800, 2400, 4800, 9600, 19200, 38400, 57600, 115200")])])])]),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("For more details check out "),s("a",{attrs:{href:"https://pythonhosted.org/pyserial/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("pyserial documentation"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);