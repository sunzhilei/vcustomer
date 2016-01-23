/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Featurette extends React.Component {
    render() {
        let commentItems = this.props.data.map(function (item, index) {
            let classDivOne = index % 2 ? 'col-md-7 col-md-push-5' : 'col-md-7'
            let classDivTwo = index % 2 ? 'col-md-5 col-md-pull-7' : 'col-md-5'
            return (
                <div>
                    <hr className="featurette-divider"/>
                    <div className="row featurette">
                        <div className={classDivOne}>
                            <h2 className="featurette-heading">
                                {item.title}
                                <br/>
                                <span className="text-muted">{item.subtitle}</span>
                            </h2>
                            <p className="lead">
                                {item.text}
                            </p>
                        </div>
                        <div className={classDivTwo}>
                            <img className="featurette-image img-responsive center-block"
                                 data-src="holder.js/500x500/auto"
                                 alt="500x500"
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1MjY4N2Y3MDNhIHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTUyNjg3ZjcwM2EiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg1LjEyNSIgeT0iMjYxLjEiPjUwMHg1MDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="/>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {commentItems}
                <hr className="featurette-divider"/>
            </div>
        );
    }
}

module.exports = Featurette;