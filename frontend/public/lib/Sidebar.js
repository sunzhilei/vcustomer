/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                <div className="list-group">
                    <a href="#" className="list-group-item active">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                </div>
            </div>
        );
    }
}

module.exports = Footer;