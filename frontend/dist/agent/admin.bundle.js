webpackJsonp([4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=r(s),m=n(20),p=r(m),d=n(99),b=r(d),h=n(92),y=r(h),E={brand:"微客",items:[{text:"个人中心",href:"/admin",active:!0}]},v=[{title:"配置",items:[{text:"公众号配置",href:"/admin",active:!0}]},{title:"信息中心",items:[{text:"公告",href:"/admin"},{text:"站内消息",href:"/admin"},{text:"技术支持",href:"/admin"}]}],w=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("div",null,f["default"].createElement(p["default"],{data:E}),f["default"].createElement("div",{className:"container-fluid"},f["default"].createElement("div",{className:"row"},f["default"].createElement("div",{className:"col-sm-3 col-md-2 blog-sidebar"},f["default"].createElement(b["default"],{data:v})),f["default"].createElement("div",{className:"col-sm-9 col-md-10 blog-main"},f["default"].createElement(y["default"],null)))))}}]),t}(f["default"].Component);i["default"].render(f["default"].createElement(w,null),document.getElementById("content"))},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=(r(s),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("ul",{className:"nav navbar-nav pull-left"},this.props.items.map(function(e,t){return f["default"].createElement("li",{key:"nav-"+t,className:"nav-item"},f["default"].createElement("a",{className:"nav-link",href:e.href},e.text))}))}}]),t}(f["default"].Component)),m=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("nav",{id:"navbar-example",className:"navbar navbar-dark navbar-fixed-top bg-inverse"},f["default"].createElement("a",{href:"/",className:"navbar-brand"},this.props.data.brand),f["default"].createElement(i,{items:this.props.data.items}))}}]),t}(f["default"].Component);e.exports=m},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=(r(s),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this;return f["default"].createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onSubmit(e.refs.type.value)}},f["default"].createElement("input",{type:"hidden",ref:"type",value:"config"}),f["default"].createElement("br",null),f["default"].createElement("h5",{className:"sub-header"},"服务器配置（将URL和Token配置到 微信·公众平台 =》 基本配置 =》 服务器配置 中）"),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"URL(服务器地址) ："),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("label",{id:"wx_url",className:"form-control-label"},""!=this.props.customerInfo.wx_url?this.props.customerInfo.wx_url:"通过配置公众号获取URL"))),f["default"].createElement("br",null),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"Token(令牌) ："),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("label",{id:"wx_token",className:"form-control-label"},""!=this.props.customerInfo.wx_token?this.props.customerInfo.wx_token:"通过配置公众号获取Token"))),f["default"].createElement("br",null),f["default"].createElement("div",{className:"form-group row pull-right"},f["default"].createElement("div",{className:"col-sm-offset-2 col-sm-10"},f["default"].createElement("button",{type:"submit",className:"btn btn-primary"},"配置公众号"),"      ")),f["default"].createElement("br",null),f["default"].createElement("h5",null,"对接步骤"),f["default"].createElement("h6",null,"1.复制URL和Token"),f["default"].createElement("h6",null,"2.打开微信公众平台",f["default"].createElement("a",{href:"http://mp.weixin.qq.com"},"点击这里打开")),f["default"].createElement("h6",null,"3.在左侧菜单找到 基本配置 =》 服务器配置 启用并填写复制的URL和Token，保存验证成功即完成对接！"))}}]),t}(f["default"].Component));e.exports=i},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=(r(s),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this;return f["default"].createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onSubmit(e.refs.type.value)}},f["default"].createElement("input",{type:"hidden",ref:"type",value:"info"}),f["default"].createElement("br",null),f["default"].createElement("h5",{className:"sub-header"},"公众号信息"),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"公众号名称"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("input",{type:"text",className:"form-control",name:"mp_name",placeholder:"公众号名称",value:this.props.customerInfo.mp_name}))),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"公众号类型"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("div",{className:"radio"},f["default"].createElement("label",{className:"radio-inline"},f["default"].createElement("input",{type:"radio",name:"mp_type",value:"service",defaultChecked:!0}),"服务号"),"    ",f["default"].createElement("label",{className:"radio-inline"},f["default"].createElement("input",{type:"radio",name:"mp_type",value:"subscribe"}),"订阅号"),"    ",f["default"].createElement("label",{className:"radio-inline"},f["default"].createElement("input",{type:"radio",name:"mp_type",value:"enterprise"}),"企业号")))),f["default"].createElement("br",null),f["default"].createElement("h5",{className:"sub-header"},"运营者信息"),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"运营人姓名"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("input",{type:"text",className:"form-control",name:"operator_name",placeholder:"运营人姓名",value:this.props.customerInfo.operator_name}))),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"运营人电话"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("input",{type:"text",className:"form-control",name:"operator_phone",placeholder:"运营人电话",value:this.props.customerInfo.operator_phone}))),f["default"].createElement("br",null),f["default"].createElement("h5",{className:"sub-header"},"开发者信息（在 微信·公众平台 =》 基本配置 =》 开发者ID 中获取）"),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"AppID(应用ID)"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("input",{type:"text",className:"form-control",name:"wx_appid",placeholder:"AppID(应用ID)",value:this.props.customerInfo.wx_appid}))),f["default"].createElement("div",{className:"form-group row"},f["default"].createElement("label",{className:"col-sm-2 form-control-label"},"AppSecret(应用密钥)"),f["default"].createElement("div",{className:"col-sm-10"},f["default"].createElement("input",{type:"text",className:"form-control",name:"wx_secret",placeholder:"AppSecret(应用密钥)",value:this.props.customerInfo.wx_secret}))),f["default"].createElement("br",null),f["default"].createElement("div",{className:"form-group row pull-right"},f["default"].createElement("div",{className:"col-sm-offset-2 col-sm-10"},f["default"].createElement("button",{type:"submit",className:"btn btn-primary"},"生成服务器配置"),"      ")))}}]),t}(f["default"].Component));e.exports=i},92:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=(r(s),n(90)),m=r(i),p=n(91),d=r(p),b=function(e){function t(){a(this,t);var e=l(this,Object.getPrototypeOf(t).call(this));return e.getCustomerInfo("info"),e}return o(t,e),u(t,[{key:"getCustomerInfo",value:function(e){var t=this;$.ajax({url:"/admin/personalCenter/customerInfo",dataType:"json",async:!1,success:function(n){n.result?(t.state={type:e,customerInfo:n.custom.row},t.setState({type:e,customerInfo:n.custom.row})):alert(n.msg)}})}}]),u(t,[{key:"handleSubmit",value:function(e){this.getCustomerInfo(e)}},{key:"render",value:function(){var e=this;return"info"==this.state.type?f["default"].createElement(m["default"],{customerInfo:this.state.customerInfo,onSubmit:function(t){return e.handleSubmit(t)}}):f["default"].createElement(d["default"],{customerInfo:this.state.customerInfo,onSubmit:function(t){return e.handleSubmit(t)}})}}]),t}(f["default"].Component);e.exports=b},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),s=n(4),i=(r(s),function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("div",null,this.props.data.map(function(e,t){return f["default"].createElement("div",{key:"sidebar-"+t,className:"list-group"},f["default"].createElement("br",null),f["default"].createElement("a",{href:"#",className:"list-group-item disabled"},e.title),e.items.map(function(e,t){var n=e.active?"list-group-item active":"list-group-item";return f["default"].createElement("a",{href:e.href,key:"sidebar-item-"+t,className:n},e.text)}))}))}}]),t}(f["default"].Component));e.exports=i}});