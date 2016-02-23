/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class ServiceConfigInfo extends React.Component {
    render() {
        return (
            <form onSubmit={e => {e.preventDefault();this.props.onSubmit(this.refs.type.value)}}>
                <input type="hidden" ref="type" value="config"/>
                <br/>
                <h5 className="sub-header">服务器配置（将URL和Token配置到 微信·公众平台 =》 基本配置 =》 服务器配置 中）</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">URL(服务器地址)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="wx_url"
                               className="form-control-label">{this.props.customerInfo.wx_url != '' ? this.props.customerInfo.wx_url : '通过配置公众号获取URL'}</label>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Token(令牌)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="wx_token"
                               className="form-control-label">{this.props.customerInfo.wx_token != '' ? this.props.customerInfo.wx_token : '通过配置公众号获取Token'}</label>
                    </div>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">配置公众号</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <br/>
                <h5>对接步骤</h5>
                <h6>1.复制URL和Token</h6>
                <h6>2.打开微信公众平台<a href="http://mp.weixin.qq.com">点击这里打开</a></h6>
                <h6>3.在左侧菜单找到 基本配置 =》 服务器配置 启用并填写复制的URL和Token，保存验证成功即完成对接！</h6>
            </form>
        );
    }
}

module.exports = ServiceConfigInfo;