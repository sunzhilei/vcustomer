/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

class AddItem extends React.Component {

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

    handleClick(e) {
        e.preventDefault();
        document.getElementById("dropdown-value").value = e.target.id;
        document.getElementById("dropdown-text").innerText = e.target.innerText;
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
            $.post("/admin/addItem", $('form').serialize(), data => {
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
                <h5 className="sub-header">项目信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">品类：</label>
                    <div className="col-sm-10">
                        <div className="dropdown">
                            <input id="dropdown-value" type="hidden" name="category_uuid" value=""/>
                            <button id="dropdown-text" className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                选择品类
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <button className="dropdown-item" type="button" id="0eb6f5aa35b24dae94471b169a5da2da"
                                        onClick={this.handleClick}>
                                    特色菜
                                </button>
                                <button className="dropdown-item" type="button" id="3e680dada5e24b408d57d0fa6e16202c"
                                        onClick={this.handleClick}>
                                    热菜
                                </button>
                                <button className="dropdown-item" type="button" id="0b14b6fc3f05499281ad6af24d1f4826"
                                        onClick={this.handleClick}>
                                    凉菜
                                </button>
                                <button className="dropdown-item" type="button" id="26606eca8a3b48e2a375b55146b81e1d"
                                        onClick={this.handleClick}>
                                    酒水
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">名称：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" placeholder="名称"
                               required autofocus defaultValue={this.state.name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">价格：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="price" placeholder="价格"
                               required autofocus defaultValue={this.state.price}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">图片：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="pic" placeholder="图片"
                               required autofocus defaultValue={this.state.pic}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">描述：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="descript" placeholder="描述"
                               required autofocus defaultValue={this.state.descript}/>
                    </div>
                </div>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">保存</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/admin/getItemList" className="btn btn-secondary">返回</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = AddItem;