(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4izX":function(e,t,n){e.exports=n.p+"static/test-4b49990c12e7b619d54cc550be830a6e.gif"},EcgU:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("7oih"),i=n("EYWl"),c=n("Nh35");var m=function(e){var t,a;function m(){return e.apply(this,arguments)||this}return a=e,(t=m).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,m.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,m=t.site.siteMetadata.title,p=t.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:this.props.location,title:m},r.a.createElement(i.a,{title:"All posts"}),r.a.createElement("div",{className:"Main-list-class"},p.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement(l.Link,{className:"main-img-left-layout"+(t.frontmatter.top_img?" main-have-img":" main-no-img"),to:t.fields.slug,key:t.fields.slug},t.frontmatter.top_img?r.a.createElement("div",{className:"left-img"},r.a.createElement("img",{src:n("nk+4")("./"+t.frontmatter.top_img),alt:""})):"",r.a.createElement("header",null,a),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),r.a.createElement("div",{className:"main-nav"},r.a.createElement("span",null,t.frontmatter.tags?t.frontmatter.tags.map((function(e){return r.a.createElement("i",{key:e},e)})):r.a.createElement("i",null,"no tags")),r.a.createElement("small",null,t.frontmatter.date)))})),r.a.createElement(c.a,{path:"/",pageContext:a})))},m}(r.a.Component);t.default=m;var p="2579389373"},Nh35:function(e,t,n){"use strict";n("XfO3"),n("HEwt");var a=n("q1tI"),r=n.n(a),l=n("Wbzz");var o=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.pageContext,t=e.totalPage,n=e.currentPage,a=this.props.path;return r.a.createElement("div",{className:"Pagination-class"},r.a.createElement("ul",null,n-2-1>=1&&r.a.createElement("li",null,r.a.createElement(l.Link,{to:""+a},"1")),n-2-1>1&&r.a.createElement("li",null,r.a.createElement("span",null,"...")),Array.from({length:2}).map((function(e,t){var o=n-2+t;return o>=1&&r.a.createElement("li",{key:""+a+o},r.a.createElement(l.Link,{to:1===o?""+a:""+a+o},o))})),r.a.createElement("li",{className:"center"}," ",n," "),Array.from({length:2}).map((function(e,o){var i=n+o+1;return i<=t&&r.a.createElement("li",{key:""+a+i},r.a.createElement(l.Link,{to:""+a+i},i))})),n+2+1<t&&r.a.createElement("li",null,r.a.createElement("span",null,"...")),n+2+1<=t&&r.a.createElement("li",null,r.a.createElement(l.Link,{to:""+a+t},t))))},a}(a.Component);t.a=o},"nk+4":function(e,t,n){var a={"./1.png":"txKD","./2.png":"kR/k","./3.png":"mY32","./4.png":"dta2","./5.png":"VDrO","./6.png":"h2bC","./7.png":"xO7t","./8.png":"XTZa","./test.gif":"4izX"};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id="nk+4"}}]);
//# sourceMappingURL=component---src-templates-main-js-87b3f9be2974b54a1659.js.map