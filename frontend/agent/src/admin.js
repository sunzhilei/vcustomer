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

let DataList = {
    "columns": [
        {field: 'id'},
        {field: 'account'},
        {field: 'name'},
        {field: 'phone'},
        {field: 'email'}
    ],
    "total": "4",
    "rows": [
        {
            "id": "18228",
            "account": "13888888888@163.com",
            "name": "金刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "18229",
            "account": "13888888888@163.com",
            "name": "葫芦娃",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "18231",
            "account": "13888888888@163.com",
            "name": "大刚",
            "phone": "13888888888",
            "email": "13888888888@163.com"
        },
        {
            "id": "18233",
            "account": "13888888888@163.com",
            "name": "大圣",
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
                        <OperationAreaComponent data={DataList}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.body);
