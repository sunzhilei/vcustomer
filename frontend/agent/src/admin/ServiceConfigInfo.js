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
                <div className="form-group row pull-right">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">配置公众号</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h5 className="sub-header">服务器配置（将URL和Token配置到 微信·公众平台 =》 基本配置 =》 服务器配置 中）</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">URL(服务器地址)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="inputEmail3" className="form-control-label">通过配置公众号获取URL</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Token(令牌)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="inputEmail3" className="form-control-label">通过配置公众号获取Token</label>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = ServiceConfigInfo;