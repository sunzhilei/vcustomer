/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class NavItems extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let classLi = item.active ? 'nav-item nav-link active' : 'nav-item nav-link'
                        return (
                            <a key={'nav-' + index} className={classLi} href={item.href}>
                                {item.text}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

class Nav extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <a href="/" className="navbar-brand">{this.props.data.brand}</a>
                <nav className="nav navbar-nav pull-left">
                    <NavItems items={this.props.data.items}/>
                </nav>
            </nav>
        );
    }
}

module.exports = Nav;