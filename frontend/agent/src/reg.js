/**
 * Created by sunzhilei on 2016/1/7.
 */

import NavComponent from '../../../frontend/public/lib/Nav';
import RegComponent from '../../../frontend/public/lib/Reg/Reg';

let NavData = {
    brand: {text: '微客', href: '/'},
    items: {
        right: [
            {text: '登录', href: '/login'}
        ]
    }
}

class AgentReg extends React.Component {
    render() {
        return (
            <div>
                <NavComponent data={NavData}/>
                <br/><br/><br/><br/><br/><br/><br/>
                <RegComponent url="/reg/valid"/>
            </div>
        );
    }
}

ReactDOM.render(<AgentReg/>, document.getElementById('content'));
