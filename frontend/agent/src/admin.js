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
    brand: '微客',
    items: [
        {text: '个人中心', href: '/admin', active: true}
    ]
}

let SidebarData = [
    {
        title: '配置',
        items: [
            {text: '公众号配置', href: '/admin', active: true}
        ]
    },
    {
        title: '信息中心',
        items: [
            {text: '公告', href: '/admin'},
            {text: '站内消息', href: '/admin'},
            {text: '技术支持', href: '/admin'}
        ]
    }
]

class AgentIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            type: 'info'
        }
    }

    handleSubmit(type) {
        this.setState({type: type});
    }

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
                            <ShowModulesComponent type={this.state.type} onSubmit={type => this.handleSubmit(type)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
