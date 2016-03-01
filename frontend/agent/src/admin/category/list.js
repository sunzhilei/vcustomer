/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

import TableComponent from '../../../../../frontend/public/lib/Table';

class CategoryList extends React.Component {

    render() {
        console.log("=============");
        let DataConfig = {
            "columns": [
                {field: 'name', text: '名称'}
            ],
            pagination: true
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
                <TableComponent config={DataConfig} url="/admin/getCategoryList"/>
            </form>
        );
    }
}

module.exports = CategoryList;