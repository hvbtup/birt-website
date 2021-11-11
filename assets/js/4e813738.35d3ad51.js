(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,d=u["".concat(o,".").concat(g)]||u[g]||b[g]||a;return r?i.a.createElement(d,p(p({ref:t},c),{},{components:r})):i.a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(134)),o={id:"viewer-php",title:"Viewer PHP",sidebar_label:"Viewer PHP"},p={unversionedId:"integrating/viewer-php",id:"integrating/viewer-php",isDocsHomePage:!1,title:"Viewer PHP",description:"Integration Points",source:"@site/docs/integrating/viewer-php.md",slug:"/integrating/viewer-php",permalink:"/birt-website/docs/integrating/viewer-php",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/integrating/viewer-php.md",version:"current",sidebar_label:"Viewer PHP"},s=[{value:"Integration Points",id:"integration-points",children:[]},{value:"Example Report Viewer (Java EE App/Plugin)",id:"example-report-viewer-java-ee-appplugin",children:[]}],c={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"integration-points"},"Integration Points"),Object(a.b)("p",null,"BIRT supplies several APIs and an Example Java EE application for generating and viewing reports. The major APIs are the Design Engine API(DE API), Report Engine API(RE API) and the Chart Engine API (CE API). These pages describe the various APIs and illustrate examples on their usage. In addition to the APIs, BIRT supports scripting using Rhino within report designs. A primer is available to get started scripting."),Object(a.b)("h3",{id:"example-report-viewer-java-ee-appplugin"},"Example Report Viewer (Java EE App/Plugin)"),Object(a.b)("p",null,"The BIRT Viewer can be used in a variety of ways:\nNote that the BIRT Viewer requires that cookies be enabled."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"As a stand-alone, pre-built web application for running and viewing reports."),Object(a.b)("li",{parentName:"ul"},"As a starter web application that you can customize to your needs."),Object(a.b)("li",{parentName:"ul"},"Called through the BIRT tag library."),Object(a.b)("li",{parentName:"ul"},"As a plugin in existing RCP applications.")),Object(a.b)("h4",{id:"web-viewer-links"},"Web Viewer Links"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-setup"},"Integrating the BIRT Viewer")," explains how to deploy the BIRT viewer onto your own application server. The explanation uses Apache Jakarta Tomcat as the sample deployment target."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-usage"},"Using the BIRT Viewer")," discusses the viewer operation URLs, parameters and settings."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-php"},"Using the Viewer from PHP")," discusses how to run BIRT reports from a non-Java scripting environment such as PHP."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-usage"},"Viewer Tag Library")," discusses how to integrate BIRT using the Tag Libraries."),Object(a.b)("p",null,"The viewer code is available in the BIRT source repository in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/eclipse/birt/tree/master/viewer/org.eclipse.birt.report.viewer"},"org.eclipse.birt.report.viewer")," project. See the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/eclipse/birt/blob/master/README.md"},"BIRT build instructions")," for information on how to access the sources and build the viewer."))}l.isMDXComponent=!0}}]);