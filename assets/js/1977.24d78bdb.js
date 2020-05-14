(window.webpackJsonp=window.webpackJsonp||[]).push([[1977],{2325:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"bulk-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulk-import"}},[s._v("#")]),s._v(" BULK Import")]),s._v(" "),a("h2",{attrs:{id:"bulk-insert-with-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulk-insert-with-options"}},[s._v("#")]),s._v(" BULK INSERT with options")]),s._v(" "),a("p",[s._v("You can customize parsing rules using different options in WITH clause:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BULK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" People\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f:\\orders\\people.csv'")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  CODEPAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'65001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n         FIELDTERMINATOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n         ROWTERMINATOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n")])])]),a("p",[s._v("In this example, CODEPAGE specifies that a source file in UTF-8 file, and TERMINATORS are coma and new line.")]),s._v(" "),a("h2",{attrs:{id:"bulk-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bulk-insert"}},[s._v("#")]),s._v(" BULK INSERT")]),s._v(" "),a("p",[s._v("BULK INSERT command can be used to import file into SQL Server:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BULK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" People\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f:\\orders\\people.csv'")]),s._v("  \n\n")])])]),a("p",[s._v("BULK INSERT command will map columns in files with columns in target table.")]),s._v(" "),a("h2",{attrs:{id:"reading-entire-content-of-file-using-openrowset-bulk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-entire-content-of-file-using-openrowset-bulk"}},[s._v("#")]),s._v(" Reading entire content of file using OPENROWSET(BULK)")]),s._v(" "),a("p",[s._v("You can read content of file using OPENROWSET(BULK) function and store content in some table:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" myTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" BulkColumn\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPENROWSET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BULK")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Text1.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SINGLE_BLOB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" Document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n")])])]),a("p",[s._v("SINGLE_BLOB option will read entire content from a file as single cell.")]),s._v(" "),a("h2",{attrs:{id:"read-file-using-openrowset-bulk-and-format-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-file-using-openrowset-bulk-and-format-file"}},[s._v("#")]),s._v(" Read file using OPENROWSET(BULK) and format file")]),s._v(" "),a("p",[s._v("Yu can define format of the file that will be imported using FORMATFILE option:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" mytable\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPENROWSET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BULK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c:\\test\\values.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   \n   FORMATFILE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c:\\test\\values.fmt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n")])])]),a("p",[s._v("The format file, format_file.fmt, describes the columns in values.txt:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.0")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  SQLCHAR  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  ID                SQL_Latin1_General_Cp437_BIN  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  SQLCHAR  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\r\\n"')]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  Description       SQL_Latin1_General_Cp437_BIN  \n\n")])])]),a("h2",{attrs:{id:"read-json-file-using-openrowset-bulk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-json-file-using-openrowset-bulk"}},[s._v("#")]),s._v(" Read json file using OPENROWSET(BULK)")]),s._v(" "),a("p",[s._v("You can use OPENROWSET to read content of file and pass it to some other function that will parse results.")]),s._v(" "),a("p",[s._v("The following example shows hot to read entire content of JSON file using OPENROWSET(BULK) and then provide BulkColumn to OPENJSON function that will parse JSON and return columns:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPENROWSET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BULK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\JSON\\Books\\books.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SINGLE_CLOB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" j\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("APPLY")]),s._v(" OPENJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BulkColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" id nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             pages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" author nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" book\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);