/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require("./Reg.css");

import Ajax from '../JQuery/Ajax';

let Login = React.createClass({
    handleClick: function (event) {
        var validator = $("form").validate({
            rules: {
                inputPassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                inputRepeatPassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "#inputPassword"
                }
            }
        });
        if (validator.form()) {
            Ajax('/login/valid', $('form').serialize()).then(function (data) {
                console.log(data.result);
            }, function (errorThrown) {
                console.log(errorThrown);
            })
        }
    },
    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">请注册</h2>
                    <label htmlFor="inputEmail" className="sr-only">邮箱</label>
                    <input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="邮箱"
                           required
                           autofocus/>
                    <label htmlFor="inputPassword" className="sr-only">密码</label>
                    <input type="password" id="inputPassword" name="inputPassword" className="form-control"
                           placeholder="密码"/>
                    <label htmlFor="inputRepeatPassword" className="sr-only">确认密码</label>
                    <input type="password" id="inputRepeatPassword" name="inputRepeatPassword" className="form-control"
                           placeholder="确认密码"/>
                    <input className="btn btn-lg btn-primary btn-block" type="button" value="登录"
                           onClick={this.handleClick}></input>
                    <a href="/login">已有帐号，去登录！</a>
                </form>
            </div>
        );
    }
})

module.exports = Login;