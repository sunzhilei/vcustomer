/**
 * Created by sunzhilei on 2016/1/22.
 */

import {browserHistory, Link} from 'react-router'

import SelectComponent from '../../../../../../frontend/public/lib/Select';
import FileLibraryComponent from '../../../../../../frontend/public/lib/FileLibrary';

class AddItem extends React.Component {

    handleChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    getItem(uuid) {
        $.get("/admin/getItem/" + uuid, {}, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                if (data.custom.row) {
                    this.setState(data.custom.row);
                }
            }
        }, 'json');
    }

    handleSelectPicClick(e) {
        this.setState({model: true});
    }

    handleSelectFile(uuid, src) {
        this.setState({
            pic_uuid: uuid,
            pic_path: src
        });
        this.setState({model: false});
    }

    constructor() {
        super();
        this.state = {
            model: false,

            uuid: '',
            category_uuid: -1,
            title: '',
            sub_title: '',
            price: '',
            pic_uuid: '',
            pic_path: '../../../../frontend/agent/img/default.png',
            descript: '',
            line: -1
        };
    }

    componentDidMount() {
        this.getItem(this.props.location.query.uuid);
    }

    handleLineChange(e) {
        this.setState({
            line: e.target.value
        });
    }

    handleCategoryChange(e) {
        this.setState({
            category_uuid: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var validator = $("form").validate({
            rules: {
                title: {
                    maxlength: 200
                }
            }
        });
        if (validator.form() && this.state.category_uuid != -1) {
            $.post('/admin/addItem', $('#itemForm').serialize(), data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    browserHistory.replace('/router/commondity/getItemList');
                }
            }, 'json');
        } else {
            alert("请选择商品分类");
        }
    }

    render() {
        return (
            <div>
                <form id="itemForm" noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                    <input type="hidden" name="uuid" value={this.state.uuid}/>
                    <br/>
                    <h5 className="sub-header">商品信息</h5>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">状态：</label>
                        <div className="col-sm-10">
                            <SelectComponent name="line" data={[{uuid:0,name:'仓库'},{uuid:1,name:'在线'}]}
                                             value={this.state.line}
                                             onChange={e => {this.handleLineChange(e)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">商品分类：</label>
                        <div className="col-sm-10">
                            <SelectComponent name="category_uuid" url="/admin/getCategoryList"
                                             value={this.state.category_uuid}
                                             onChange={e => {this.handleCategoryChange(e)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">标题：</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" placeholder="标题"
                                   required autofocus value={this.state.title} onChange={e => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">副标题：</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" rows="3" name="sub_title" placeholder="副标题"
                                  value={this.state.sub_title} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">价格：</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="price" placeholder="价格"
                                   required value={this.state.price} onChange={e => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">图片：</label>
                        <div className="col-sm-2">
                            <img id="image" src={this.state.pic_path} className="img-thumbnail"/>
                            <input type="hidden" name="pic_uuid" value={this.state.pic_uuid}/>
                            <input type="hidden" name="pic_path" value={this.state.pic_path}/>
                        </div>
                        <div className="col-sm-8">
                            <button type="button" className="btn btn-primary"
                                    onClick={e => this.handleSelectPicClick(e)}>
                                选择图片
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">描述：</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" rows="10" name="descript" placeholder="描述"
                                  value={this.state.descript} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                    </div>
                    <div className="form-group row pull-right">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">保存</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/router/commondity/getItemList" className="btn btn-default">返回</Link>
                        </div>
                    </div>
                </form>
                <FileLibraryComponent modalState={this.state.model}
                                      onSelectFile={(uuid, src) => this.handleSelectFile(uuid, src)}/>
            </div>
        );
    }
}

module.exports = AddItem;