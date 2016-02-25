/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import RadioComponent from '../../../../public/lib/Radio';

class ShopInfo extends React.Component {
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
            this.props.onSubmitConfig($('form').serialize());
        }
    }

    render() {
        let DataConfig = {
            active: this.props.customer.mp_type,
            items: [
                {value: 'service', text: '服务号'},
                {value: 'subscribe', text: '订阅号'},
                {value: 'enterprise', text: '企业号'}
            ]
        };

        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <input type="hidden" name="uuid" defaultValue={this.props.customer.uuid}/>
                <br/>
                <h5 className="sub-header">公众号信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号名称</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="mp_name" placeholder="公众号名称"
                               required autofocus defaultValue={this.props.customer.mp_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号类型</label>
                    <div className="col-sm-10">
                        <RadioComponent name="mp_type" config={DataConfig}/>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">开发者信息</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppID(应用ID)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_appid" placeholder="AppID(应用ID)"
                               required defaultValue={this.props.customer.wx_appid}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">AppSecret(应用密钥)</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="wx_secret" placeholder="AppSecret(应用密钥)"
                               required defaultValue={this.props.customer.wx_secret}/>
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
                               required defaultValue={this.props.customer.operator_name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">运营人电话</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="operator_phone" placeholder="运营人电话"
                               required defaultValue={this.props.customer.operator_phone}/>
                    </div>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">生成服务器配置</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-default"
                                onClick={e => {e.preventDefault();this.props.onReturnInfo()}}>返回
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = ShopInfo;