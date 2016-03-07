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
                    text:'动作',
                    formatter: [
                        {text: '编辑', url: '/admin/editCategoryInfo/'},
                        {text: '删除', url: '/admin/delCategoryInfo/'}
                    ]
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