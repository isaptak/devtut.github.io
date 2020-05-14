(window.webpackJsonp=window.webpackJsonp||[]).push([[2023],{2368:function(a,s,e){"use strict";e.r(s);var t=e(19),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"managing-azure-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managing-azure-sql-database"}},[a._v("#")]),a._v(" Managing Azure SQL Database")]),a._v(" "),e("h2",{attrs:{id:"find-service-tier-information-for-azure-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find-service-tier-information-for-azure-sql-database"}},[a._v("#")]),a._v(" Find service tier information for Azure SQL Database")]),a._v(" "),e("p",[a._v("Azure SQL Database has different editions and performance tiers.")]),a._v(" "),e("p",[a._v("You can find version, edition (basic, standard, or premium), and service objective (S0,S1,P4,P11, etc.) of SQL Database that is running as a service in Azure using the following statements:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" @"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@version")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" DATABASEPROPERTYEX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Wwi'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EDITION'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" DATABASEPROPERTYEX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Wwi'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ServiceObjective'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),e("h2",{attrs:{id:"change-service-tier-of-azure-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-service-tier-of-azure-sql-database"}},[a._v("#")]),a._v(" Change service tier of Azure SQL Database")]),a._v(" "),e("p",[a._v("You can scale-up or scale-down Azure SQL database using ALTER DATABASE statement:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" WWI\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MODIFY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SERVICE_OBJECTIVE "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'P6'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CURRENT")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MODIFY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SERVICE_OBJECTIVE "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'P2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),e("p",[a._v("If you try to change service level while changing service level of the current database is still in progress you wil get the following error:")]),a._v(" "),e("blockquote"),a._v(" "),e("p",[a._v("Msg 40802, Level 16, State 1, Line 1 A service objective assignment on\nserver '......' and database '.......' is already in progress.\nPlease wait until the service objective assignment state for the\ndatabase is marked as 'Completed'.")]),a._v(" "),e("p",[a._v("Re-run your ALTER DATABASE statement when transition period finishes.")]),a._v(" "),e("h2",{attrs:{id:"replication-of-azure-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replication-of-azure-sql-database"}},[a._v("#")]),a._v(" Replication of Azure SQL Database")]),a._v(" "),e("p",[a._v("You can create a secondary replica of database with the same name on another Azure SQL Server, making the local database primary, and begins asynchronously replicating data from the primary to the new secondary.")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("mydb"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" SECONDARY "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" SERVER "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("secondaryserver"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" ALLOW_CONNECTIONS "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n\n")])])]),e("p",[a._v("Target server may be in another data center (usable for geo-replication).\nIf a database with the same name already exists on the target server, the command will fail. The command is executed on the master database on the server hosting the local database that will become the primary.\nWhen ALLOW_CONNECTIONS is set to ALL (it is set to NO by default), secondary replica will be a read-only database that will allow all logins with the appropriate permissions to connect.")]),a._v(" "),e("p",[a._v("Secondary database replica might be promoted to primary using the following command:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" mydb FAILOVER \n\n")])])]),e("p",[a._v("You can remove the secondary database on secondary server:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("mydb"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("\nREMOVE SECONDARY "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" SERVER "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v("testsecondaryserver"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v("\n\n")])])]),e("h2",{attrs:{id:"create-azure-sql-database-in-elastic-pool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-azure-sql-database-in-elastic-pool"}},[a._v("#")]),a._v(" Create Azure SQL Database in Elastic pool")]),a._v(" "),e("p",[a._v("You can put your azure SQL Database in SQL elastic pool:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" wwi\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" SERVICE_OBJECTIVE "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ELASTIC_POOL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mypool1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n\n")])])]),e("p",[a._v("You can create copy of an existing database and place it in some elastic pool:")]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" wwi\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" COPY "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("OF")]),a._v(" myserver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("WideWorldImporters  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" SERVICE_OBJECTIVE "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ELASTIC_POOL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" mypool1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);