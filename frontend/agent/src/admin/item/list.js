/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

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
        let SelectList = {
            value: '0',
            items: [
                {value: '0', text: '选择品类'},
                {value: '0eb6f5aa35b24dae94471b169a5da2da', text: '特色菜'},
                {value: '3e680dada5e24b408d57d0fa6e16202c', text: '热菜'},
                {value: '0b14b6fc3f05499281ad6af24d1f4826', text: '凉菜'},
                {value: '26606eca8a3b48e2a375b55146b81e1d', text: '酒水'}
            ]
        };

        let DataConfig = {
            columns: [
                {field: 'name', text: '名称'},
                {field: 'price', text: '价格'},
                {field: 'pic', text: '图片'},
                {field: 'descript', text: '描述'},
                {
                    field: 'uuid',
                    text:'动作',
                    formatter: [
                        {text: '编辑', url: '/admin/editItemInfo/'},
                        {text: '删除', url: '/admin/delItemInfo/'}
                    ]
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
                        <SelectComponent name="category_uuid" data={SelectList} onChange={e => {this.handleChange(e)}}/>
                    </div>
                </div>
                <DataTableComponent config={DataConfig} url={this.state.url}/>
            </form>
        );
    }
}

module.exports = ItemList;