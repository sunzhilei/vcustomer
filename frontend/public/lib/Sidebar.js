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
                    this.props.data.map((items, index) => {
                        return (
                            <ul key={'sidebar-' + index} className="nav nav-sidebar">
                                {
                                    items.map((item, index) => {
                                        let active = item.active ? 'active' : '';
                                        return (
                                            <li key={'sidebar-item-' + index} className={active}>
                                                <a href={item.href}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        );
                    })
                }
            </div>
        );
    }
}

module.exports = Sidebar;