/**
 * Created by sunzhilei on 2016/1/22.
 */

import {browserHistory, Link} from 'react-router'

class AddCategory extends React.Component {

    handleClick(e) {
        e.preventDefault();
        $.post(this.props.location.query.submit_url + this.props.location.query.uuid, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                browserHistory.replace(this.props.location.query.return_url);
            }
        }, 'json');
    }

    render() {
        return (
            <form noValidate="false">
                <br/>
                <h5 className="sub-header">确认信息</h5>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <div className="alert alert-danger" role="alert">
                            {this.props.location.query.text}
                        </div>
                    </div>
                </div>
                <div className="form-group row pull-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={e => this.handleClick(e)}>确定</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/admin/getCategoryList" className="btn btn-default">返回</Link>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = AddCategory;