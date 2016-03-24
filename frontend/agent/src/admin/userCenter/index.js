/**
 * Created by sunzhilei on 2016/1/22.
 */

import ListGroupComponent from '../../../../public/lib/ListGroup';

let ListGroupData = [
    {
        title: '用户中心',
        items: [
            {text: '个人信息', href: '/admin/userCenter/UserInfo'},
            {text: '密码管理', href: '/admin/userCenter/EditPwd'},
            {text: '公众号对接', href: '/admin/userCenter/DockInfo'}
        ]
    }
]

class UserCenterIndex extends React.Component {
    render() {
        return (
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
        );
    }
}

module.exports = UserCenterIndex;