(window.webpackJsonp=window.webpackJsonp||[]).push([[2344],{2689:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"exception-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-handling"}},[t._v("#")]),t._v(" Exception Handling")]),t._v(" "),a("p",[t._v("Oracle produces a variety of exceptions. You may be surprised how tedious it can be to have your code stop with some unclear message. To improve your PL/SQL code's ability to get fixed easily it is necessary to handle exceptions at the lowest level. Never hide an exception \"under the carpet\", unless you're here to keep your piece of code for you only and for no one else to maintain.")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://docs.oracle.com/database/122/LNPLS/plsql-error-handling.htm#LNPLS00703",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined errors"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"define-custom-exception-raise-it-and-see-where-it-comes-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-custom-exception-raise-it-and-see-where-it-comes-from"}},[t._v("#")]),t._v(" Define custom exception, raise it and see where it comes from")]),t._v(" "),a("p",[t._v('To illustrate this, here is a function that has 3 different "wrong" behaviors')]),t._v(" "),a("ul",[a("li",[t._v("parameter is completely stupid: we use a user-defined expression")]),t._v(" "),a("li",[t._v("parameter has a typo: we use Oracle standard "),a("code",[t._v("NO_DATA_FOUND")]),t._v(" error")]),t._v(" "),a("li",[t._v("another, but not handled case")])]),t._v(" "),a("p",[t._v("Feel free to adapt it to your standards:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v("\n  this_is_not_acceptable EXCEPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  PRAGMA EXCEPTION_INIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this_is_not_acceptable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20077")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  g_err varchar2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-be-defined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  w_schema all_tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OWNER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" p_table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" Varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p_schema "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" Varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("Is")]),t._v(" \n    w_err varchar2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-be-defined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    w_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get_schema-step-1:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p_table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Delivery-Manager-Is-Silly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n      raise this_is_not_acceptable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    w_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get_schema-step-2:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Select")]),t._v(" owner "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Into")]),t._v(" p_schema \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("From")]),t._v(" all_tables\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p_table"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  EXCEPTION\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" NO_DATA_FOUND "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- handle Oracle-defined exception")]),t._v("\n     dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[WARN]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("w_err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This can happen. Check the table name you entered.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" this_is_not_acceptable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- handle your custom error")]),t._v("\n     dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[WARN]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("w_err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please don''t make fun of the delivery manager.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("When")]),t._v(" others "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n     dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[ERR]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("w_err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unhandled exception:'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("sqlerrm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     raise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" Get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n  g_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Global; first call:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Delivery-Manager-Is-Silly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  g_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Global; second call:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AAA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  g_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Global; third call:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  g_err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Global; 4th call:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  get_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Can''t reach this point due to previous error.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \nEXCEPTION\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("When")]),t._v(" others "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n     dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[ERR]'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("g_err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unhandled exception:'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("sqlerrm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- you may raise this again to the caller if error log isn't enough.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--  raise;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n")])])]),a("p",[t._v("Giving on a regular database:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("get_schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":Please don't make fun "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the delivery manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("get_schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":This can happen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Check")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" name you entered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("get_schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":unhandled exception:ORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01422")]),t._v(": exact "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fetch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" more than requested number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" third "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(":unhandled exception:ORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01422")]),t._v(": exact "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fetch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" more than requested number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rows")]),t._v("\n\n")])])]),a("p",[t._v("Remember that exception are here to handle "),a("strong",[t._v("rare")]),t._v(' cases. I saw applications who raised an exception at every access, just to ask for user password, saying "not connected"... so much computation waste.')]),t._v(" "),a("h2",{attrs:{id:"handling-connexion-error-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-connexion-error-exceptions"}},[t._v("#")]),t._v(" Handling connexion error exceptions")]),t._v(" "),a("p",[t._v("Each standard Oracle error is associated with an error number. Its important to anticipate what could go wrong in your code. Here for a connection to another database it can be:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-28000")]),t._v(" account is locked")]),t._v(" "),a("li",[a("code",[t._v("-28001")]),t._v(" password expired")]),t._v(" "),a("li",[a("code",[t._v("-28002")]),t._v(" grace period")]),t._v(" "),a("li",[a("code",[t._v("-1017")]),t._v(" wrong user / password")])]),t._v(" "),a("p",[t._v("Here is a way to test what goes wrong with the user used by the database link:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v("\n  v_dummy number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- testing db link")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("execute")]),t._v(" immediate "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select COUNT(1) from dba_users@pass.world'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" v_dummy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- if we get here, exception wasn't raised: display COUNT's result")]),t._v("\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_dummy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' users on PASS db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEXCEPTION\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- exception can be referred by their name in the predefined Oracle's list")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("When")]),t._v(" LOGIN_DENIED \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n        dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-1017 / USERNAME OR PASSWORD INVALID, TRY AGAIN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("When")]),t._v(" Others \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- or referred by their number: stored automatically in reserved variable SQLCODE    ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("  SQLCODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-2019'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("    \n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-2019 / Invalid db_link name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Elsif SQLCODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1035'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-1035 / DATABASE IS ON RESTRICTED SESSION, CONTACT YOUR DBA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n        Elsif SQLCODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-28000'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-28000 / ACCOUNT IS LOCKED. CONTACT YOUR DBA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Elsif SQLCODE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-28001'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-28001 / PASSWORD EXPIRED. CONTACT YOUR DBA FOR CHANGE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Elsif SQLCODE  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-28002'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ORA-28002 / PASSWORD IS EXPIRED, CHANGED IT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- and if it's not one of the exception you expected")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Exception not specifically handled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Oracle Said'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("SQLCODE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("SQLERRM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);