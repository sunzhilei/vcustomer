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
            async: false,
            success: data => {
                if (!data.result) {
                    alert(data.msg);
                } else {
                    this.state = {type: type, customerInfo: data.custom.row};
                    this.setState({type: type, customerInfo: data.custom.row});
                }
            }
        });
    }

    constructor() {
        super();
        this.getCustomerInfo('info');
    }

    handleSubmit(type) {
        this.getCustomerInfo(type);
    }

    render() {
        if (this.state.type == 'info') {
            return <ServiceConfigInfoComponent customerInfo={this.state.customerInfo}
                                               onSubmit={type => this.handleSubmit(type)}/>;
        } else {
            return <ShopInfoComponent customerInfo={this.state.customerInfo}
                                      onSubmit={type => this.handleSubmit(type)}/>;
        }
    }
}

module.exports = ShowModules;