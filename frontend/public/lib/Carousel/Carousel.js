/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
    render() {

        let commentItems = this.props.data.map(function (item, index) {
            let classItem = item.active ? 'carousel-item active' : 'carousel-item'
            return (
                <div key={'carousel-' + index} className={classItem}>
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <p><a className="btn btn-lg btn-primary" href={item.btn.href}
                                  role="button">{item.btn.text}</a></p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {commentItems}
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

module.exports = Carousel;