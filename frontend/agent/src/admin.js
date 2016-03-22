/**
 * Created by sunzhilei on 2016/1/7.
 */

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../../frontend/agent/css/admin.css"

import { Router, browserHistory } from 'react-router'

import NavComponent from '../../public/lib/Nav';

//公共删除组件
import DelComponent from './admin/del';

import DockInfoComponent from './admin/personalCenter/DockInfo';
import DockConfigComponent from './admin/personalCenter/DockConfig';

import CategoryListComponent from './admin/category/list';
import AddCategoryComponent from './admin/category/add';

import ItemListComponent from './admin/item/list';
import AddItemComponent from './admin/item/add';

import UserCenterInfoComponent from './admin/userCenter/info';

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
            //{text: '公众号配置', href: '/admin/getDockInfo', link: true},
            {text: '商品分类', href: '/admin/getCategoryList', link: true},
            {text: '商品管理', href: '/admin/getItemList', link: true},
            {text: '素材库', href: '/mediaLibrary', link: true},
            {text: '个人中心', href: '/admin/userCenter', link: true},
            {text: '退出', href: '/loginOut'}
        ]
    }
}

class AgentIndex extends React.Component {
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

const routes = {
    path: '/',
    component: AgentIndex,
    childRoutes: [
        {path: '/admin', component: ''},
        {path: '/mediaLibrary', component: MediaLibraryComponent},

        {path: '/admin/getDockInfo', component: DockInfoComponent},
        {path: '/admin/getDockConfig', component: DockConfigComponent},

        {path: '/admin/getCategoryList', component: CategoryListComponent},
        {path: '/admin/getCategoryInfo', component: AddCategoryComponent},
        {path: '/admin/editCategoryInfo', component: AddCategoryComponent},
        {path: '/admin/delCategoryInfo', component: DelComponent},

        {path: '/admin/getItemList', component: ItemListComponent},
        {path: '/admin/getItemInfo', component: AddItemComponent},
        {path: '/admin/editItemInfo', component: AddItemComponent},
        {path: '/admin/delItemInfo', component: DelComponent},

        {path: '/admin/userCenter', component: UserCenterInfoComponent}

    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('content'));
