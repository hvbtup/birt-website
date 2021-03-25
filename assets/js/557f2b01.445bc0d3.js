(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?n.a.createElement(d,l(l({ref:t},c),{},{components:r})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(130)),i={id:"create-a-report",title:"Create a Report",sidebar_label:"Create a Report"},l={unversionedId:"create-a-report",id:"create-a-report",isDocsHomePage:!1,title:"Create a Report",description:"Create a Project",source:"@site/docs/create-a-report.md",slug:"/create-a-report",permalink:"/eclipse/docs/create-a-report",editUrl:"/https://github.com/chloetz/docs/create-a-report.md",version:"current",sidebar_label:"Create a Report",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/eclipse/docs/installation"},next:{title:"My first Report",permalink:"/eclipse/docs/my-first-report"}},p=[{value:"Create a Project",id:"create-a-project",children:[]},{value:"Create a Report",id:"create-a-report",children:[]},{value:"Choose a Template",id:"choose-a-template",children:[]}],c={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-project"},"Create a Project"),Object(o.b)("p",null,'Eclipse uses projects to organize your files. So, the first step is to create a new project. For this demo, let\'s create a project called "My Reports":'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Choose File->New->Project. The new project dialog appears.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Open the "Business Intelligence and Reporting Tools" group and choose "Report Project".')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Next.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Type "My Reports" (without the quotes) as the project name.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Finish.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click OK if asked to switch to the Report Design perspective. (This occurs if you create a BIRT project while in a perspective other than Report Design.)"))),Object(o.b)("h2",{id:"create-a-report"},"Create a Report"),Object(o.b)("p",null,"We're now ready to create our first report:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Choose File->New->Report. The new report dialog appears.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the tree view, choose the project we just created: My Reports.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Enter the following in the file name field: Customers.rptdesign.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Next."))),Object(o.b)("p",null,"You can create a report in three ways: as a blank report, by using a BIRT-defined template, or by copying one of your report designs. In this tutorial we will use a Template descibed in the next section."),Object(o.b)("h2",{id:"choose-a-template"},"Choose a Template"),Object(o.b)("p",null,"The next page of the New Report dialog presents a selection of report templates. Before we choose the one we want, let's walk though what's available."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"My First Report - Starts a report template that takes you through a tutorial using on-line help. (That tutorial will eventually replace this one.)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Blank Report - Creates a blank report with no predefined content.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Simple Listing - A tabular listing with no grouping.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Grouped Listing - A tabular listing with grouping. Grouping shows repeated values just once. Grouping also allows you to create subtotals.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Dual Column Listing - Produces a listing with two columns side-by-side.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Chart & Listing - A tabular listing that adds a chart to the top of the report.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Dual Column Chart & Listing - Combines charts and tables so you can display two sets of related data in a single report.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Side by Side Chart & Listing - Creates a grouped report where each group contains a chart and a listing side by side."))),Object(o.b)("p",null,"We're now ready to choose our template:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the Grouped Listing.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Finish."))),Object(o.b)("p",null,"BIRT opens your new report in the Eclipse workspace."))}s.isMDXComponent=!0}}]);