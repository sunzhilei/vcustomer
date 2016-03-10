/**
 * Created by sunzhilei on 2016/1/7.
 */

import NavComponent from '../../../frontend/public/lib/Nav';
import LoginComponent from '../../../frontend/public/lib/Login/Login';

let NavData = {
    brand: {text: '微客', href: '/'},
    items: {
        right: [
            {text: '注册', href: '/reg'}
        ]
    }
}

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
            <div>
                <NavComponent data={NavData}/>
                <br/><br/><br/><br/><br/><br/><br/>
                <LoginComponent onSubmit={body => this.handleSubmit(body)}/>
            </div>
        );
    }
}

ReactDOM.render(<AgentLogin/>, document.getElementById('content'));
