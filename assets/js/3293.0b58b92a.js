(window.webpackJsonp=window.webpackJsonp||[]).push([[3293],{3637:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"subqueries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subqueries"}},[s._v("#")]),s._v(" Subqueries")]),s._v(" "),e("h2",{attrs:{id:"subquery-in-from-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subquery-in-from-clause"}},[s._v("#")]),s._v(" Subquery in FROM clause")]),s._v(" "),e("p",[s._v("A subquery in a "),e("code",[s._v("FROM")]),s._v(" clause acts similarly to a temporary table that is generated during the execution of a query and lost afterwards.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Managers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Salary\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Id\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employees\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ManagerId "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" Managers\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" Employees "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" Managers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id\n\n")])])]),e("h2",{attrs:{id:"subquery-in-where-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subquery-in-where-clause"}},[s._v("#")]),s._v(" Subquery in WHERE clause")]),s._v(" "),e("p",[s._v("Use a subquery to filter the result set. For example this will return all employees with a salary equal to the highest paid employee.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employees\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" Salary "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Salary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"subquery-in-select-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subquery-in-select-clause"}},[s._v("#")]),s._v(" Subquery in SELECT clause")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n  Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  FName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  LName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Cars "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" Cars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CustomerId "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Customers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" NumberOfCars\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Customers\n\n")])])]),e("h2",{attrs:{id:"correlated-subqueries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#correlated-subqueries"}},[s._v("#")]),s._v(" Correlated Subqueries")]),s._v(" "),e("p",[s._v("Correlated (also known as Synchronized or Coordinated) Subqueries are nested queries that make references to the current row of their outer query:")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" EmployeeId\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employee "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" eOuter\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" Salary "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Salary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employee eInner\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" eInner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DepartmentId "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" eOuter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DepartmentId\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),e("p",[s._v("Subquery "),e("code",[s._v("SELECT AVG(Salary) ...")]),s._v(" is "),e("strong",[s._v("correlated")]),s._v(" because it refers to "),e("code",[s._v("Employee")]),s._v(" row "),e("code",[s._v("eOuter")]),s._v(" from its outer query.")]),s._v(" "),e("h2",{attrs:{id:"subqueries-in-from-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subqueries-in-from-clause"}},[s._v("#")]),s._v(" Subqueries in FROM clause")]),s._v(" "),e("p",[s._v('You can use subqueries to define a temporary table  and use it in the FROM clause of an "outer" query.')]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" city"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temp_hi "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" temp_lo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" temp_var "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" weather"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" w\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" temp_var "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("p",[s._v("The above finds cities from the "),e("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/280/example-databases/2641/weather-table",target:"_blank",rel:"noopener noreferrer"}},[s._v("weather table"),e("OutboundLink")],1),s._v(" whose daily temperature variation is greater than 20. The result is:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("city")]),s._v(" "),e("th",[s._v("temp_var")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ST LOUIS")]),s._v(" "),e("td",[s._v("21")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("31")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("23")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("31")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("27")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("28")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("28")])]),s._v(" "),e("tr",[e("td",[s._v("LOS ANGELES")]),s._v(" "),e("td",[s._v("32")])])])]),s._v(" "),e("p",[s._v(".")]),s._v(" "),e("h2",{attrs:{id:"subqueries-in-where-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subqueries-in-where-clause"}},[s._v("#")]),s._v(" Subqueries in WHERE clause")]),s._v(" "),e("p",[s._v("The following example finds cities (from the "),e("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/280/example-databases/2709/cities-table",target:"_blank",rel:"noopener noreferrer"}},[s._v("cities example"),e("OutboundLink")],1),s._v(") whose population is below the average temperature (obtained via a sub-qquery):")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pop2000 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cities \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" pop2000 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pop2000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cities"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("p",[s._v("Here: the subquery (SELECT avg(pop2000)  FROM cities) is used to specify conditions in the WHERE clause. The result is:")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("pop2000")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("San Francisco")]),s._v(" "),e("td",[s._v("776733")])]),s._v(" "),e("tr",[e("td",[s._v("ST LOUIS")]),s._v(" "),e("td",[s._v("348189")])]),s._v(" "),e("tr",[e("td",[s._v("Kansas City")]),s._v(" "),e("td",[s._v("146866")])])])]),s._v(" "),e("h2",{attrs:{id:"filter-query-results-using-query-on-different-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-query-results-using-query-on-different-table"}},[s._v("#")]),s._v(" Filter query results using query on different table")]),s._v(" "),e("p",[s._v("This query selects all employees not on the Supervisors table.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employees\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" EmployeeID "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" EmployeeID\n                            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Supervisors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),e("p",[s._v("The same results can be achieved using a LEFT JOIN.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Employees "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" e\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" Supervisors "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" s "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EmployeeID"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EmployeeID\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EmployeeID "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"subqueries-in-select-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subqueries-in-select-clause"}},[s._v("#")]),s._v(" Subqueries in SELECT clause")]),s._v(" "),e("p",[s._v("Subqueries can also be used in the "),e("code",[s._v("SELECT")]),s._v(" part of the outer query. The following query\nshows all "),e("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/280/example-databases/2641/weather-table",target:"_blank",rel:"noopener noreferrer"}},[s._v("weather table"),e("OutboundLink")],1),s._v(" columns with the corresponding states from the "),e("a",{attrs:{href:"http://stackoverflow.com/documentation/sql/280/example-databases/2709/cities-table",target:"_blank",rel:"noopener noreferrer"}},[s._v("cities table"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cities "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" c "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("city "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" state \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" weather "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("h4",{attrs:{id:"remarks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),e("p",[s._v("Subqueries can appear in different clauses of an outer query, or in the set operation.")]),s._v(" "),e("p",[s._v("They must be enclosed in parentheses "),e("code",[s._v("()")]),s._v(".\nIf the result of the subquery is compared to something else, the number of columns must match.\nTable aliases are required for subqueries in the FROM clause to name the temporary table.")])])}),[],!1,null,null,null);t.default=r.exports}}]);