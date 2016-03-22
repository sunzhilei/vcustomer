/**
 * Created by sunzhilei on 2016/1/7.
 */

import '../../../node_modules/weui/dist/style/weui.min.css'
import '../../../frontend/client/css/weui.client.css'

import { Router, Link, browserHistory } from 'react-router'

import HomeIndexComponent from './home/index';
import DescComponent from './home/desc';

//import MessageIndexComponent from './message/index';
//import FindIndexComponent from './find/index';
//import CenterIndexComponent from './center/index';

class ClientIndex extends React.Component {
    render() {
        return (
            <div className="weui_tab">
                <div className="weui_tab_bd">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

//<div className="weui_tabbar">
//    <Link to="/client/home" href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
//        <div className="weui_tabbar_icon">
//            <img src="../../../frontend/client/img/icon_nav_button.png" alt=""/>
//        </div>
//        <p className="weui_tabbar_label">首页</p>
//    </Link>
//    <Link to="/client/message" href="javascript:;" className="weui_tabbar_item">
//        <div className="weui_tabbar_icon">
//            <img src="../../../frontend/client/img/icon_nav_article.png" alt=""/>
//        </div>
//        <p className="weui_tabbar_label">消息</p>
//    </Link>
//    <Link to="/client/find" href="javascript:;" className="weui_tabbar_item">
//        <div className="weui_tabbar_icon">
//            <img src="../../../frontend/client/img/icon_nav_msg.png" alt=""/>
//        </div>
//        <p className="weui_tabbar_label">发现</p>
//    </Link>
//    <Link to="/client/center" href="javascript:;" className="weui_tabbar_item">
//        <div className="weui_tabbar_icon">
//            <img src="../../../frontend/client/img/icon_nav_cell.png" alt=""/>
//        </div>
//        <p className="weui_tabbar_label">我</p>
//    </Link>
//</div>

const routes = {
    path: '/:account_uuid',
    component: ClientIndex,
    indexRoute: {component: HomeIndexComponent},
    childRoutes: [
        {path: '/client/:account_uuid', component: HomeIndexComponent},
        {path: '/client/home', component: HomeIndexComponent},
        {path: '/client/home/desc/:uuid', component: DescComponent},

        //{path: '/client/message', component: MessageIndexComponent},
        //{path: '/client/find', component: FindIndexComponent},
        //{path: '/client/center', component: CenterIndexComponent}
    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('content'));