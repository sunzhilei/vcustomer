/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Sidebar extends React.Component {
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
                                        let active = item.active ? 'list-group-item active' : 'list-group-item';
                                        return (
                                            <a href={item.href} key={'sidebar-item-' + index} className={active}>
                                                {item.text}
                                            </a>
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

module.exports = Sidebar;