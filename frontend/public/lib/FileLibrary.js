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
                this.getMediaList(true);
            }
        });
    }

    handleImageClick(e) {
        this.props.onGetImageUUID(e);
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
                                                <a href="#" className="thumbnail"
                                                   onClick={e => this.handleImageClick(e)}>
                                                    <img id={item.uuid} alt={item.name} title={item.name}
                                                         src={'../../../upload/images/' + item.path}/>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <form id="meidaForm" encType="multipart/form-data" method="post"
                                  action="javascript:;">
                                <span className="btn btn-success">
                                <input type="file" name="file" className="form-control-file"
                                       style={{width:'70px'}} multiple required
                                       onChange={e => this.handleFileChange(e)}/>
                                </span>
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