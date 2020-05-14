(window.webpackJsonp=window.webpackJsonp||[]).push([[3446],{3792:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"working-with-files-and-directories-without-using-filesystemobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-files-and-directories-without-using-filesystemobject"}},[t._v("#")]),t._v(" Working With Files and Directories Without Using FileSystemObject")]),t._v(" "),e("h2",{attrs:{id:"determining-if-folders-and-files-exist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#determining-if-folders-and-files-exist"}},[t._v("#")]),t._v(" Determining If Folders and Files Exist")]),t._v(" "),e("p",[e("strong",[t._v("Files:")])]),t._v(" "),e("p",[t._v("To determine if a file exists, simply pass the filename to the "),e("code",[t._v("Dir$")]),t._v(" function and test to see if it returns a result. Note that "),e("code",[t._v("Dir$")]),t._v(" supports wild-cards, so to test for a "),e("strong",[t._v("specific")]),t._v(" file, the passed "),e("code",[t._v("pathName")]),t._v(" should to be tested to ensure that it does not contain them. The sample below raises an error - if this isn't the desired behavior, the function can be changed to simply return "),e("code",[t._v("False")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" FileExists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" InStr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Or")]),t._v(" InStr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Exit Function   'Return False on wild-cards.")]),t._v("\n        Err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Raise "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Raise error on wild-cards.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    FileExists "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vbNullString\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Folders (Dir$ method):")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Dir$()")]),t._v(" function can also be used to determine if a folder exists by specifying passing "),e("code",[t._v("vbDirectory")]),t._v(" for the optional "),e("code",[t._v("attributes")]),t._v(" parameter. In this case, the passed "),e("code",[t._v("pathName")]),t._v(" value must end with a path separator ("),e("code",[t._v("\\")]),t._v("), as matching "),e("strong",[t._v("filenames")]),t._v(' will cause false positives. Keep in mind that wild-cards are only allowed after the last path separator, so the example function below will throw a run-time error 52 - "Bad file name or number" if the input contains a wild-card. If this isn\'t the desired behavior, uncomment '),e("code",[t._v("On Error Resume Next")]),t._v(" at the top of the function. Also remember that "),e("code",[t._v("Dir$")]),t._v(" supports relative file paths (i.e. "),e("code",[t._v("..\\Foo\\Bar")]),t._v("), so results are only guaranteed to be valid as long as the current working directory is not changed.")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" FolderExists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'Uncomment the "On Error" line if paths with wild-cards should return False')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'instead of raising an error.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'On Error Resume Next    ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vbNullString "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Or")]),t._v(" Right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    FolderExists "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vbDirectory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vbNullString\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])]),e("p",[e("strong",[t._v("Folders (ChDir method):")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("ChDir")]),t._v(" statement can also be used to test if a folder exists.  Note that this method will temporarily change the environment that VBA is running in, so if that is a consideration, the "),e("code",[t._v("Dir$")]),t._v(" method should be used instead.  It does have the advantage of being much less forgiving with its parameter.  This method also supports relative file paths, so has the same caveat as the "),e("code",[t._v("Dir$")]),t._v(" method.")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" FolderExists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Cache the current working directory")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" cached "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    cached "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CurDir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("On")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Resume")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v("\n    ChDir pathName\n    FolderExists "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("On")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GoTo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Change back to the cached working directory.")]),t._v("\n    ChDir cached\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"creating-and-deleting-file-folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-deleting-file-folders"}},[t._v("#")]),t._v(" Creating and Deleting File Folders")]),t._v(" "),e("p",[e("strong",[t._v("NOTE:")]),t._v(" For brevity, the examples below use the FolderExists function from the "),e("strong",[t._v("Determining If Folders and Files Exist")]),t._v(" example in this topic.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("MkDir")]),t._v(" statement can be used to create a new folder. It accepts paths containing drive letters ("),e("code",[t._v("C:\\Foo")]),t._v("), UNC names ("),e("code",[t._v("\\\\Server\\Foo")]),t._v("), relative paths ("),e("code",[t._v("..\\Foo")]),t._v("), or the current working directory ("),e("code",[t._v("Foo")]),t._v(").")]),t._v(" "),e("p",[t._v("If the drive or UNC name is omitted (i.e. "),e("code",[t._v("\\Foo")]),t._v("), the folder is created on the current drive. This may or may not be the same drive as the current working directory.")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" MakeNewDirectory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'MkDir will fail if the directory already exists.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" FolderExists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'This may still fail due to permissions, etc.")]),t._v("\n    MkDir pathName\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("p",[t._v("The "),e("code",[t._v("RmDir")]),t._v(" statement can be used to delete existing folders. It accepts paths in the same forms as "),e("code",[t._v("MkDir")]),t._v(" and uses the same relationship to the current working directory and drive. Note that the statement is similar to the Windows "),e("code",[t._v("rd")]),t._v(' shell command, so will throw a run-time error 75: "Path/File access error" if the target directory is not empty.')]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" DeleteDirectory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ByVal")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" Right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        pathName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pathName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Rmdir will fail if the directory doesn't exist.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Not")]),t._v(" FolderExists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Rmdir will fail if the directory contains files.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" Dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vbNullString "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Rmdir will fail if the directory contains directories.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" subDir "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    subDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vbDirectory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Do")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" subDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("And")]),t._v(" subDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".."')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n        subDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vbDirectory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Loop")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("While")]),t._v(" subDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vbNullString\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'This may still fail due to permissions, etc.")]),t._v("\n    RmDir pathName\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Scripting.FileSystemObject")]),t._v(" is much more robust that the legacy methods in this topic.  It should be preferred in almost all cases.")])])}),[],!1,null,null,null);s.default=r.exports}}]);