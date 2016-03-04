/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

import SelectComponent from '../../../../../frontend/public/lib/Select';

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

    handleFileChange(e){
        e.preventDefault();
        let path = e.target.value.split('\\');
        let name = path[path.length - 1];
        $(".file-pic:after").css('content',name);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({url: "/admin/getItemList/" + e.target.value});
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
        let SelectList = {
            items: [
                {value: '0', text: '选择品类', selected: true},
                {value: '0eb6f5aa35b24dae94471b169a5da2da', text: '特色菜'},
                {value: '3e680dada5e24b408d57d0fa6e16202c', text: '热菜'},
                {value: '0b14b6fc3f05499281ad6af24d1f4826', text: '凉菜'},
                {value: '26606eca8a3b48e2a375b55146b81e1d', text: '酒水'}
            ]
        };
        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <input type="hidden" name="uuid" value={this.state.uuid}/>
                <br/>
                <h5 className="sub-header">项目信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">品类：</label>
                    <div className="col-sm-10">
                        <SelectComponent name="category_uuid" data={SelectList} onChange={e => {this.handleChange(e)}}/>
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
                               required defaultValue={this.state.price}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">图片：</label>
                    <div className="col-sm-10">
                        <label className="file">
                            <input type="file" name="pic" required onChange={e => this.handleFileChange(e)}/>
                            <span className="file-custom file-pic"></span>
                        </label>
                        <label className="form-control-label">{this.state.pic}</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">描述：</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" rows="10" name="descript" placeholder="描述"
                                  required defaultValue={this.state.descript}></textarea>
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