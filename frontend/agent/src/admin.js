/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../css/Carousel.css");

import NavComponent from '../../../frontend/public/lib/Nav';
import SidebarComponent from '../../../frontend/public/lib/Sidebar';
import ServiceConfigInfoComponent from '../../../frontend/agent/src/admin/ServiceConfigInfo';
import ShopInfoComponent from '../../../frontend/agent/src/admin/ShopInfo';

let NavData = {
    brand: '微客',
    items: [
        {text: '个人中心', href: '/admin', active: true}
    ]
}

let NavList = [
    [
        {text: '店铺信息', href: '/admin', active: true},
        {text: '修改密码', href: '/admin'}
    ],
    [
        {text: '站内消息', href: '/admin'},
        {text: '工单管理', href: '/admin'}
    ]
]

class ShowModules extends React.Component {
    render() {
        if (this.props.type == 'info') {
            return <ServiceConfigInfoComponent onSubmit={type => this.props.onSubmit(type)}/>;
        } else {
            return <ShopInfoComponent onSubmit={type => this.props.onSubmit(type)}/>;
        }
    }
}
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
                            <SidebarComponent data={NavList}/>
                        </div>
                        <div className="col-sm-9 col-md-10 blog-main">
                            <ShowModules type={this.state.type} onSubmit={type => this.handleSubmit(type)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
