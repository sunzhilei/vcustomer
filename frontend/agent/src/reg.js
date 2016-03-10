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
    handleSubmit(body) {
        $.post("/reg/valid", body, data => {
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
                <RegComponent onSubmit={body => this.handleSubmit(body)}/>
            </div>
        );
    }
}

ReactDOM.render(<AgentReg/>, document.getElementById('content'));
