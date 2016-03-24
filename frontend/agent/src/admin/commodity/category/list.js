/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

import DataTableComponent from '../../../../../../frontend/public/lib/DataTable';
import ModalComponent from '../../../../../public/lib/Modal';

class CategoryList extends React.Component {

    constructor() {
        super();
        this.state = {
            config: {
                uuid: '',
                text: '',
                submit_url: '',
                return_url: ''
            }
        };
    }

    handleDelCategoryClick(e, value) {
        e.preventDefault();
        this.setState(
            {
                config: {
                    uuid: value,
                    text: '确定删除此商品分类吗？',
                    submit_url: '/admin/delCategory/',
                    return_url: '/admin/commondity/getCategoryList/'
                }
            }
        )
        $('#ModalComponent').modal('show');
    }

    render() {
        let DataConfig = {
            columns: [
                {field: 'name', text: '名称'},
                {
                    field: 'uuid',
                    text: '动作',
                    formatter: (value, index) => {
                        let content =
                            <div>
                                <Link key={'table-td-' + index} to='/admin/commondity/editCategoryInfo/'
                                      query={{uuid: value}}>
                                    编辑
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-link" type="button"
                                        onClick={e => this.handleDelCategoryClick(e,value)}>
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
                <h5 className="sub-header">分类列表</h5>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <Link to="/admin/commondity/addCategoryInfo" className="btn btn-primary">增加</Link>
                    </div>
                </div>
                <DataTableComponent config={DataConfig} url="/admin/getCategoryList"/>
                <ModalComponent config={this.state.config}></ModalComponent>
            </form>
        );
    }
}

module.exports = CategoryList;