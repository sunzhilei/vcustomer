/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Sidebar extends React.Component {
    render() {

        let commentItems = this.props.data.map(function (items) {
            return (
                <ul className="nav nav-sidebar">
                    {
                        items.map(function (item) {
                            let active = item.active ? 'active' : '';
                            return (
                                <li className={active}>
                                    <a href={item.href}>
                                        {item.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            );
        });

        return (
            <div className="col-sm-3 col-md-2 blog-sidebar">
                {commentItems}
            </div>
        );
    }
}

module.exports = Sidebar;