/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Marketing extends React.Component {
    render() {

        let commentItems = this.props.data.map((item, index) => {
            return (
                <div key={'marketing-' + index} className="col-lg-4">
                    <img className="img-circle"
                         src={item.pic}
                         alt="Generic placeholder image" width="140" height="140"/>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <p><a className="btn btn-secondary" href={item.href} role="button">{item.btn.text} &raquo;</a></p>
                </div>
            );
        });

        return (
            <div className="row">
                {commentItems}
            </div>
        );
    }
}

module.exports = Marketing;