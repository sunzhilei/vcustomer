/**
 * Created by sunzhilei on 2016/1/22.
 */

import {Link} from 'react-router'


class ListGroup extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((data, index) => {
                        return (
                            <div key={'sidebar-' + index} className="list-group">
                                <br/>
                                <a href="#" className="list-group-item disabled">
                                    {data.title}
                                </a>
                                {
                                    data.items.map((item, index) => {
                                        return (
                                            <Link key={'sidebar-item-' + index} to={item.href} className="list-group-item">
                                                {item.text}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

module.exports = ListGroup;