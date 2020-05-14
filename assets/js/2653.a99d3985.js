(window.webpackJsonp=window.webpackJsonp||[]).push([[2653],{3e3:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"audio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[t._v("#")]),t._v(" Audio")]),t._v(" "),s("h2",{attrs:{id:"working-with-wav-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-wav-files"}},[t._v("#")]),t._v(" Working with WAV files")]),t._v(" "),s("h3",{attrs:{id:"winsound"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#winsound"}},[t._v("#")]),t._v(" winsound")]),t._v(" "),s("ul",[s("li",[t._v("Windows environment")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" winsound\nwinsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlaySound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_wav_file.wav"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" winsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SND_FILENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"wave"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wave"}},[t._v("#")]),t._v(" wave")]),t._v(" "),s("ul",[s("li",[t._v("Support mono/stereo")]),t._v(" "),s("li",[t._v("Doesn't support compression/decompression")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" wave\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" wave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_wav_file.wav"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Open WAV file in read-only mode.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get basic information.")]),t._v("\n    n_channels "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getnchannels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Number of channels. (1=Mono, 2=Stereo).")]),t._v("\n    sample_width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getsampwidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sample width in bytes.")]),t._v("\n    framerate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getframerate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Frame rate.")]),t._v("\n    n_frames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getnframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Number of frames.")]),t._v("\n    comp_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcomptype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Compression type (only supports "NONE").')]),t._v("\n    comp_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcompname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compression name.")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Read audio data.")]),t._v("\n    frames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Read n_frames new frames.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" sample_width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n_frames\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Duplicate to a new WAV file.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" wave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_new_wav_file.wav"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Open WAV file in write-only mode.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Write audio data.")]),t._v("\n    params "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_channels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sample_width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" framerate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comp_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comp_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setparams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    wav_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"convert-any-soundfile-with-python-and-ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-any-soundfile-with-python-and-ffmpeg"}},[t._v("#")]),t._v(" Convert any soundfile with python and ffmpeg")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" subprocess "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" check_call\n\nok "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" check_call"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ffmpeg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-i'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output.wav'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output.wav'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        wav_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("note:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://superuser.com/questions/507386/why-would-i-choose-libav-over-ffmpeg-or-is-there-even-a-difference",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://superuser.com/questions/507386/why-would-i-choose-libav-over-ffmpeg-or-is-there-even-a-difference"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://stackoverflow.com/questions/9477115/what-are-the-differences-and-similarities-between-ffmpeg-libav-and-avconv",target:"_blank",rel:"noopener noreferrer"}},[t._v("What are the differences and similarities between ffmpeg, libav, and avconv?"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"playing-windows-beeps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playing-windows-beeps"}},[t._v("#")]),t._v(" Playing Windows' beeps")]),t._v(" "),s("p",[t._v("Windows provides an explicit interface through which the "),s("code",[t._v("winsound")]),t._v(" module allows you to play raw beeps at a given frequency and duration.")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" winsound\nfreq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set frequency To 2500 Hertz")]),t._v("\ndur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set duration To 1000 ms == 1 second")]),t._v("\nwinsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Beep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("freq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"audio-with-pyglet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio-with-pyglet"}},[t._v("#")]),t._v(" Audio With Pyglet")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pyglet\naudio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pyglet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"audio.wav"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naudio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("play"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("For further information, see "),s("a",{attrs:{href:"https://pyglet.readthedocs.io/en/pyglet-1.2-maintenance/programming_guide/media.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyglet"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);