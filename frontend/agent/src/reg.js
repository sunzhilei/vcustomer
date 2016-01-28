/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import RegComponent from '../../../frontend/public/lib/Reg/Reg';

let NavData = {
    brand: '微客',
    item: [
        {text: '首页', href: '/', active: true},
        {text: '产品', href: '/product'},
        {text: '关于我们', href: '/about'}
    ]
}

class AgentReg extends React.Component {
    render() {
        return (
            <RegComponent data={NavData}/>
        );
    }
}

ReactDOM.render(<AgentReg/>, document.body);
