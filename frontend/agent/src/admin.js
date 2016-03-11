/**
 * Created by sunzhilei on 2016/1/7.
 */

import NavComponent from '../../public/lib/Nav';
import ListGroupComponent from '../../public/lib/ListGroup';


let NavData = {
    brand: {text: '微客', href: '/admin'},
    items: {
        right: [
            {text: '公众号配置', href: '/admin/getDockInfo', link: true},
            {text: '素材库管理', href: '/mediaLibrary', link: true},
            {text: '退出', href: '/loginOut'}
        ]
    }
}

let ListGroupData = [
    {
        title: '我的配置',
        items: [
            {text: '商品分类', href: '/admin/getCategoryList'},
            {text: '商品管理', href: '/admin/getItemList'}
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
                            <ListGroupComponent data={ListGroupData}/>
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

ReactDOM.render(<AgentIndex/>, document.getElementById('content'));
