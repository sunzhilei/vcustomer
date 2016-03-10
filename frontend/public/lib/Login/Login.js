/**
 * Created by sunzhilei on 2016/1/22.
 */

require("./Login.css");

class Login extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                inputPassword: {
                    minlength: 6,
                    maxlength: 16
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
                    <h2 className="form-signin-heading">请登录</h2>
                    <label htmlFor="inputEmail" className="sr-only">邮箱</label>
                    <input type="email" id="account" name="account" className="form-control" placeholder="邮箱"
                           required autofocus defaultValue="admin@vcustomer.com"/>
                    <label htmlFor="inputPassword" className="sr-only">密码</label>
                    <input type="password" id="password" name="password" className="form-control"
                           placeholder="密码" required defaultValue="123456"/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/> 记住我
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        登录
                    </button>
                </form>
            </div>
        );
    }
}

module.exports = Login;