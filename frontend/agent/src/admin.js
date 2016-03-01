/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

//require("../css/Carousel.css");

import NavComponent from '../../public/lib/Nav';
import SidebarComponent from '../../public/lib/Sidebar';

import DockInfoComponent from './admin/personalCenter/DockInfo';
import DockConfigComponent from './admin/personalCenter/DockConfig';

import CategoryListComponent from './admin/category/list';
import AddCategoryComponent from './admin/category/add';

import ItemListComponent from './admin/item/list';
import AddItemComponent from './admin/item/add';

let NavData = {
    brand: {text: '微客', href: '/admin'},
    items: {
        right: [
            {text: '退出', href: '/loginOut'}
        ]
    }
}

let SidebarData = [
    {
        title: '配置',
        items: [
            {text: '公众号配置', href: '/admin/getDockInfo', active: true}
        ]
    },
    {
        title: '我的配置',
        items: [
            {text: '品类管理', href: '/admin/getCategoryList'},
            {text: '项目管理', href: '/admin/getItemList'},
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
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const routes = {
    path: '/',
    component: AgentIndex,
    indexRoute: {component: DockInfoComponent},
    childRoutes: [
        {path: '/admin', component: ''},

        {path: '/admin/getDockInfo', component: DockInfoComponent},
        {path: '/admin/getDockConfig', component: DockConfigComponent},

        {path: '/admin/getCategoryList', component: CategoryListComponent},
        {path: '/admin/getCategoryInfo', component: AddCategoryComponent},

        {path: '/admin/getItemList', component: ItemListComponent},
        {path: '/admin/getItemInfo', component: AddItemComponent}
    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('content'));
