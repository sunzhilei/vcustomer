/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import LoginComponent from '../../../frontend/public/lib/Login/Login';

class AgentLogin extends React.Component {
    handleSubmit(body) {
        $.post("/login/valid", body, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                window.location.href = data.custom.url;
            }
        }, 'json');
    }

    render() {
        return (
            <LoginComponent onSubmit={body => this.handleSubmit(body)}/>
        );
    }
}

ReactDOM.render(<AgentLogin/>, document.getElementById('content'));
