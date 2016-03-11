/**
 * Created by sunzhilei on 2016/1/22.
 */

import {browserHistory, Link} from 'react-router'

import SelectComponent from '../../../../../frontend/public/lib/Select';
import FileLibraryComponent from '../../../../../frontend/public/lib/FileLibrary';

class AddItem extends React.Component {

    handleChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    getItem(uuid) {
        $.ajax({
            url: "/admin/getItem/" + uuid,
            dataType: "json",
            async: true,
            success: data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    if (data.custom.row) {
                        this.setState(data.custom.row);
                    }
                }
            }
        });
    }

    handleSelectPicClick(e) {
        this.setState({model: true});
    }

    handleGetImageUUID(e) {
        $("#image").attr("src", e.target.currentSrc);
        this.setState({
            pic_uuid: e.target.id,
            pic_path: e.target.currentSrc
        });
        this.setState({model: false});
    }

    constructor() {
        super();
        this.state = {
            model: false,

            uuid: '',
            category_uuid: 0,
            name: '',
            price: '',
            pic_uuid: '',
            pic_path: '',
            descript: ''
        };
    }

    componentDidMount() {
        this.getItem(this.props.params.uuid);
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
                name: {
                    maxlength: 200
                }
            }
        });
        if (validator.form() && this.state.category_uuid != 0) {
            $.post('/admin/addItem', $('#itemForm').serialize(), data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    browserHistory.replace('/admin/getItemList');
                }
            }, 'json');
        }else{
            alert("请选择商品分类");
        }
    }

    render() {
        return (
            <div>
                <form id="itemForm" noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                    <input type="hidden" name="uuid" value={this.state.uuid}/>
                    <br/>
                    <h5 className="sub-header">项目信息</h5>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">商品分类：</label>
                        <div className="col-sm-10">
                            <SelectComponent name="category_uuid" url="/admin/getCategoryList"
                                             value={this.state.category_uuid}
                                             onChange={e => {this.handleCategoryChange(e)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">名称：</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" placeholder="名称"
                                   required autofocus value={this.state.name} onChange={e => this.handleChange(e)}/>
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
                            <img id="image" data-src="holder.js/200x200/auto" alt="200x200"
                                 className="img-thumbnail"
                                 src={this.state.pic_path ? this.state.pic_path : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MjY4N2Y3MDNhIHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUyNjg3ZjcwM2EiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg1LjEyNSIgeT0iMjYxLjEiPjUwMHg1MDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="}
                                 className="img-thumbnail"/>
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
                            <Link to="/admin/getItemList" className="btn btn-default">返回</Link>
                        </div>
                    </div>
                </form>
                <FileLibraryComponent modalState={this.state.model}
                                      onGetImageUUID={(e,uuid,path) => this.handleGetImageUUID(e)}/>
            </div>
        );
    }
}

module.exports = AddItem;