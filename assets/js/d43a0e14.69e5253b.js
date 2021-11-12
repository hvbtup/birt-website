(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var a=r(3),o=r(7),n=(r(0),r(134)),i={id:"template-introduction",title:"Templates & Examples",sidebar_label:"Templates & Examples"},s={unversionedId:"template-introduction",id:"template-introduction",isDocsHomePage:!1,title:"Templates & Examples",description:"Welcome to the example and template section of the BIRT site. Here you will find examples and templates that illustrate some of the features of BIRT.",source:"@site/docs/template-introduction.md",slug:"/template-introduction",permalink:"/birt-website/docs/template-introduction",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/template-introduction.md",version:"current",sidebar_label:"Templates & Examples",sidebar:"someSidebar",previous:{title:"Viewer PHP",permalink:"/birt-website/docs/integrating/viewer-php"},next:{title:"Sample Database",permalink:"/birt-website/docs/template-sample-database"}},l=[{value:"How to proceed",id:"how-to-proceed",children:[]},{value:"Solution Reports",id:"solution-reports",children:[{value:"Product Catalog",id:"product-catalog",children:[]},{value:"Top Selling Products",id:"top-selling-products",children:[]},{value:"Top N / Top M% Customers",id:"top-n--top-m-customers",children:[]},{value:"Annual Sales By Product Lines",id:"annual-sales-by-product-lines",children:[]},{value:"Sales Invoice",id:"sales-invoice",children:[]}]},{value:"Reporting Features",id:"reporting-features",children:[{value:"XML Data Source",id:"xml-data-source",children:[]},{value:"Libraries",id:"libraries",children:[]},{value:"Combination Chart",id:"combination-chart",children:[]},{value:"Cascaded Parameter",id:"cascaded-parameter",children:[]},{value:"Query Modifications",id:"query-modifications",children:[]},{value:"Drill to Details",id:"drill-to-details",children:[]},{value:"Report Elements",id:"report-elements",children:[]},{value:"Sub Reports",id:"sub-reports",children:[]},{value:"Mapping and Sorting",id:"mapping-and-sorting",children:[]},{value:"Parallel Report",id:"parallel-report",children:[]},{value:"Highlighting and Conditional Formatting",id:"highlighting-and-conditional-formatting",children:[]},{value:"Grouping",id:"grouping",children:[]}]},{value:"Scripting",id:"scripting",children:[]},{value:"Scripted Data Source",id:"scripted-data-source",children:[{value:"Integrating BIRT",id:"integrating-birt",children:[]},{value:"Extending BIRT",id:"extending-birt",children:[]},{value:"Aggregate Function Extension Point",id:"aggregate-function-extension-point",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Welcome to the example and template section of the BIRT site. Here you will find examples and templates that illustrate some of the features of BIRT. "),Object(n.b)("h2",{id:"how-to-proceed"},"How to proceed"),Object(n.b)("p",null,"If you get stuck as you work through the tutorials, or if you want to see the finished report and its template right away, "),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},Object(n.b)("strong",{parentName:"p"}," ",Object(n.b)("a",{parentName:"strong",href:"../template-download"},"you can simply download all reports and their templates here"),".")))),Object(n.b)("p",null,"After you have downloaded the reports and tempates, you can see them by clicking on corresponding html-file. "),Object(n.b)("p",null,'To try a report for yourself, save it to disk and then use File--\x3eImport to bring the file into your Eclipse workspace. If the report uses the Classic Models database, you should be able to run the report immediately. If the report uses another database, follow the instructions provided in the "Other Notes" section of its description. '),Object(n.b)("h2",{id:"solution-reports"},"Solution Reports"),Object(n.b)("p",null,'The example reports here show just a few of the things you can do with BIRT. Unless otherwise noted, the reports are meant to be run against the "Classic Models Inc." ',Object(n.b)("strong",{parentName:"p"},"sample database that is included on the BIRT download page ",Object(n.b)("a",{parentName:"strong",href:"../template-download"},"here"),".")),Object(n.b)("h3",{id:"product-catalog"},"Product Catalog"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/solution/ProductCatalog.html"},"View Product Catalog here."))),Object(n.b)("p",null,"Prints the Classic Models product catalog, grouped by product category. Provides product name, cost and description. Demonstrates one level grouping and using a grid within a table row to structure spacing. Also shows image inclusion and use of the tag in text item to include the content of a database column. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. "),Object(n.b)("h3",{id:"top-selling-products"},"Top Selling Products"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/solution/TopSellingProducts.html"},"View Product Catalog here."))),Object(n.b)("p",null,"Displays a pie chart showing revenue by product line. Lists the top selling products, sorted by revenue. Demonstrates use of a chart and sorting a result set. It also shows image inclusion and use of grid and tables to organize report content. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. "),Object(n.b)("h3",{id:"top-n--top-m-customers"},"Top N / Top M% Customers"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/solution/TopNPercent.html"},"View Top N / Top M% Customers here."))),Object(n.b)("p",null,'Making use of the top n and top precent filter capabilities added in BIRT 2.0, this report shows a bar chart with the top N customers by revenue, followed by a listing of the top M% customers by revenue sorted by customer name. This requires multiple passes over the data, but it is all done "under the covers" by the BIRT report engine. N and M are passed into the report as parameters to allow report users to select the number and percentage at run time. '),Object(n.b)("h3",{id:"annual-sales-by-product-lines"},"Annual Sales By Product Lines"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/solution/crosstab.html"},"Annual Sales By Product Lines here."))),Object(n.b)("p",null,"This example illustrates building a static crosstab report using the BIRT Total function. The report presents annual sales revenue by quarter for each of the product lines that Classic Models Inc currently sales. In addition totals are aggregated across horizontal and vertical dimensions. The BIRT Total function can accept a second parameter that filters the aggregate data. In this example this feature is used to only display values that pertain to a product offering, such as Trains. The first parameter in the Total function is the value to aggregate, and in this example it is set to quantity sold multiplied by price each. The second parameter is the filter. So if the filter where specified as dataSetRow",'["Products::PRODUCTLINE"]','=="Motorcycles", only the Motorcycles product line would be aggregated. '),Object(n.b)("h3",{id:"sales-invoice"},"Sales Invoice"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/solution/SalesInvoice.html"},"Sales Invoice here."))),Object(n.b)("p",null,"Prints an invoice for the selected order, including customer and invoice details and products ordered. Demonstrates use of a parameter to select the order to invoice and expressions for several calculated fields, including discount and order total. Uses expression to build customer address string and illustrates suppression of nulls in database fields with javascript function replace. Also shows image inclusion and sophisticated use of grids and tables to organize report content. Finally, the report makes use of styles to simplify maintenance and achieve a consistent look. "),Object(n.b)("h2",{id:"reporting-features"},"Reporting Features"),Object(n.b)("p",null,"This section of Examples focuses on the feature set within BIRT. Simple reports are used to illustrate a function within BIRT. Most examples will have a before and after report that can be downloaded. In addition, the example is illustrated in a Flash presentation. The examples use popups to explain the process and provide no sound."),Object(n.b)("h3",{id:"xml-data-source"},"XML Data Source"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/xmlds/after.jpg"},"View XML Data Source here."))),Object(n.b)("p",null," This example demonstrates how BIRT can be used to build reports on XML data sources. An XML file or an URI can serve as data sources for a BIRT report. In this example, we utilize URI's to the Eclipse RSS Newsfeed as the data source for a report. "),Object(n.b)("h3",{id:"libraries"},"Libraries"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/xmlds/after.jpg"},"View Newsfeeds After rptdesign-file here."))),Object(n.b)("p",null," This example demonstrates how BIRT can be used to build reusable component report libraries. In this example, we start by creating a library. We utilize URI's to the Eclipse RSS Newsfeed as the data source for a report and store it in the library. We then publish the library to a resource folder. This example demonstrates the creation of non-visual items in a library. It is important to note that visual items can also be created and stored in a library."),Object(n.b)("h3",{id:"combination-chart"},"Combination Chart"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/combochart/final.JPG"},"View Combination Chart here."))),Object(n.b)("p",null,"This example demonstrates how a Combination Chart can be created within BIRT. In addition this example also demonstrates how to add drill to details, using internal bookmarks and the Chart Interactivity Editor. The combination chart presents the outstanding debt for the top 5 customers in Bar Chart format with a Line series representing each customers credit limit superimposed. The bars within the chart are then linked to order details for each customer."),Object(n.b)("h3",{id:"cascaded-parameter"},"Cascaded Parameter"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/cascade/cascade.rptdesig"},"View Cascaded Parameter rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates how to build a BIRT report that uses a cascaded parameter group. A cascaded parameter group allows a group of parameters to be interlinked, where selecting a value for the first parameter affects the choices available in the subsequent parameters. Cascaded parameters can be tied to one or more Data Sets. The Data Sets populate each level of the cascade. Combined with Data Set parameters this offers very good flexibility for culling of returned data for a report."),Object(n.b)("p",null,"In this particular example we demonstrate cascading parameters by producing a order details report. The user of the report is presented with a cascaded parameter group that contains customers and orders. When a customer is selected the orders for the customer is updated in the parameter selection. After the order is selected a order detail report is generated for the selected order. This report contains three Data Sets. The customers Data Set is used to retrieve customers for the first level of the cascade. The orders Data Set is used to display orders in the parameter cascade for the selected customer. This Data Set uses the customer selected as part of the where clause and demonstrates tying a report parameter to a Data Set parameter. The final Data Set is orderdetails and uses the order report parameter in its where clause to retrieve the details about the selected order. This is the only Data Set used in the actual output of the report."),Object(n.b)("h3",{id:"query-modifications"},"Query Modifications"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/querymod/OrderDetailsAfter.rptdesign"},"View Query Modifications rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates how to modify a JDBC query using Property Binding or Script. Property Binding is a feature within BIRT that allows run time modification of Data Source and Data Set public properties. This can be useful to add context sensitive information to either element. As an example, the where clause can be modified to retrieve the user name from session or the database URL can be switched between development and production based on a report parameter."),Object(n.b)("h3",{id:"drill-to-details"},"Drill to Details"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/drill/OrderMasterAfter.rptdesign"},"View Drill to Details master-rptdesign-file here."))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/drill/OrderDetailAfter.rptdesign"},"View Drill to Details detail-rptdesign-file here."))),Object(n.b)("p",null," This example demonstrates building a master report and a detail report. The master report list orders and allows the report user to click on a particular order number to drill into a detail report for the selected order. This example illustrates using a simple parameter to cull results in the detail report and the hyperlink property within the master report to pass this parameter to the detail report. The hyperlink property within the master report is generated dynamically based on results retrieved from a query."),Object(n.b)("h3",{id:"report-elements"},"Report Elements"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/elements/ProductLinesAfter.rptdesign"},"View Report Elements rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates using Label, Text, Dynamic Text, Data, and Image elements within a report design. Some key features and differences between the elements are also identified. This example also illustrates retrieving BLOB and CLOB data from a datasource."),Object(n.b)("h3",{id:"sub-reports"},"Sub Reports"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/subreport/OrdersAfter.rptdesign"},"View Sub Reports rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates building a report that uses nested tables. The query that is bound to the inner table is parameterized to return order details for a given order number in the outer table. This example also illustrates referencing outer table columns within a nested table. This allows BIRT reports to be designed with master detail information contained within th same report. As the outer table is processing its rows the inner table query is re-executed based on information from the outer table."),Object(n.b)("h3",{id:"mapping-and-sorting"},"Mapping and Sorting"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/mappingsorting/CustomerListAfter.rptdesign"},"View Mapping and Sorting  rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates using the Mapping and Sorting features of BIRT. Mapping allows a BIRT report element to display a different value based on an expression. For example if a query returns a numerical field for month (1-12) the mapping feature can be used to present January - December. In this example we use mapping to display a credit rank for Classic Models customers. Sorting is used in many places in BIRT and is very flexible. In this example we demonstrate adding a sort expression to a Table element that is tied to a report parameter. The parameter allows entering a search string, which is then used in the sort expression to set the sort order for the table."),Object(n.b)("h3",{id:"parallel-report"},"Parallel Report"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/parallel/EmployeeAfter.rptdesign"},"View Parallel Report  rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates how to build a report with parallel sections. It also illustrates using table filters to cull the data displayed. The report uses a grid element to layout two columns. In each column a set of nested tables are added to retrieve employee information and group by position hierarchy. The tables are filtered by office code."),Object(n.b)("h3",{id:"highlighting-and-conditional-formatting"},"Highlighting and Conditional Formatting"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/highlighting/ProductListAfter.rptdesign"},"View Highlighting and Conditional Formatting rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates how to add highlighting and conditional formatting to a BIRT report. A Products list report is developed that displays all company products. The example report uses alternating row colors and highlights rows that represent a product that is low in quantity. This report also illustrates adding a script to the onCreate event of a row to modify the row style to italics for products with high markup values."),Object(n.b)("h3",{id:"grouping"},"Grouping"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/reports/2.1/grouping/CustomerListAfter.rptdesign"},"View Grouping rptdesign-file here."))),Object(n.b)("p",null,"This example demonstrates building a grouped report in BIRT. The example report shows a list of customers and groups these by country. Key BIRT features that are covered in this demonstration are grouping, page breaks, table of contents, and aggregrating data per group or as a total."),Object(n.b)("h2",{id:"scripting"},"Scripting"),Object(n.b)("p",null,"This section of Examples focuses on scripting within BIRT. Simple reports are used to illustrate scripting functionallity. Most examples will have a before and after report that can be downloaded. In addition, the example is illustrated in a Flash presentation."),Object(n.b)("h2",{id:"scripted-data-source"},"Scripted Data Source"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/scripting/scripteddatasource/after.html"},"View Scripted Data Source here."))),Object(n.b)("p",null,"This example is intended to illustrate using BIRT's Scripted Data Source. This example simulates retrieving results from an online survey. The results of the survey are accessed using a Java Object, which is called from a BIRT Scripted Data Source."),Object(n.b)("h3",{id:"integrating-birt"},"Integrating BIRT"),Object(n.b)("p",null,"You can find examples which focuses on integrating BIRT and demonstrating the design engine API and the report engine API in the Eclipse ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://download.eclipse.org/birt/downloads/examples/scripting/scripteddatasource/after.html"},"wiki"))),Object(n.b)("p",null,"These examples focus on using the BIRT APIs to embed or integrate BIRT."),Object(n.b)("h3",{id:"extending-birt"},"Extending BIRT"),Object(n.b)("p",null,"This section of Examples focuses on Extending BIRT. The examples here focus on implementing BIRT supplied extension points, giving the BIRT developer the capability to add to, or change the default behavior of the designer or runtime engine. This includes adding Chart Types, aggregate functions, Data Sources and Report Items."),Object(n.b)("h3",{id:"aggregate-function-extension-point"},"Aggregate Function Extension Point"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://www.eclipse.org/birt/phoenix/examples/extending/aggregate/optim.rptdesign"},"View Aggregate rptdesign-file here."))),Object(n.b)("p",null,"This example shows how to create a BIRT Aggregate Data Extension. Imagine your manager wants you to create a new more optimistic way to sum up data in a report. Is there a way that you can create a common solution that can be consistently re-used across all of your reports? Through the Birt Aggregate Data Extension you can create new custom functions that show up as native BIRT functions."))}d.isMDXComponent=!0},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return b}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),h=a,b=c["".concat(i,".").concat(h)]||c[h]||u[h]||n;return r?o.a.createElement(b,s(s({ref:t},p),{},{components:r})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);