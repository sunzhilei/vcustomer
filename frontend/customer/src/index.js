/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../../frontend/public/lib/Nav';
import DataTableComponent from '../../../frontend/public/lib/DataTable';

let NavData = {
    brand: {text: '后台管理', href: '/customer'},
    items: {
        left: [
            {text: '首页', href: '/customer', active: true},
            {text: '客户管理', href: '/customer'}
        ]
    }
}

let DataConfig = {
    columns: [
        {field: 'uuid', text: '标识'},
        {field: 'mp_name', text: '名称'},
        {field: 'mp_type', text: '类型'},
        {field: 'operator_name', text: '姓名'},
        {field: 'operator_phone', text: '电话'}
        //{field: 'wx_appid', text: '微信凭证'},
        //{field: 'wx_secret', text: '微信凭证密钥'},
        //{field: 'wx_url', text: '微客服务器地址'},
        //{field: 'wx_token', text: '微信令牌'}
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
                            <DataTableComponent config={DataConfig} url="/customer/list"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
