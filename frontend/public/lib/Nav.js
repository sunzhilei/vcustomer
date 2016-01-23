/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {

    render() {

        let commentItems = this.props.data.item.map(function (item) {
            let classLi = item.active ? 'nav-item active' : 'nav-item'
            return (
                <li className={classLi}>
                    <a className="nav-link" href={item.href}>
                        {item.text}
                    </a>
                </li>
            );
        });

        return (
            <nav className="navbar navbar-dark bg-inverse navbar-static-top">
                <a href="/" className="navbar-brand">{this.props.data.brand}</a>
                <ul className="nav navbar-nav container">
                    {commentItems}
                </ul>
            </nav>
        );
    }
}

module.exports = Nav;