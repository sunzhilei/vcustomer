/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require("./Reg.css");

class Reg extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                repeatPassword: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "#password"
                }
            }
        });
        if (validator.form()) {
            this.props.onSubmit($('form').serialize());
        }
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin" noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                    <h2 className="form-signin-heading">请注册</h2>
                    <label htmlFor="account" className="sr-only">邮箱</label>
                    <input type="email" id="account" name="account" className="form-control" placeholder="邮箱"
                           required
                           autofocus/>
                    <label htmlFor="password" className="sr-only">密码</label>
                    <input type="password" id="password" name="password" className="form-control"
                           placeholder="密码"/>
                    <label htmlFor="repeatPassword" className="sr-only">确认密码</label>
                    <input type="password" id="repeatPassword" name="repeatPassword" className="form-control"
                           placeholder="确认密码"/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        注册
                    </button>
                    <a href="/login">已有帐号，去登录！</a>
                </form>
            </div>
        );
    }
}

module.exports = Reg;