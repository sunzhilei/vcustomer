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
    brand: '微客',
    item: [
        {text: '商家管理', href: '/admin', active: true}
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
        {field: 'id', text: '标识'},
        {field: 'account', text: '帐号'},
        {field: 'name', text: '姓名'},
        {field: 'phone', text: '电话'},
        {field: 'email', text: '邮箱'}
    ],
    Pagination:true
}
let DataList = {
    "total": "12",
    "rows": [
        {
            "id": "1",
            "account": "13888888888@163.com",
            "name": "金刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "2",
            "account": "13888888888@163.com",
            "name": "葫芦娃",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "3",
            "account": "13888888888@163.com",
            "name": "大刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "4",
            "account": "13888888888@163.com",
            "name": "大圣",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "5",
            "account": "13888888888@163.com",
            "name": "金刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "6",
            "account": "13888888888@163.com",
            "name": "葫芦娃",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "7",
            "account": "13888888888@163.com",
            "name": "大刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "8",
            "account": "13888888888@163.com",
            "name": "大圣",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "9",
            "account": "13888888888@163.com",
            "name": "金刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "10",
            "account": "13888888888@163.com",
            "name": "葫芦娃",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        }
    ]
}


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
