/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ServiceConfigInfoComponent from './ServiceConfigInfo';
import ShopInfoComponent from './ShopInfo';

class ShowModules extends React.Component {
    getCustomerInfo(type) {
        $.ajax({
            url: "/admin/personalCenter/customerInfo",
            dataType: "json",
            async: true,
            success: data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    if (data.custom.row) {
                        this.setState({type: type, customer: data.custom.row});
                    } else {
                        this.setState({type: type});
                    }
                }
            }
        });
    }

    constructor() {
        super();
        this.state = {
            type: "info",
            customer: {
                wx_url: '',
                wx_token: '',
                mp_name: '',
                mp_type: '',
                operator_name: '',
                operator_phone: '',
                wx_appid: '',
                wx_secret: ''
            }
        };
    }

    componentDidMount() {
        this.getCustomerInfo(this.state.type);
    }

    handleEnterConfig() {
        this.getCustomerInfo('config');
    }

    handleReturnInfo() {
        this.getCustomerInfo('info');
    }

    handleSubmitConfig(body) {
        $.post("/customer/addCustomer", body, data => {
            console.log(data);
            if (!data.result) {
                alert(data.msg);
            } else {
                this.getCustomerInfo('info');
            }
        }, 'json');
    }

    render() {
        if (this.state.type == 'info') {
            return <ServiceConfigInfoComponent customer={this.state.customer}
                                               onEnterConfig={() => {this.handleEnterConfig()}}/>;
        } else {
            return <ShopInfoComponent customer={this.state.customer}
                                      onSubmitConfig={(body) => this.handleSubmitConfig(body)}
                                      onReturnInfo={() => {this.handleReturnInfo()}}/>;
        }
    }
}

module.exports = ShowModules;