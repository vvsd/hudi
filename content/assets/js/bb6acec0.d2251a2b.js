"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8360],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89930:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"Adding support for Virtual Keys in Hudi",excerpt:"Supporting Virtual keys in Hudi for reducing storage overhead",author:"shivnarayan",category:"blog"},s=void 0,c={permalink:"/blog/2021/08/18/virtual-keys",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-virtual-keys.md",source:"@site/blog/2021-08-18-virtual-keys.md",title:"Adding support for Virtual Keys in Hudi",description:"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[],readingTime:4.95,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/blog/2021/08/18/improving-marker-mechanism"},nextItem:{title:"Schema evolution with DeltaStreamer using KafkaSource",permalink:"/blog/2021/08/16/kafka-custom-deserializer"}},l={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.\nHudi adds per record metadata fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_partition path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time")," which serves multiple purposes.\nThey assist in avoiding re-computing the record key, partition path during merges, compaction and other table operations\nand also assists in supporting ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/07/21/streaming-data-lake-platform#readers"},"record-level")," incremental queries (in comparison to other table formats, that merely track files).\nIn addition, it ensures data quality by ensuring unique key constraints are enforced even if the key field changes for a given table, during its lifetime.\nBut one of the repeated asks from the community is to leverage existing fields and not to add additional meta fields, for simple use-cases where such benefits are not desired or key changes are very rare."))}f.isMDXComponent=!0}}]);