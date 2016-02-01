/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {
    render() {
        return (
            <form>
                <h5 className="sub-header">公众号信息</h5>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">公众号名称</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="公众号名称"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">公众号类型</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label>
                                <input type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked/>
                                服务号
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label>
                                <input type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                订阅号
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label>
                                <input type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                                企业号
                            </label>
                        </div>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">运营者信息</h5>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">运营人姓名</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="运营人姓名"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">运营人电话</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="运营人电话"/>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">开发者信息（在 微信·公众平台 =》 基本配置 =》 开发者ID 中获取）</h5>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">AppID(应用ID)</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="AppID(应用ID)"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">AppSecret(应用密钥)</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="AppSecret(应用密钥)"/>
                    </div>
                </div>
                <br/>
                <h5 className="sub-header">服务器配置（将URL和Token配置到 微信·公众平台 =》 基本配置 =》 服务器配置 中）</h5>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">URL(服务器地址)</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="URL(服务器地址)"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">Token(令牌)</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Token(令牌)"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">保存</button>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = Nav;