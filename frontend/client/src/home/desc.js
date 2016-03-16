/**
 * Created by sunzhilei on 2016/1/7.
 */

class Desc extends React.Component {

    constructor() {
        super();
        this.state = {
            uuid: '',
            account_uuid: '',
            category_uuid: '',
            title: '',
            sub_title: '',
            price: '',
            pic_uuid: '',
            pic_path: '',
            descript: ''
        };
    }

    componentDidMount() {
        $.get("/admin/getItem/" + this.props.params.uuid, {}, data => {
            if (data.custom.row) {
                this.setState(data.custom.row);
            }
        }, 'json');
    }

    render() {
        return (
            <div>
                <div className="weui_cells_title">详情页</div>
                <div className="weui_cells">
                    <div className="weui_media_box weui_media_text">
                        <h4 className="weui_media_title">{this.state.title}</h4>
                        <h6 className="weui_media_desc">{this.state.sub_title}</h6>
                        <br/>
                        <p className="weui_media_desc">{this.state.descript}</p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Desc;
