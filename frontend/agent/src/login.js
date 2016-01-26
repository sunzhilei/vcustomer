/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//require("../../../frontend/agent/css/carousel.css");

import LoginComponent from '../../../frontend/public/lib/Login/Login';

let NavData = {
    brand: '微客',
    item: [
        {text: '首页', href: '/', active: true},
        {text: '产品', href: '/product'},
        {text: '关于我们', href: '/about'}
    ]
}

class AgentLogin extends React.Component {
    render() {
        return (
            <LoginComponent data={NavData}/>
        );
    }
}

ReactDOM.render(<AgentLogin/>, document.body);
