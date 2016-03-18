/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

import SelectComponent from '../../../../../frontend/public/lib/Select';
import DataTableComponent from '../../../../../frontend/public/lib/DataTable';

class ItemList extends React.Component {

    constructor() {
        super();
        this.state = {
            urlOnline: '/admin/getItemList/1',
            urlOffline: '/admin/getItemList/0'
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState(
            {urlOnline: "/admin/getItemList/1/" + e.target.value},
            {urlOffline: "/admin/getItemList/0/" + e.target.value}
        );
    }

    render() {

        let DataConfig = {
            columns: [
                {field: 'title', text: '标题'},
                {field: 'category_name', text: '类别'},
                {field: 'price', text: '价格'},
                {
                    field: 'uuid',
                    text: '动作',
                    formatter: function (value, index) {
                        let content =
                            <div>
                                <Link key={'table-td-' + index} to='/admin/editItemInfo/'
                                      query={{uuid: value}}>
                                    编辑
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link key={'table-td-' + (index + 1)} to='/admin/delItemInfo'
                                      query={{uuid: value, text: '商品信息', submit_url: '/admin/delItem/', return_url: '/admin/getItemList/'}}>
                                    删除
                                </Link>
                            </div>;
                        return content;
                    }
                }
            ],
            pagination: false
        }

        return (
            <form>
                <br/>
                <h5 className="sub-header">项目列表</h5>
                <div className="form-group row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <Link to="/admin/getItemInfo" className="btn btn-primary">增加</Link>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <SelectComponent name="category_uuid" url="/admin/getCategoryList"
                                         onChange={e => {this.handleChange(e)}}/>
                    </div>
                </div>
                <ul className="nav nav-tabs nav-justified">
                    <li className="active"><a href="#online-tab" data-toggle="tab">在线商品</a></li>
                    <li><a href="#offline-tab" data-toggle="tab">仓库商品</a></li>
                </ul>
                <div className="tab-content">
                    <div id="online-tab" className="tab-pane active">
                        <DataTableComponent config={DataConfig} url={this.state.urlOnline}/>
                    </div>
                    <div id="offline-tab" className="tab-pane">
                        <DataTableComponent config={DataConfig} url={this.state.urlOffline}/>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = ItemList;