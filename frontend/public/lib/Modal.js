/**
 * Created by sunzhilei on 2016/3/9.
 */

import {browserHistory, Link} from 'react-router'

class FileLibraryComponent extends React.Component {

    handleOkClick(e) {
        $.post(this.props.config.submit_url + this.props.config.uuid, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                $('#ModalComponent').modal('hide');
                browserHistory.replace(this.props.config.return_url);
            }
        }, 'json');
    }

    handleCancelClick(e) {
        $('#ModalComponent').modal('hide');
    }

    render() {
        return (
            <div id="ModalComponent" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="false">&times;</span>
                                <span className="sr-only">关闭</span>
                            </button>
                            <h4 className="modal-title">确认信息</h4>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-danger" role="alert">
                                {this.props.config.text}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={e => this.handleOkClick(e)}>确定</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-default" onClick={e => this.handleCancelClick(e)}>关闭</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = FileLibraryComponent;