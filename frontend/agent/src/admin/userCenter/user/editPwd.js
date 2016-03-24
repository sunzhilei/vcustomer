/**
 * Created by sunzhilei on 2016/1/22.
 */

class EditPwd extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                old_pwd: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                new_pwd: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                confirm_new_pwd: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "#new_pwd"
                }
            }
        });
        if (validator.form()) {
            $.post("/admin/editPwdForAccount", $('form').serialize(), data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    alert("修改成功");
                }
            }, 'json');
        }
    }

    handleCancelClick(e) {
        e.preventDefault();
        $('form')[0].reset();
    }

    render() {
        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <br/>
                <h5 className="sub-header">开发者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">原密码</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="old_pwd" placeholder="原密码"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">新密码</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="new_pwd" name="new_pwd" placeholder="新密码"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">确认新密码</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="confirm_new_pwd" placeholder="确认新密码"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">修改</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="btn btn-default" onClick={e => this.handleCancelClick(e)}>
                            重置
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = EditPwd;