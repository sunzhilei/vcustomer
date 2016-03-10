/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

class DockInfo extends React.Component {

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
            wx_url: '',
            wx_token: ''
        };
    }

    componentDidMount() {
        this.getCustomerInfo();
    }

    render() {
        return (
            <form>
                <br/>
                <h5 className="sub-header">服务器配置</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">URL(服务器地址)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="wx_url"
                               className="form-control-label">{this.state.wx_url != '' ? this.state.wx_url : '通过配置公众号获取URL'}</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">Token(令牌)&nbsp;：</label>
                    <div className="col-sm-10">
                        <label id="wx_token"
                               className="form-control-label">{this.state.wx_token != '' ? this.state.wx_token : '通过配置公众号获取Token'}</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-12 form-control-label">
                        <h6>公众号与平台对接流程</h6>
                        <h6>1.复制URL和Token</h6>
                        <h6>2.打开<a href="http://mp.weixin.qq.com">微信公众平台</a>，登录进入</h6>
                        <h6>3.在左侧菜单找到 基本配置 =》 服务器配置</h6>
                        <h6>4.启用并填写复制的URL和Token，保存,验证成功即完成对接！</h6>
                    </label>
                </div>
                <br/>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <Link to="/admin/getDockConfig" className="btn btn-primary">配置公众号</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = DockInfo;