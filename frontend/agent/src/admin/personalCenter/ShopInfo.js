/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class ShopInfo extends React.Component {
    render() {
        return (
            <form onSubmit={e => {e.preventDefault();this.props.onSubmit('info')}}>
                <br/>
                <h5 className="sub-header">公众号信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号名称</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="mp_name" placeholder="公众号名称" defaultValue={this.props.customerInfo.mp_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号类型</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label className="radio-inline">
                                <input type="radio" name="mp_type" defaultValue="service" defaultChecked/>
                                服务号
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="radio-inline">
                                <input type="radio" name="mp_type" defaultValue="subscribe"/>
                                订阅号
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="radio-inline">
                                <input type="radio" name="mp_type" defaultValue="enterprise"/>
                                企业号
                            </label>
                        </div>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">开发者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppID(应用ID)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_appid" placeholder="AppID(应用ID)" defaultValue={this.props.customerInfo.wx_appid}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppSecret(应用密钥)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_secret" placeholder="AppSecret(应用密钥)" defaultValue={this.props.customerInfo.wx_secret}/>
                    </div>
                </div>
                <h6>开发者信息在哪儿？</h6>
                <h6>1.打开<a href="http://mp.weixin.qq.com">微信公众平台</a>，登录进入</h6>
                <h6>2.在左侧菜单找到 基本配置 =》 开发者ID 复制相关信息！</h6>
                <br/>
                <h5 className="sub-header">运营者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">运营人姓名</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="operator_name" placeholder="运营人姓名" defaultValue={this.props.customerInfo.operator_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">运营人电话</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="operator_phone" placeholder="运营人电话" defaultValue={this.props.customerInfo.operator_phone}/>
                    </div>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">生成服务器配置</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = ShopInfo;