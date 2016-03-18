/**
 * Created by sunzhilei on 2016/1/7.
 */

import { Link } from 'react-router'

class HomeIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []

        };
    }

    componentDidMount() {
        $.get("/admin/getOnlineItemList/e296ebfd469042c9ad4f2f744dbb549q", {}, data => {
            if (data.rows) {
                this.setState({list: data.rows});
            }
        }, 'json');
    }

    render() {
        return (
            <div>
                <div className="weui_cells_title">商品列表</div>
                <div className="weui_cells weui_cells_checkbox">
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <label key={"home-index-" + item.uuid} className="weui_cell weui_check_label"
                                       htmlFor={item.uuid}>
                                    <div className="weui_cell_hd">
                                        <input type="checkbox" className="weui_check" name="checkbox1"
                                               id={item.uuid}/>
                                        <i className="weui_icon_checked"></i>
                                    </div>
                                    <div className="weui_cell_bd weui_cell_primary">
                                        <div className="weui_media_box weui_media_appmsg">
                                            <div className="weui_media_hd">
                                                <img className="weui_media_appmsg_thumb" src={item.pic_path}
                                                     alt={item.title}/>
                                            </div>
                                            <div className="weui_media_bd">
                                                <h4 className="weui_media_title">{item.title}</h4>
                                                <p className="weui_media_desc">
                                                    {item.sub_title}</p>
                                            </div>
                                            <Link to={"/client/home/desc/" + item.uuid}>详情</Link>
                                        </div>
                                    </div>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

module.exports = HomeIndex;
