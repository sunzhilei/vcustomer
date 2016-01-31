/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {

    render() {

        let commentItems = this.props.data.item.map(function (item, index) {
            let classLi = item.active ? 'nav-item nav-link active' : 'nav-item nav-link'
            return (
                <a key={'nav-' + index} className={classLi} href={item.href}>
                    {item.text}
                </a>
            );
        });

        return (
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <a href="/" className="navbar-brand">{this.props.data.brand}</a>
                <nav className="nav navbar-nav pull-left">
                    {commentItems}
                </nav>
            </nav>
        );
    }
}

module.exports = Nav;