/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import LoginComponent from '../../../frontend/public/lib/Login/Login';
import Ajax from '../../../frontend/public/lib/JQuery/Ajax';

class AgentLogin extends React.Component {
    handleSubmit(body) {
        Ajax.post('/login/valid', body).then(function (data) {
            console.log(data.result);
        }, function (errorThrown) {
            console.log(errorThrown);
        })
    }

    render() {
        return (
            <LoginComponent onSubmit={body => this.handleSubmit(body)}/>
        );
    }
}

ReactDOM.render(<AgentLogin/>, document.getElementById('content'));
