/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import RegComponent from '../../../frontend/public/lib/Reg/Reg';
import Ajax from '../../../frontend/public/lib/JQuery/Ajax';

class AgentReg extends React.Component {
    handleSubmit(body) {
        Ajax.post('/login/valid', body).then(function (data) {
            console.log(data.result);
        }, function (errorThrown) {
            console.log(errorThrown);
        })
    }

    render() {
        return (
            <RegComponent onSubmit={body => this.handleSubmit(body)}/>
        );
    }
}

ReactDOM.render(<AgentReg/>, document.getElementById('content'));
