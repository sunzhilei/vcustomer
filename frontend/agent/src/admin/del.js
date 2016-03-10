/**
 * Created by sunzhilei on 2016/1/22.
 */

import {browserHistory, Link} from 'react-router'

class AddCategory extends React.Component {

    constructor() {
        super();
        this.state = {
            uuid: '',
            name: ''
        };
    }

    handleClick(e) {
        e.preventDefault();
        $.post(this.props.location.query.submit_url + this.props.location.query.id, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                browserHistory.replace(this.props.location.query.return_url);
            }
        }, 'json');
    }

    render() {
        return (
            <form noValidate="false" onSubmit={e => {this.handleSubmit(e)}}>
                <br/>
                <h5 className="sub-header">品类信息</h5>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <div className="alert alert-danger" role="alert">
                            确定删除此{this.props.location.query.text}吗？
                        </div>
                    </div>
                </div>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={e => this.handleClick(e)}>删除</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/admin/getCategoryList" className="btn btn-default">返回</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = AddCategory;