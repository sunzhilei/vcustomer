/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

import DataTableComponent from '../../../../../frontend/public/lib/DataTable';

class CategoryList extends React.Component {

    render() {
        let DataConfig = {
            columns: [
                {field: 'name', text: '名称'},
                {
                    field: 'uuid',
                    text: '动作',
                    formatter: function (value, index) {
                        let content =
                            <div>
                                <Link key={'table-td-' + index} to={'/admin/editCategoryInfo/' + value} className="btn btn-link">编辑</Link>
                                <Link key={'table-td-' + (index + 1)} to={'/admin/delCategoryInfo/' + value} className="btn btn-link">删除</Link>
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
                <h5 className="sub-header">品类列表</h5>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <Link to="/admin/getCategoryInfo" className="btn btn-primary">增加</Link>
                    </div>
                </div>
                <DataTableComponent config={DataConfig} url="/admin/getCategoryList"/>
            </form>
        );
    }
}

module.exports = CategoryList;