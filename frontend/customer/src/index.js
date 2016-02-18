/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../../frontend/public/lib/Nav';
import TableComponent from '../../../frontend/public/lib/Table';

let NavData = {
    brand: '后台管理',
    items: [
        {text: '首页', href: '/admin', active: true},
        {text: '客户管理', href: '/customerList'}
    ]
}

let DataConfig = {
    "columns": [
        {field: 'uuid', text: '标识'},
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
                            <TableComponent config={DataConfig} url="/customer/list"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
