webpackJsonp([3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=r(f),p=n(20),d=r(p),m=n(93),b=r(m),y=n(97),h=r(y),v=n(94),g=r(v),E=n(95),w=r(E),j={brand:"微客",items:[{text:"首页",href:"#home",active:!0},{text:"产品",href:"#product"},{text:"团队",href:"#about"},{text:"管理",href:"/login"}]},x=[{title:"技术驱动",text:"互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！",active:!0,btn:{text:"了解更多",href:"/"}},{title:"任性偏执",text:"细节成就完美，兴趣成就梦想，偏执成就价值观！",btn:{text:"了解更多",href:"/"}},{title:"服务宗旨",text:"市场为王，设计可以提高用户体验，技术可以助力企业增值！",btn:{text:"了解更多",href:"/"}}],N=[{pic:"../../../frontend/agent/img/technology.jpg",title:"技术驱动",text:"互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！",active:!0,btn:{text:"了解更多",href:"/"}},{pic:"../../../frontend/agent/img/paranoid.jpg",title:"任性偏执",text:"细节成就完美，兴趣成就梦想，偏执成就价值观！",btn:{text:"了解更多",href:"/"}},{pic:"../../../frontend/agent/img/service.jpg",title:"服务宗旨",text:"市场为王，设计可以提高用户体验，技术可以助力企业增值！",btn:{text:"了解更多",href:"/"}}],O=[{title:"订餐系统",subtitle:"敬请期待...",text:"支持店内自助下单， 线上和线下支付， 提供餐饮， 完成交易"},{title:"网上商店",subtitle:"敬请期待...",text:"支持线上自助选购， 线上和线下支付， 配送货物， 完成交易"},{title:"移动官网",subtitle:"正常营业",text:"支持PC、移动响应式网站， 个性定制， 运营运维服务"}],P=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("div",null,i["default"].createElement(d["default"],{data:j}),i["default"].createElement("div",{id:"home",className:"body"},i["default"].createElement(b["default"],{data:x}),i["default"].createElement("div",{className:"container marketing"},i["default"].createElement(h["default"],{data:N}),i["default"].createElement(g["default"],{data:O}),i["default"].createElement(w["default"],{text:"2016 Company, Inc."}))))}}]),t}(i["default"].Component);s["default"].render(i["default"].createElement(P,null),document.getElementById("content"))},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=(r(f),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("ul",{className:"nav navbar-nav pull-left"},this.props.items.map(function(e,t){return i["default"].createElement("li",{key:"nav-"+t,className:"nav-item"},i["default"].createElement("a",{className:"nav-link",href:e.href},e.text))}))}}]),t}(i["default"].Component)),p=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("nav",{id:"navbar-example",className:"navbar navbar-dark navbar-fixed-top bg-inverse"},i["default"].createElement("a",{href:"/",className:"navbar-brand"},this.props.data.brand),i["default"].createElement(s,{items:this.props.data.items}))}}]),t}(i["default"].Component);e.exports=p},93:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=(r(f),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){var n=e.active?"carousel-item active":"carousel-item";return i["default"].createElement("div",{key:"carousel-"+t,className:n},i["default"].createElement("div",{className:"container"},i["default"].createElement("div",{className:"carousel-caption text-left"},i["default"].createElement("h1",null,e.title),i["default"].createElement("p",null,e.text),i["default"].createElement("p",null,i["default"].createElement("a",{className:"btn btn-lg btn-primary",href:e.btn.href,role:"button"},e.btn.text)))))});return i["default"].createElement("div",{className:"carousel slide","data-ride":"carousel"},i["default"].createElement("ol",{className:"carousel-indicators"},i["default"].createElement("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),i["default"].createElement("li",{"data-target":"#myCarousel","data-slide-to":"1"}),i["default"].createElement("li",{"data-target":"#myCarousel","data-slide-to":"2"})),i["default"].createElement("div",{className:"carousel-inner",role:"listbox"},e),i["default"].createElement("a",{className:"left carousel-control",href:"#myCarousel",role:"button","data-slide":"prev"},i["default"].createElement("span",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"}),i["default"].createElement("span",{className:"sr-only"},"Previous")),i["default"].createElement("a",{className:"right carousel-control",href:"#myCarousel",role:"button","data-slide":"next"},i["default"].createElement("span",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"}),i["default"].createElement("span",{className:"sr-only"},"Next")))}}]),t}(i["default"].Component));e.exports=s},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=(r(f),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){var n=t%2?"col-md-7 col-md-push-5":"col-md-7",r=t%2?"col-md-5 col-md-pull-7":"col-md-5";return i["default"].createElement("div",{key:"featurette-"+t},i["default"].createElement("hr",{className:"featurette-divider"}),i["default"].createElement("div",{className:"row featurette"},i["default"].createElement("div",{className:n},i["default"].createElement("h2",{className:"featurette-heading"},e.title,i["default"].createElement("br",null),i["default"].createElement("span",{className:"text-muted"},e.subtitle)),i["default"].createElement("p",{className:"lead"},e.text)),i["default"].createElement("div",{className:r},i["default"].createElement("img",{className:"featurette-image img-responsive center-block","data-src":"holder.js/500x500/auto",alt:"500x500",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MjY4N2Y3MDNhIHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUyNjg3ZjcwM2EiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg1LjEyNSIgeT0iMjYxLjEiPjUwMHg1MDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="}))))});return i["default"].createElement("div",{id:"product"},e,i["default"].createElement("hr",{className:"featurette-divider"}))}}]),t}(i["default"].Component));e.exports=s},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=(r(f),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("footer",null,i["default"].createElement("p",{className:"pull-right"},i["default"].createElement("a",{href:"#"},"回到顶部")),i["default"].createElement("p",null,"© ",this.props.text," · "))}}]),t}(i["default"].Component));e.exports=s},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),i=r(c),f=n(4),s=(r(f),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){return i["default"].createElement("div",{key:"marketing-"+t,className:"col-lg-4"},i["default"].createElement("img",{className:"img-circle",src:e.pic,alt:"Generic placeholder image",width:"140",height:"140"}),i["default"].createElement("h2",null,e.title),i["default"].createElement("p",null,e.text),i["default"].createElement("p",null,i["default"].createElement("a",{className:"btn btn-secondary",href:e.href,role:"button"},e.btn.text," »")))});return i["default"].createElement("div",{className:"row"},e)}}]),t}(i["default"].Component));e.exports=s}});