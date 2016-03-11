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
                <FileLibraryComponent modalState={this.state.model}
                                      onGetImageUUID={(e,uuid,path) => this.handleGetImageUUID(e)}/>
            </div>
        );
    }
}

module.exports = AddItem;