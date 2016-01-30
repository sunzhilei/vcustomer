/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../../frontend/public/lib/Nav';
import SidebarComponent from '../../../frontend/public/lib/Sidebar';
import OperationAreaComponent from '../../../frontend/public/lib/OperationArea';
import Ajax from '../../../frontend/public/lib/JQuery/Ajax';

let NavData = {
    brand: '微客客户管理系统',
    item: [
        {text: '客户管理', href: '/admin', active: true}
    ]
}

let NavList = [
    [
        {text: '功能1', href: '/admin', active: true},
        {text: '功能1', href: '/admin'},
        {text: '功能1', href: '/admin'},
        {text: '功能1', href: '/admin'}
    ],
    [
        {text: '功能2', href: '/admin'},
        {text: '功能2', href: '/admin'}
    ],
    [
        {text: '功能3', href: '/admin'},
        {text: '功能3', href: '/admin'},
        {text: '功能3', href: '/admin'}
    ]
]

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
    Pagination: true
}

let DataList
Ajax.get('/customer/list', "").then(function (data) {
    console.log(data.total);
    console.log(data.rows);
    DataList = data;
}, function (errorThrown) {
    console.log(errorThrown);
})

//let DataList = {
//    "total": "12",
//    "rows": [
//        {
//            "id": "1",
//            "account": "13888888888@163.com",
//            "name": "金刚",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "2",
//            "account": "13888888888@163.com",
//            "name": "葫芦娃",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "3",
//            "account": "13888888888@163.com",
//            "name": "大刚",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "4",
//            "account": "13888888888@163.com",
//            "name": "大圣",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "5",
//            "account": "13888888888@163.com",
//            "name": "金刚",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "6",
//            "account": "13888888888@163.com",
//            "name": "葫芦娃",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "7",
//            "account": "13888888888@163.com",
//            "name": "大刚",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "8",
//            "account": "13888888888@163.com",
//            "name": "大圣",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "9",
//            "account": "13888888888@163.com",
//            "name": "金刚",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        },
//        {
//            "id": "10",
//            "account": "13888888888@163.com",
//            "name": "葫芦娃",
//            "phone": "13888888888",
//            "email": "13888888888@163.com"
//        }
//    ]
//}


class AgentIndex extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <div className="container-fluid">
                    <div className="row">
                        <SidebarComponent data={NavList}/>
                        <OperationAreaComponent config={DataConfig} data={DataList}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.body);
