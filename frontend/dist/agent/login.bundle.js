webpackJsonp([2,6,8],{0:function(e,t,n){e.exports=n(248)},248:function(e,t,n){(function(e,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(160);var c=n(228),u=r(c),s=n(249),f=r(s),p={brand:{text:"微客",href:"/"},items:{right:[{text:"注册",href:"/reg"}]}},m=function(t){function n(){return o(this,n),a(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,t),l(n,[{key:"render",value:function(){return e.createElement("div",null,e.createElement(u["default"],{data:p}),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(f["default"],{url:"/login/valid"}))}}]),n}(e.Component);t.render(e.createElement(m,null),document.getElementById("content"))}).call(t,n(2),n(159))},249:function(e,t,n){(function(t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(250);var l=function(e){function n(){return r(this,n),o(this,Object.getPrototypeOf(n).apply(this,arguments))}return a(n,e),i(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=$("#agentLoginForm").validate({rules:{inputPassword:{minlength:6,maxlength:16}}});t.form()&&$("#agentLoginForm").submit()}},{key:"render",value:function(){var e=this;return t.createElement("div",{className:"container"},t.createElement("form",{id:"agentLoginForm",className:"form-signin",noValidate:"false",method:"post",action:this.props.url,onSubmit:function(t){e.handleSubmit(t)}},t.createElement("h2",{className:"form-signin-heading"},"请登录"),t.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"邮箱"),t.createElement("input",{type:"email",id:"account",name:"account",className:"form-control",placeholder:"邮箱",required:!0,autofocus:!0,defaultValue:"admin@vcustomer.com"}),t.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"密码"),t.createElement("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"密码",required:!0,defaultValue:"123456"}),t.createElement("div",{className:"checkbox"},t.createElement("label",null,t.createElement("input",{type:"checkbox",value:"remember-me"})," 记住我")),t.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"登录")))}}]),n}(t.Component);e.exports=l}).call(t,n(2))},250:function(e,t,n){var r=n(251);"string"==typeof r&&(r=[[e.id,r,""]]);var o=n(168)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(251,function(){var t=n(251);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})},251:function(e,t,n){t=e.exports=n(162)(),t.push([e.id,"body{padding-top:40px;padding-bottom:40px;background-color:#eee}.form-signin{max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox,.form-signin .form-signin-heading{margin-bottom:10px}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;height:auto;box-sizing:border-box;padding:10px;font-size:16px}.form-signin .form-control:focus{z-index:2}.form-signin input[type=email]{margin-bottom:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.form-signin input[type=button],form label.error{margin-bottom:10px}form label.error{width:100%;border-top-left-radius:0;border-top-right-radius:0;padding:5px;border:1px solid transparent;border-radius:.25rem;color:#a94442;background-color:#f2dede;border-color:#ebcccc}",""])}});