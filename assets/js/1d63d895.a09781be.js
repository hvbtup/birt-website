(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),h=n,m=l["".concat(o,".").concat(h)]||l[h]||d[h]||i;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(137)),o={id:"using-php",title:"Using PHP",sidebar_label:"Using PHP"},s={unversionedId:"integrating/using-php",id:"integrating/using-php",isDocsHomePage:!1,title:"Using PHP",description:"Motivation",source:"@site/docs/integrating/using-php.md",slug:"/integrating/using-php",permalink:"/birt-website/docs/integrating/using-php",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/integrating/using-php.md",version:"current",sidebar_label:"Using PHP",sidebar:"someSidebar",previous:{title:"Viewer Usage",permalink:"/birt-website/docs/integrating/viewer-usage"},next:{title:"Design Engine API",permalink:"/birt-website/docs/integrating/deapi"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Running a Report",id:"running-a-report",children:[]},{value:"Passing Parameters",id:"passing-parameters",children:[]},{value:"Parameter Form",id:"parameter-form",children:[]}],c={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"BIRT is designed to be integrated into a Java EE web application. But, what if your chosen development environment is something else, such as PHP? Can you still use BIRT? Yes, you can.  This page discusses how to use BIRT from PHP."),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"PHP has the ability to call Java classes using a PHP/Java Bridge. So, one integration option is to have the PHP engine call the BIRT Engine directly. The scenario is discussed in ",Object(i.b)("a",{parentName:"p",href:"https://www.theserverside.com/news/1363642/Intergrating-BIRT-with-PHP"},"an article here"),". "),Object(i.b)("p",null,"Another option is to host BIRT on its own app server, such as Tomcat, and use the BIRT Viewer URLs to work with BIRT. The rest of this page discusses this option."),Object(i.b)("p",null,"The first step is to install Tomcat and the BIRT viewer. Let's assume that you've set up Tomcat on the same machine as the web server running Apache, and that Tomcat listens on port 8080. Once the setup works, we're ready to focus on the PHP side."),Object(i.b)("h3",{id:"running-a-report"},"Running a Report"),Object(i.b)("p",null,"Next step is to run a report from within a PHP script. Let's assume we have a report named test.rptdesign stored in C:/temp. We use a browser redirect to run the report. The redirect appears in an HTML header. Headers must be written before adding any content to the page:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$fname = "c:/temp/test.rptdesign";\n// Redirect browser\n$dest = "http://localhost:8080/birt-viewer/run?__report=";\n$dest .= urlencode( realpath( \\$fname ) );\nheader("Location: \\$dest" );\n')),Object(i.b)("p",null,"The name of the report is given as an absolute path, but a relative path is also allowed once you set up the BIRT_VIEWER_WORKING_FOLDER configuration variable in the BIRT viewer web app's web.xml file. Be sure to encode the file name for use in a URL."),Object(i.b)("h3",{id:"passing-parameters"},"Passing Parameters"),Object(i.b)("p",null,"Suppose your report takes parameters. The test report above has one parameter called sample. We simply add them to the report URL in the form described in ",Object(i.b)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-usage"},"Using the Report Viewer"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$fname = "c:/temp/test.rptdesign";\n$paramValue = "Hi there!";\n// Redirect browser\n$dest = "http://localhost:8080/birt-viewer/run?__report=";\n$dest .= urlencode( realpath( \\$fname ) );\n$dest .= ";sample=" . urlencode( \\$paramValue );\nheader("Location: \\$dest" );\n')),Object(i.b)("p",null,"The parameter value must also be encoded when placed into the URL."),Object(i.b)("h3",{id:"parameter-form"},"Parameter Form"),Object(i.b)("p",null,"Ideally, we could use PHP to create a UI form that prompts for the report parameters. The BIRT viewer creates this form in Java using information in the report design. Unfortunately, at present, there is no way to retrieve the raw parameter descriptions from the BIRT viewer using a URL. Instead, there are two alternatives we can use."),Object(i.b)("p",null,"First, if we know the parameters ahead of time, we can design a custom form in PHP that prompts the user for them. This works if we have a small number of reports, or if we need to create a specialized parameter page for each report anyway."),Object(i.b)("p",null,"Second, we can let the BIRT viewer display the parameter page using the frameset URL."))}u.isMDXComponent=!0}}]);