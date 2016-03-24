/**
 * Created by sunzhilei on 2016/1/7.
 */

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../../frontend/agent/css/admin.css"

import { Router, Route, Link, browserHistory } from 'react-router'

import NavComponent from '../../public/lib/Nav';

import CommondityIndexComponent from './admin/commodity/index';
import CategoryListComponent from './admin/commodity/category/list';
import AddCategoryComponent from './admin/commodity/category/add';
import ItemListComponent from './admin/commodity/item/list';
import AddItemComponent from './admin/commodity/item/add';

import UserCenterIndexComponent from './admin/userCenter/index';
import UserInfoComponent from './admin/userCenter/user/info';
import EditPwdComponent from './admin/userCenter/user/editPwd';
import DockInfoComponent from './admin/userCenter/dock/info';
import DockEditComponent from './admin/userCenter/dock/edit';

//媒体库
import FileLibraryComponent from '../../public/lib/FileLibrary';
class MediaLibraryComponent extends React.Component {
    render() {
        return (
            <FileLibraryComponent modalState={true}/>
        )
    }
}


let NavData = {
    brand: {text: '微客', href: '/admin'},
    items: {
        right: [
            {text: '商品管理', href: '/admin/commondity', link: true},
            //{text: '素材库', href: '/admin/mediaLibrary', link: true},
            {text: '个人中心', href: '/admin/userCenter', link: true},
            {text: '退出', href: '/loginOut'}
        ]
    }
}

class AgentIndexComponent extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 blog-main">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/admin" component={AgentIndexComponent}>

            <Route path="commondity" component={CommondityIndexComponent}>
                <Route path="getCategoryList" component={CategoryListComponent}/>
                <Route path="addCategoryInfo" component={AddCategoryComponent}/>
                <Route path="editCategoryInfo" component={AddCategoryComponent}/>

                <Route path="getItemList" component={ItemListComponent}/>
                <Route path="addItemInfo" component={AddItemComponent}/>
                <Route path="editItemInfo" component={AddItemComponent}/>
            </Route>

            <Route path="userCenter" component={UserCenterIndexComponent}>
                <Route path="UserInfo" component={UserInfoComponent}/>

                <Route path="EditPwd" component={EditPwdComponent}/>

                <Route path="DockInfo" component={DockInfoComponent}/>
                <Route path="DockEdit" component={DockEditComponent}/>
            </Route>

            <Route path="mediaLibrary" component={MediaLibraryComponent}/>
        </Route>
    </Router>,
    document.getElementById('content'));
