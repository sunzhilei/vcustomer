/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import RegComponent from '../../../frontend/public/lib/Reg/Reg';

class AgentReg extends React.Component {
    handleSubmit(body) {
        $.post("/reg/valid", body, data => {
            if (!data.result) {
                alert(data.msg);
            } else {
                window.location.href = data.msg;
            }
        }, 'json');
    }

    render() {
        return (
            <RegComponent onSubmit={body => this.handleSubmit(body)}/>
        );
    }
}

ReactDOM.render(<AgentReg/>, document.getElementById('content'));
