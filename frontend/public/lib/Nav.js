/**
 * Created by sunzhilei on 2016/1/22.
 */

import { Link } from 'react-router'

class NavLeftItems extends React.Component {
    render() {
        if (this.props.items.left) {
            return (
                <ul className="nav navbar-nav pull-left">
                    {
                        this.props.items.left.map((item, index) => {
                            if (item.link) {
                                return (
                                    <li key={'nav-' + index}>
                                        <Link className="nav-link" to={item.href} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="bs-example-navbar-collapse-1">
                                            {item.text}
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={'nav-' + index}>
                                        <a className="nav-link" href={item.href} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="bs-example-navbar-collapse-1">
                                            {item.text}
                                        </a>
                                    </li>
                                )
                            }
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
                            if (item.link) {
                                return (
                                    <li key={'nav-' + index}>
                                        <Link to={item.href} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="bs-example-navbar-collapse-1">
                                            {item.text}
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={'nav-' + index}>
                                        <a href={item.href} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="bs-example-navbar-collapse-1">
                                            {item.text}
                                        </a>
                                    </li>
                                )
                            }
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
            <nav id="navbar-example" className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={this.props.data.brand.href}>{this.props.data.brand.text}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <NavLeftItems items={this.props.data.items}/>
                        <NavRightItems items={this.props.data.items}/>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;