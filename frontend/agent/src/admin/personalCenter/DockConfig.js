/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

import RadioComponent from '../../../../public/lib/Radio';

class DockConfig extends React.Component {

    getCustomerInfo() {
        $.ajax({
            url: "/admin/getCustomer",
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
            mp_name: '',
            mp_type: '',
            operator_name: '',
            operator_phone: '',
            wx_appid: '',
            wx_secret: ''
        };
    }

    componentDidMount() {
        this.getCustomerInfo();
    }

    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                mp_name: {
                    maxlength: 200
                },
                wx_appid: {
                    maxlength: 100
                },
                wx_secret: {
                    maxlength: 100
                }
            }
        });
        if (validator.form()) {
            $.post("/admin/addCustomer", $('form').serialize(), data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    alert("配置成功");
                }
            }, 'json');
        }
    }

    render() {
        let RadioList = {
            items: [
                {value: 'service', text: '服务号'},
                {value: 'subscribe', text: '订阅号'},
                {value: 'enterprise', text: '企业号'}
            ]
        };

        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <input type="hidden" name="uuid" value={this.state.uuid}/>
                <br/>
                <h5 className="sub-header">公众号信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号名称</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="mp_name" placeholder="公众号名称"
                               required autofocus value={this.state.mp_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号类型</label>
                    <div className="col-sm-10">
                        <RadioComponent name="mp_type" data={RadioList} active={this.state.mp_type}/>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">开发者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppID(应用ID)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_appid" placeholder="AppID(应用ID)"
                               required value={this.state.wx_appid}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppSecret(应用密钥)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_secret" placeholder="AppSecret(应用密钥)"
                               required value={this.state.wx_secret}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-12 form-control-label">
                        <h6>开发者信息在哪儿？</h6>
                        <h6>1.打开<a href="http://mp.weixin.qq.com">微信公众平台</a>，登录进入</h6>
                        <h6>2.在左侧菜单找到 基本配置 =》 开发者ID 复制相关信息！</h6>
                    </label>
                </div>
                <br/>
                <h5 className="sub-header">运营者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">运营人姓名</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="operator_name" placeholder="运营人姓名"
                               required value={this.state.operator_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">运营人电话</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="operator_phone" placeholder="运营人电话"
                               required value={this.state.operator_phone}/>
                    </div>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">保存</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/admin/getDockInfo" className="btn btn-default">返回</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = DockConfig;