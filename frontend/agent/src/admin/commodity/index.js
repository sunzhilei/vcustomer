/**
 * Created by sunzhilei on 2016/1/22.
 */

import ListGroupComponent from '../../../../public/lib/ListGroup';

let ListGroupData = [
    {
        title: '商品管理',
        items: [
            {text: '商品分类', href: '/admin/commondity/getCategoryList'},
            {text: '商品信息', href: '/admin/commondity/getItemList'}
        ]
    }
]

class CommondityIndex extends React.Component {
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

module.exports = CommondityIndex;