/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class NavLeftItems extends React.Component {
    render() {
        if (this.props.items.left) {
            return (
                <ul className="nav navbar-nav pull-left">
                    {
                        this.props.items.left.map((item, index) => {
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
        } else {
            return (<div></div>)
        }
    }
}

class NavRightItems extends React.Component {
    render() {
        if (this.props.items.right) {
            return (
                <ul className="nav navbar-nav pull-right">
                    {
                        this.props.items.right.map((item, index) => {
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
        } else {
            return (<div></div>)
        }
    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav id="navbar-example" className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <a href={this.props.data.brand.href} className="navbar-brand">{this.props.data.brand.text}</a>
                <NavLeftItems items={this.props.data.items}/>
                <NavRightItems items={this.props.data.items}/>
            </nav>
        );
    }
}

module.exports = Nav;