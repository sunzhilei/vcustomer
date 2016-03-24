/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

import SelectComponent from '../../../../../../frontend/public/lib/Select';
import DataTableComponent from '../../../../../../frontend/public/lib/DataTable';
import ModalComponent from '../../../../../public/lib/Modal';

class ItemList extends React.Component {

    constructor() {
        super();
        this.state = {
            urlOnline: '/admin/getItemList/1',
            urlOffline: '/admin/getItemList/0',
            config: {
                uuid: '',
                text: '',
                submit_url: '',
                return_url: ''
            }
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState(
            {urlOnline: "/admin/getItemList/1/" + e.target.value}
        );
        this.setState(
            {urlOffline: "/admin/getItemList/0/" + e.target.value}
        );
    }

    handleOffLineClick(e, value) {
        e.preventDefault();
        this.setState(
            {
                config: {
                    uuid: value,
                    text: '确定下架此商品信息吗？',
                    submit_url: '/admin/setItemOffline/',
                    return_url: '/router/commondity/getItemList/'
                }
            }
        )
        $('#ModalComponent').modal('show');
    }

    handleDelOnLineClick(e, value) {
        e.preventDefault();
        this.setState(
            {
                config: {
                    uuid: value,
                    text: '确定删除此商品信息吗',
                    submit_url: '/admin/delItem/',
                    return_url: '/router/commondity/getItemList/'
                }
            }
        )
        $('#ModalComponent').modal('show');
    }

    handleOnLineClick(e, value) {
        e.preventDefault();
        this.setState(
            {
                config: {
                    uuid: value,
                    text: '确定上架此商品信息吗？',
                    submit_url: '/admin/setItemOnline/',
                    return_url: '/router/commondity/getItemList/'
                }
            }
        )
        $('#ModalComponent').modal('show');
    }

    handleDelOffLineClick(e, value) {
        e.preventDefault();
        this.setState(
            {
                config: {
                    uuid: value,
                    text: '确定删除此商品信息吗？',
                    submit_url: '/admin/delItem/',
                    return_url: '/router/commondity/getItemList/'
                }
            }
        )
        $('#ModalComponent').modal('show');
    }

    render() {

        let OnlineDataConfig = {
            columns: [
                {field: 'title', text: '标题'},
                {field: 'category_name', text: '类别'},
                {field: 'price', text: '价格'},
                {
                    field: 'uuid',
                    text: '动作',
                    formatter: (value, index) => {
                        let content =
                            <div key={'table-td-div-' + index}>
                                <button className="btn btn-link" type="button"
                                        onClick={e => this.handleOffLineClick(e,value)}>
                                    下架
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to='/router/commondity/editItemInfo/' query={{uuid: value}}>
                                    编辑
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-link" type="button"
                                        onClick={e => this.handleDelOnLineClick(e,value)}>
                                    删除
                                </button>
                            </div>;
                        return content;
                    }
                }
            ],
            pagination: false
        }

        let OfflineDataConfig = {
            columns: [
                {field: 'title', text: '标题'},
                {field: 'category_name', text: '类别'},
                {field: 'price', text: '价格'},
                {
                    field: 'uuid',
                    text: '动作',
                    formatter: (value, index) => {
                        let content =
                            <div key={'table-td-div-' + index}>
                                <button className="btn btn-link" type="button"
                                        onClick={e => this.handleOnLineClick(e,value)}>
                                    上架
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to='/router/commondity/editItemInfo/' query={{uuid: value}}>
                                    编辑
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-link" type="button"
                                        onClick={e => this.handleDelOffLineClick(e,value)}>
                                    删除
                                </button>
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
                <h5 className="sub-header">商品列表</h5>
                <div className="form-group row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <Link to="/router/commondity/addItemInfo" className="btn btn-primary">增加</Link>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <SelectComponent name="category_uuid" url="/admin/getCategoryList"
                                         onChange={e => {this.handleChange(e)}}/>
                    </div>
                </div>
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li role="presentation" className="active"><a href="#online-tab" aria-controls="online-tab"
                                                                  role="tab" data-toggle="tab">在线商品</a></li>
                    <li role="presentation"><a href="#offline-tab" aria-controls="offline-tab" role="tab"
                                               data-toggle="tab">仓库商品</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="online-tab">
                        <DataTableComponent config={OnlineDataConfig} url={this.state.urlOnline}/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="offline-tab">
                        <DataTableComponent config={OfflineDataConfig} url={this.state.urlOffline}/>
                    </div>
                </div>
                <ModalComponent config={this.state.config}></ModalComponent>
            </form>
        );
    }
}

module.exports = ItemList;