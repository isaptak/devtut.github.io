(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{861:function(a,e,t){"use strict";t.r(e);var s=t(19),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"networking-with-bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking-with-bash"}},[a._v("#")]),a._v(" Networking With Bash")]),a._v(" "),t("p",[a._v("Bash is often commonly used in the management and maintenance of servers and clusters. Information pertaining to typical commands used by network operations, when to use which command for which purpose, and examples/samples of unique and/or interesting applications of it should be included")]),a._v(" "),t("h2",{attrs:{id:"networking-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking-commands"}},[a._v("#")]),a._v(" Networking commands")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v("\n\n")])])]),t("p",[a._v("The above command will show all active interface of the machine and also give the information of")]),a._v(" "),t("ol",[t("li",[a._v("IP address assign to interface")]),a._v(" "),t("li",[a._v("MAC address of the interface")]),a._v(" "),t("li",[a._v("Broadcast address")]),a._v(" "),t("li",[a._v("Transmit and Receive bytes")])]),a._v(" "),t("p",[a._v("Some example")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v(" -a\n\n")])])]),t("p",[a._v("The above command also show the disable interface")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v(" eth0\n\n")])])]),t("p",[a._v("The above command will only show the eth0 interface")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v(" eth0 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("255.255")]),a._v(".255.0\n\n")])])]),t("p",[a._v("The above command will assign the static IP to eth0 interface")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifup")]),a._v(" eth0\n\n")])])]),t("p",[a._v("The above command will enable the eth0 interface")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifdown")]),a._v(" eth0\n\n")])])]),t("p",[a._v("The below command will disable the eth0 interface")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v("\n\n")])])]),t("p",[a._v("The above command (Packet Internet Grouper) is to test the connectivity between the two nodes")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" -c2 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n\n")])])]),t("p",[a._v("The above command will ping or test the connectivity with google server for 2 seconds.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("traceroute")]),a._v("\n\n")])])]),t("p",[a._v("The above command is to use in troubleshooting to find out the number of hops taken to reach the destination.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v("\n\n")])])]),t("p",[a._v("The above command (Network statistics) give the connection info and their state")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dig")]),a._v(" www.google.com\n\n")])])]),t("p",[a._v("The above command (domain information grouper) query the DNS related information")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nslookup")]),a._v(" www.google.com\n\n")])])]),t("p",[a._v("The above command query the DNS and find out the IP address of corresponding the website name.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("route\n\n")])])]),t("p",[a._v("The above command is used to check the Netwrok route information. It basically show you the routing table")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("router "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" default gw "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.1 eth0\n\n")])])]),t("p",[a._v("The above command will add the default route of network of eth0 Interface to 192.168.1.1 in routing table.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("route del default\n\n")])])]),t("p",[a._v("The above command will delete the default route from the routing table")])])}),[],!1,null,null,null);e.default=n.exports}}]);