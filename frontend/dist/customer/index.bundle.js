webpackJsonp([5],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),c=r(i),f=n(4),s=r(f),p=n(20),d=r(p),m=n(100),b=r(m),h={brand:"后台管理",items:[{text:"首页",href:"/admin",active:!0},{text:"客户管理",href:"/customerList"}]},y={columns:[{field:"uuid",text:"标识"},{field:"shop_name",text:"商店名称"},{field:"operator_name",text:"运营人姓名"},{field:"operator_phone",text:"运营人电话"},{field:"wx_appid",text:"微信凭证"},{field:"wx_secret",text:"微信凭证密钥"},{field:"wx_accesstoken",text:"微信访问令牌"},{field:"wx_url",text:"微客服务器地址"},{field:"wx_token",text:"微信令牌"}],pagination:!0},v=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(d["default"],{data:h}),c["default"].createElement("div",{className:"container-fluid"},c["default"].createElement("div",{className:"row"},c["default"].createElement("div",{className:"col-sm-12 col-md-12 blog-main"},c["default"].createElement(b["default"],{config:y,url:"/customer/list"})))))}}]),t}(c["default"].Component);s["default"].render(c["default"].createElement(v,null),document.getElementById("content"))},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),c=r(i),f=n(4),s=(r(f),function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("ul",{className:"nav navbar-nav pull-left"},this.props.items.map(function(e,t){return c["default"].createElement("li",{key:"nav-"+t,className:"nav-item"},c["default"].createElement("a",{className:"nav-link",href:e.href},e.text))}))}}]),t}(c["default"].Component)),p=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("nav",{id:"navbar-example",className:"navbar navbar-dark navbar-fixed-top bg-inverse"},c["default"].createElement("a",{href:"/",className:"navbar-brand"},this.props.data.brand),c["default"].createElement(s,{items:this.props.data.items}))}}]),t}(c["default"].Component);e.exports=p},100:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),c=r(i),f=n(4),s=(r(f),function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("thead",null,c["default"].createElement("tr",null,this.props.columns.map(function(e,t){for(var n in e)return c["default"].createElement("th",{key:"table-column-item-"+t},e.text)})))}}]),t}(c["default"].Component)),p=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("tbody",null,this.props.rows.map(function(t,n){return c["default"].createElement("tr",{key:"table-tr-"+n},e.props.columns.map(function(e,n){for(var r in e){var a=e[r],o=t[a];return c["default"].createElement("td",{key:"table-td-"+n},o)}}))}))}}]),t}(c["default"].Component),d=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=void 0,t=this.props.total%10;e=t>0?(this.props.total-t)/10+1:this.props.total/10;for(var n=[],r=1;e>=r;r++)n[r]=r;var a=n.map(function(e,t){return c["default"].createElement("li",{key:"table-page-item-"+t},c["default"].createElement("a",{href:e},e))});return c["default"].createElement("div",{className:"PaginationComponent"},c["default"].createElement("nav",null,c["default"].createElement("ul",{className:"pagination pagination-sm"},c["default"].createElement("li",null,c["default"].createElement("a",{href:"#","aria-label":"上一页"},c["default"].createElement("span",{"aria-hidden":"true"},"«"),c["default"].createElement("span",{className:"sr-only"},"Previous"))),a,c["default"].createElement("li",null,c["default"].createElement("a",{href:"#","aria-label":"下一页"},c["default"].createElement("span",{"aria-hidden":"true"},"»"),c["default"].createElement("span",{className:"sr-only"},"Next"))))))}}]),t}(c["default"].Component),m=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={total:0,rows:[]},e}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;$.get(this.props.url,{page:1,number:10},function(t){e.setState(t)},"json")}},{key:"render",value:function(){var e=this.props.config.pagination?c["default"].createElement(d,{total:this.state.total}):"";return c["default"].createElement("div",{className:"table-responsive"},c["default"].createElement("table",{className:"table table-bordered"},c["default"].createElement(s,{columns:this.props.config.columns}),c["default"].createElement(p,{columns:this.props.config.columns,rows:this.state.rows})),e)}}]),t}(c["default"].Component);e.exports=m}});