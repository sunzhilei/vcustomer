/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ServiceConfigInfoComponent from './ServiceConfigInfo';
import ShopInfoComponent from './ShopInfo';

class ShowModules extends React.Component {
    render() {
        if (this.props.type == 'info') {
            return <ServiceConfigInfoComponent onSubmit={type => this.props.onSubmit(type)}/>;
        } else {
            return <ShopInfoComponent onSubmit={type => this.props.onSubmit(type)}/>;
        }
    }
}

module.exports = ShowModules;