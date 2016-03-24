/**
 * Created by sunzhilei on 2016/3/9.
 */

class FileLibraryComponent extends React.Component {

    getMediaList(modalState) {
        if (modalState) {
            $('.bd-example-modal-lg').modal('show');
            $.get('/media/getMediaList', {}, data => {
                this.setState(data);
            }, 'json');
        } else {
            $('.bd-example-modal-lg').modal('hide');
        }
    }

    handleFileChange(e) {
        $('#meidaForm').ajaxSubmit({
            url: "/media/fileUpload",
            success: data => {
                let dataJson = JSON.parse(data);
                if(dataJson.result){
                    alert(dataJson.custom.msg);
                    this.getMediaList(true);
                }else{
                    alert(dataJson.msg);
                }
            }
        });
    }

    handleSelectClick(e) {
        this.props.onSelectFile(e.target.id, document.getElementById('img-' + e.target.id).currentSrc);
    }

    handleDeleteClick(e) {
        $.get("/media/DelMedia/" + e.target.id, {}, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                this.getMediaList(true);
            }
        }, 'json');
    }

    constructor() {
        super();
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        this.getMediaList(this.props.modalState);
    }

    componentWillReceiveProps(new_props) {
        this.getMediaList(new_props.modalState);
    }

    render() {
        return (
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="false">&times;</span>
                                <span className="sr-only">关闭</span>
                            </button>
                            <h4 className="modal-title">素材管理</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {
                                    this.state.rows.map((item, index) => {
                                        return (
                                            <div key={'div-image-' + index}
                                                 className="col-xs-4 col-sm-3 col-md-2 m-t-0 m-t m-t-md">
                                                <div className="thumbnail">
                                                    <img id={'img-' + item.uuid} alt={item.name} title={item.name}
                                                         src={'../../../upload/images/' + item.path}/>
                                                    <div className="caption">
                                                        <button type="button" className="btn btn-default btn-xs"
                                                                aria-label="确定">
                                                            <span id={item.uuid}
                                                                  onClick={e => this.handleSelectClick(e)}
                                                                  className="glyphicon glyphicon-ok" aria-hidden="true">
                                                            </span>
                                                        </button>
                                                        &nbsp;
                                                        <button type="button" className="btn btn-default btn-xs"
                                                                aria-label="删除">
                                                            <span id={item.uuid}
                                                                  onClick={e => this.handleDeleteClick(e)}
                                                                  className="glyphicon glyphicon-trash"
                                                                  aria-hidden="true">
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <form id="meidaForm" encType="multipart/form-data" method="post"
                                  action="javascript:;">
                                <button className="btn btn-success"
                                        style={{background:'url(../../../frontend/agent/img/upload.png)'}}>
                                    <input id="file" type="file" name="file" className="form-control-file"
                                           style={{width:'58px',filter:'alpha(opacity=0)',MozOpacity:'0',KhtmlOpacity:'0',opacity:'0'}}
                                           multiple required
                                           onChange={e => this.handleFileChange(e)}/>
                                </button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = FileLibraryComponent;