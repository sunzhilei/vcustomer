/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require("./Login.css");

import Ajax from '../JQuery/Ajax';

let Login = React.createClass({
    handleClick: function (event) {
        var validator = $("form").validate({
            rules: {
                inputPassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
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
                    <h2 className="form-signin-heading">请登录</h2>
                    <label htmlFor="inputEmail" className="sr-only">邮箱</label>
                    <input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="邮箱"
                           required
                           autofocus/>
                    <label htmlFor="inputPassword" className="sr-only">密码</label>
                    <input type="password" id="inputPassword" name="inputPassword" className="form-control"
                           placeholder="密码"/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/> 记住我
                        </label>
                    </div>
                    <input className="btn btn-lg btn-primary btn-block" type="button" value="登录"
                           onClick={this.handleClick}></input>
                    <a href="/reg">没有帐号，去注册！</a>
                </form>
            </div>
        );
    }
})

module.exports = Login;