/**
 * Created by sunzhilei on 2016/1/7.
 */

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <br/><br/><br/><br/><br/><br/><br/>
                <LoginComponent url="/login/valid"/>
            </div>
        );
    }
}

ReactDOM.render(<AgentLogin/>, document.getElementById('content'));
