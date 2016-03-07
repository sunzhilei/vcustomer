/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import HomeIndexComponent from './home/index';

class ClientIndex extends React.Component {
    render() {
        return (
            <div className="weui_tab">
                <div className="weui_tab_bd">
                    {this.props.children}
                </div>
                <div className="weui_tabbar">
                    <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
                        <div className="weui_tabbar_icon">
                            <img src="../../../frontend/client/img/icon_nav_button.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">首页</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="../../../frontend/client/img/icon_nav_article.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">排号</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="../../../frontend/client/img/icon_nav_msg.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">点餐</p>
                    </a>
                    <a href="javascript:;" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="../../../frontend/client/img/icon_nav_cell.png" alt=""/>
                        </div>
                        <p className="weui_tabbar_label">我</p>
                    </a>
                </div>
            </div>
        );
    }
}

const routes = {
    path: '/',
    component: ClientIndex,
    indexRoute: {component: HomeIndexComponent},
    childRoutes: [
        {path: '/client', component: HomeIndexComponent},
        {path: '/client/order', component: HomeIndexComponent},
        {path: '/client/reserve', component: HomeIndexComponent},
        {path: '/client/my', component: HomeIndexComponent}
    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('content'));