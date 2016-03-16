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
            url: '/admin/getItemList'
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({url: "/admin/getItemList/" + e.target.value});
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
                        let query = {
                            id: value,
                            text: '商品信息',
                            submit_url: '/admin/delItem/',
                            return_url: '/admin/getItemList/'
                        };

                        let content =
                            <div>
                                <Link key={'table-td-' + index} to={'/admin/editItemInfo/' + value}
                                      className="btn btn-link">编辑</Link>
                                <Link key={'table-td-' + (index + 1)} to='/admin/delItemInfo'
                                      query={query}
                                      className="btn btn-link">删除</Link>
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
                        <SelectComponent name="category_uuid" url="/admin/getCategoryList" onChange={e => {this.handleChange(e)}}/>
                    </div>
                </div>
                <DataTableComponent config={DataConfig} url={this.state.url}/>
            </form>
        );
    }
}

module.exports = ItemList;