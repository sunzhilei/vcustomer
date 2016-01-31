/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../../frontend/public/lib/Nav';
import SidebarComponent from '../../../frontend/public/lib/Sidebar';
import OperationAreaComponent from '../../../frontend/public/lib/OperationArea';

let NavData = {
    brand: '微客客户管理系统',
    item: [
        {text: '客户管理', href: '/admin', active: true}
    ]
}

let DataConfig = {
    "columns": [
        {field: 'shop_name', text: '商店名称'},
        {field: 'operator_name', text: '运营人姓名'},
        {field: 'operator_phone', text: '运营人电话'},
        {field: 'wx_appid', text: '微信凭证'},
        {field: 'wx_secret', text: '微信凭证密钥'},
        {field: 'wx_accesstoken', text: '微信访问令牌'},
        {field: 'wx_url', text: '微客服务器地址'},
        {field: 'wx_token', text: '微信令牌'}
    ],
    pagination: true
}

class AgentIndex extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 blog-main">
                            <OperationAreaComponent config={DataConfig} url="/customer/list"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
