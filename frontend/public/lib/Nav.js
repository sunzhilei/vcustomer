/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class NavItems extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav pull-left">
                {
                    this.props.items.map((item, index) => {
                        return (
                            <li key={'nav-' + index} className="nav-item">
                                <a className="nav-link" href={item.href}>
                                    {item.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav id="navbar-example" className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <a href="/" className="navbar-brand">{this.props.data.brand}</a>
                <NavItems items={this.props.data.items}/>
            </nav>
        );
    }
}

module.exports = Nav;