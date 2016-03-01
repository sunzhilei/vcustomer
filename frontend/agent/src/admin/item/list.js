/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

import TableComponent from '../../../../../frontend/public/lib/Table';

class ItemList extends React.Component {

    constructor() {
        super();
        this.state = {
            url: ''
        };
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({url: "/admin/getItemList/" + e.target.id});
        document.getElementById("dropdown-text").innerText = e.target.innerText;
    }

    render() {
        let DataConfig = {
            "columns": [
                {field: 'name', text: '名称'},
                {field: 'price', text: '价格'},
                {field: 'pic', text: '图片'},
                {field: 'descript', text: '描述'}
            ],
            pagination: true
        }

        return (
            <form>
                <br/>
                <h5 className="sub-header">项目列表</h5>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <Link to="/admin/getItemInfo" className="btn btn-primary">增加</Link>
                    </div>

                    <div className="col-sm-6">
                        <div className="dropdown pull-right">
                            <button id="dropdown-text" className="btn btn-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown">
                                选择品类
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <button className="dropdown-item" type="button" id="0eb6f5aa35b24dae94471b169a5da2da"
                                        onClick={e => {this.handleClick(e)}}>
                                    特色菜
                                </button>
                                <button className="dropdown-item" type="button" id="3e680dada5e24b408d57d0fa6e16202c"
                                        onClick={e => {this.handleClick(e)}}>
                                    热菜
                                </button>
                                <button className="dropdown-item" type="button" id="0b14b6fc3f05499281ad6af24d1f4826"
                                        onClick={e => {this.handleClick(e)}}>
                                    凉菜
                                </button>
                                <button className="dropdown-item" type="button" id="26606eca8a3b48e2a375b55146b81e1d"
                                        onClick={e => {this.handleClick(e)}}>
                                    酒水
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableComponent config={DataConfig} url={this.state.url}/>
            </form>
        );
    }
}

module.exports = ItemList;