/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'

class Info extends React.Component {
    render() {
        let share_url = "http://vcustomer.applinzi.com/client/" + account_uuid;
        return (
            <form>
                <br/>
                <h5 className="sub-header">服务器配置</h5>
                <div className="form-group row">
                    <label className="col-sm-2 form-control-label">分享地址&nbsp;：</label>
                    <div className="col-sm-10">
                        <span className="form-control-label">
                            <a target="_blank" href={share_url}>{share_url}</a>
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = Info;