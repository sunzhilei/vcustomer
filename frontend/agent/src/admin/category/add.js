/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

class AddCategory extends React.Component {

    getCustomerInfo() {
        $.ajax({
            url: "/admin/getCategory",
            dataType: "json",
            async: true,
            success: data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    if (data.custom.row) {
                        this.setState(data.custom.row);
                    }
                }
            }
        });
    }

    constructor() {
        super();
        this.state = {
            uuid: '',
            name: ''
        };
    }

    componentDidMount() {
        this.getCustomerInfo();
    }

    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                name: {
                    maxlength: 200
                }
            }
        });
        if (validator.form()) {
            $.post("/admin/addCategory", $('form').serialize(), data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    alert("增加成功");
                }
            }, 'json');
        }
    }

    render() {
        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <input type="hidden" name="uuid" value={this.state.uuid}/>
                <br/>
                <h5 className="sub-header">品类信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">名称：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" placeholder="名称"
                               required autofocus defaultValue={this.state.name}/>
                    </div>
                </div>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">保存</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/admin/getCategoryList" className="btn btn-secondary">返回</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = AddCategory;