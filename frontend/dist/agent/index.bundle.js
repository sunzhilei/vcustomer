webpackJsonp([1],{0:function(e,t,n){e.exports=n(230)},217:function(e,t,n){(function(t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(160),i=function(e){function n(){return a(this,n),r(this,Object.getPrototypeOf(n).apply(this,arguments))}return l(n,e),o(n,[{key:"render",value:function(){return this.props.items.left?t.createElement("ul",{className:"nav navbar-nav pull-left"},this.props.items.left.map(function(e,n){return e.link?t.createElement("li",{key:"nav-"+n},t.createElement(c.Link,{className:"nav-link",to:e.href,"data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false","aria-controls":"bs-example-navbar-collapse-1"},e.text)):t.createElement("li",{key:"nav-"+n},t.createElement("a",{className:"nav-link",href:e.href,"data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false","aria-controls":"bs-example-navbar-collapse-1"},e.text))})):t.createElement("div",null)}}]),n}(t.Component),s=function(e){function n(){return a(this,n),r(this,Object.getPrototypeOf(n).apply(this,arguments))}return l(n,e),o(n,[{key:"render",value:function(){return this.props.items.right?t.createElement("ul",{className:"nav navbar-nav pull-right"},this.props.items.right.map(function(e,n){return e.link?t.createElement("li",{key:"nav-"+n},t.createElement(c.Link,{to:e.href,"data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false","aria-controls":"bs-example-navbar-collapse-1"},e.text)):t.createElement("li",{key:"nav-"+n},t.createElement("a",{href:e.href,"data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false","aria-controls":"bs-example-navbar-collapse-1"},e.text))})):t.createElement("div",null)}}]),n}(t.Component),u=function(e){function n(){return a(this,n),r(this,Object.getPrototypeOf(n).apply(this,arguments))}return l(n,e),o(n,[{key:"render",value:function(){return t.createElement("nav",{id:"navbar-example",className:"navbar navbar-default navbar-fixed-top navbar-inverse"},t.createElement("div",{className:"container-fluid"},t.createElement("div",{className:"navbar-header"},t.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},t.createElement("span",{className:"sr-only"},"Toggle navigation"),t.createElement("span",{className:"icon-bar"}),t.createElement("span",{className:"icon-bar"}),t.createElement("span",{className:"icon-bar"})),t.createElement("a",{className:"navbar-brand",href:this.props.data.brand.href},this.props.data.brand.text)),t.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},t.createElement(i,{items:this.props.data.items}),t.createElement(s,{items:this.props.data.items}))))}}]),n}(t.Component);e.exports=u}).call(t,n(2))},230:function(e,t,n){(function(e,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(217),s=a(i),u=n(231),p=a(u),f=n(232),m=a(f),b=n(233),d=a(b),h=n(234),y=a(h),v={brand:{text:"微客",href:"/"},items:{right:[{text:"首页",href:"#home",active:!0},{text:"产品",href:"#product"},{text:"团队",href:"#about"},{text:"管理",href:"/admin"}]}},g=[{title:"技术驱动",text:"互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！",active:!0,btn:{text:"了解更多",href:"/"}},{title:"任性偏执",text:"细节成就完美，兴趣成就梦想，偏执成就价值观！",btn:{text:"了解更多",href:"/"}},{title:"服务宗旨",text:"市场为王，设计可以提高用户体验，技术可以助力企业增值！",btn:{text:"了解更多",href:"/"}}],E=[{pic:"../../../frontend/agent/img/technology.jpg",title:"技术驱动",text:"互联网产品设计思想满足当下需求，互联网前沿技术成就非凡体验！",active:!0,btn:{text:"了解更多",href:"/"}},{pic:"../../../frontend/agent/img/paranoid.jpg",title:"任性偏执",text:"细节成就完美，兴趣成就梦想，偏执成就价值观！",btn:{text:"了解更多",href:"/"}},{pic:"../../../frontend/agent/img/service.jpg",title:"服务宗旨",text:"市场为王，设计可以提高用户体验，技术可以助力企业增值！",btn:{text:"了解更多",href:"/"}}],x=[{title:"订餐系统",subtitle:"敬请期待...",text:"支持店内自助下单， 线上和线下支付， 提供餐饮， 完成交易"},{title:"网上商店",subtitle:"敬请期待...",text:"支持线上自助选购， 线上和线下支付， 配送货物， 完成交易"},{title:"移动官网",subtitle:"正常营业",text:"支持PC、移动响应式网站， 个性定制， 运营运维服务"}],w=function(t){function n(){return r(this,n),l(this,Object.getPrototypeOf(n).apply(this,arguments))}return o(n,t),c(n,[{key:"render",value:function(){return e.createElement("div",null,e.createElement(s["default"],{data:v}),e.createElement("div",{id:"home",className:"body"},e.createElement(p["default"],{data:g}),e.createElement("div",{className:"container marketing"},e.createElement(m["default"],{data:E}),e.createElement(d["default"],{data:x}),e.createElement(y["default"],{text:"2016 微客, Inc."}))))}}]),n}(e.Component);t.render(e.createElement(w,null),document.getElementById("content"))}).call(t,n(2),n(159))},231:function(e,t,n){(function(t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){function o(){return n(this,o),a(this,Object.getPrototypeOf(o).apply(this,arguments))}return r(o,e),l(o,[{key:"render",value:function(){var e=this.props.data.map(function(e,n){var a=e.active?"carousel-item item active":"carousel-item item";return t.createElement("div",{key:"carousel-"+n,className:a},t.createElement("div",{className:"container"},t.createElement("div",{className:"carousel-caption text-left"},t.createElement("h1",null,e.title),t.createElement("p",null,e.text),t.createElement("p",null,t.createElement("a",{className:"btn btn-lg btn-primary",href:e.btn.href,role:"button"},e.btn.text)))))});return t.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},t.createElement("ol",{className:"carousel-indicators"},t.createElement("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),t.createElement("li",{"data-target":"#myCarousel","data-slide-to":"1"}),t.createElement("li",{"data-target":"#myCarousel","data-slide-to":"2"})),t.createElement("div",{className:"carousel-inner",role:"listbox"},e),t.createElement("a",{className:"left carousel-control",href:"#myCarousel",role:"button","data-slide":"prev"},t.createElement("span",{className:"glyphicon glyphicon-chevron-left","aria-hidden":"true"}),t.createElement("span",{className:"sr-only"},"上一张")),t.createElement("a",{className:"right carousel-control",href:"#myCarousel",role:"button","data-slide":"next"},t.createElement("span",{className:"glyphicon glyphicon-chevron-right","aria-hidden":"true"}),t.createElement("span",{className:"sr-only"},"下一张")))}}]),o}(t.Component);e.exports=o}).call(t,n(2))},232:function(e,t,n){(function(t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){function o(){return n(this,o),a(this,Object.getPrototypeOf(o).apply(this,arguments))}return r(o,e),l(o,[{key:"render",value:function(){var e=this.props.data.map(function(e,n){return t.createElement("div",{key:"marketing-"+n,className:"col-lg-4"},t.createElement("img",{className:"img-circle",src:e.pic,alt:"Generic placeholder image",width:"140",height:"140"}),t.createElement("h2",null,e.title),t.createElement("p",null,e.text),t.createElement("p",null,t.createElement("a",{className:"btn btn-default",href:e.href,role:"button"},e.btn.text," »")))});return t.createElement("div",{className:"row"},e)}}]),o}(t.Component);e.exports=o}).call(t,n(2))},233:function(e,t,n){(function(t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){function o(){return n(this,o),a(this,Object.getPrototypeOf(o).apply(this,arguments))}return r(o,e),l(o,[{key:"render",value:function(){var e=this.props.data.map(function(e,n){var a=n%2?"col-md-7 col-md-push-5":"col-md-7",r=n%2?"col-md-5 col-md-pull-7":"col-md-5";return t.createElement("div",{key:"featurette-"+n},t.createElement("hr",{className:"featurette-divider"}),t.createElement("div",{className:"row featurette"},t.createElement("div",{className:a},t.createElement("h2",{className:"featurette-heading"},e.title,t.createElement("br",null),t.createElement("span",{className:"text-muted"},e.subtitle)),t.createElement("p",{className:"lead"},e.text)),t.createElement("div",{className:r},t.createElement("img",{className:"featurette-image img-responsive center-block","data-src":"holder.js/500x500/auto",alt:"500x500",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MjY4N2Y3MDNhIHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUyNjg3ZjcwM2EiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg1LjEyNSIgeT0iMjYxLjEiPjUwMHg1MDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="}))))});return t.createElement("div",{id:"product"},e,t.createElement("hr",{className:"featurette-divider"}))}}]),o}(t.Component);e.exports=o}).call(t,n(2))},234:function(e,t,n){(function(t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){function o(){return n(this,o),a(this,Object.getPrototypeOf(o).apply(this,arguments))}return r(o,e),l(o,[{key:"render",value:function(){return t.createElement("footer",null,t.createElement("p",{className:"pull-right"},t.createElement("a",{href:"#"},"回到顶部")),t.createElement("p",null,"© ",this.props.text," · "))}}]),o}(t.Component);e.exports=o}).call(t,n(2))}});