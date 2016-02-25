/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../public/lib/Nav';
import SidebarComponent from '../../public/lib/Sidebar';
import ShowModulesComponent from './admin/personalCenter/showModules';

let NavData = {
    brand: {text: '微客', href: '/admin'},
    items: {
        left: [
            {text: '个人中心', href: '/admin', active: true}
        ],
        right: [
            {text: '退出', href: '/loginOut'}
        ]
    }
}

let SidebarData = [
    {
        title: '配置',
        items: [
            {text: '公众号配置', href: '/admin', active: true}
        ]
    },
    {
        title: '我的配置',
        items: [
            {text: '商品分类', href: '/admin'},
            {text: '商品展示', href: '/admin'},
            {text: '套餐管理', href: '/admin'}
        ]
    }
]

class AgentIndex extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 blog-sidebar">
                            <SidebarComponent data={SidebarData}/>
                        </div>
                        <div className="col-sm-9 col-md-10 blog-main">
                            <ShowModulesComponent/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
