(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{613:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"porterduff-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#porterduff-mode"}},[t._v("#")]),t._v(" PorterDuff Mode")]),t._v(" "),s("p",[t._v('PorterDuff is described as a way of combining images as if they were "irregular shaped pieces of cardboard" overlayed on each other, as well as a scheme for blending the overlapping parts')]),t._v(" "),s("h2",{attrs:{id:"creating-a-porterduff-colorfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-porterduff-colorfilter"}},[t._v("#")]),t._v(" Creating a PorterDuff ColorFilter")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://developer.android.com/reference/android/graphics/PorterDuff.Mode.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("PorterDuff.Mode")]),s("OutboundLink")],1),t._v(" is used to create a "),s("a",{attrs:{href:"http://developer.android.com/reference/android/graphics/PorterDuffColorFilter.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("PorterDuffColorFilter")]),s("OutboundLink")],1),t._v(". A color filter modifies the color of each pixel of a visual resource.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ColorFilter")]),t._v(" filter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuffColorFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SRC_IN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The above filter will tint the non-transparent pixels to blue color.")]),t._v(" "),s("p",[t._v("The color filter can be applied to a "),s("a",{attrs:{href:"http://developer.android.com/reference/android/graphics/drawable/Drawable.html#setColorFilter(android.graphics.ColorFilter)",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Drawable")]),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("drawable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColorFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("It can be applied to an "),s("a",{attrs:{href:"http://developer.android.com/reference/android/widget/ImageView.html#setColorFilter(int)",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ImageView")]),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("imageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColorFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Also, it can be applied to a "),s("a",{attrs:{href:"http://developer.android.com/reference/android/graphics/Paint.html#setColorFilter(android.graphics.ColorFilter)",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Paint")]),s("OutboundLink")],1),t._v(", so that the color that is drawn using that paint, is modified by the filter:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("paint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColorFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"creating-a-porterduff-xfermode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-porterduff-xfermode"}},[t._v("#")]),t._v(" Creating a PorterDuff XferMode")]),t._v(" "),s("p",[t._v("An "),s("a",{attrs:{href:"http://developer.android.com/reference/android/graphics/Xfermode.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Xfermode")]),s("OutboundLink")],1),t._v(' (think "transfer" mode) works as a transfer step in drawing pipeline. When an '),s("code",[t._v("Xfermode")]),t._v(" is applied to a "),s("code",[t._v("Paint")]),t._v(", the pixels drawn with the paint are combined with underlying pixels (already drawn) as per the mode:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("paint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npaint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setXfermode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuffXfermode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SRC_IN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Now we have a blue tint paint. Any shape drawn will tint the already existing, non-transparent pixels blue in the area of the shape.")]),t._v(" "),s("h2",{attrs:{id:"apply-a-radial-mask-vignette-to-a-bitmap-using-porterduffxfermode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-radial-mask-vignette-to-a-bitmap-using-porterduffxfermode"}},[t._v("#")]),t._v(" Apply a radial mask (vignette) to a bitmap using PorterDuffXfermode")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Apply a radial mask (vignette, i.e. fading to black at the borders) to a bitmap\n * @param imageToApplyMaskTo Bitmap to modify\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radialMask")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bitmap")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Canvas")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" centerX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" centerY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" radius "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadialGradient")]),t._v(" gradient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadialGradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centerX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centerY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TileMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLAMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paint")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gradient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setXfermode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuffXfermode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PorterDuff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DST_OUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageToApplyMaskTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v('"Porter Duff" in itself is an '),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Alpha_compositing",target:"_blank",rel:"noopener noreferrer"}},[t._v("alpha compositing technique"),s("OutboundLink")],1),t._v(" named after a "),s("a",{attrs:{href:"http://keithp.com/%7Ekeithp/porterduff/p253-porter.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("paper by Thomas Porter and Tom Duff."),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("To summarize, the technique takes two images with alpha channel and generates the output image by combining pixels values of two images. The various combining modes result in different output image. For example, in following image, blue shape (source, existing pixels) is combined with Yellow shape (destination, new pixels) in different modes:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://i.stack.imgur.com/qjlRN.png",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://i.stack.imgur.com/qjlRN.png",alt:"Porter duff modes"}}),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);