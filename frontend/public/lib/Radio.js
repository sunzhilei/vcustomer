/**
 * Created by sunzhilei on 2016/1/22.
 */


import React from 'react';
import ReactDOM from 'react-dom';

class Radio extends React.Component {
    render() {
        return (
            <div className="radio">
                {
                    this.props.data.items.map((item, index) => {
                        let radio = (this.props.active == item.value) ?
                            <input type="radio" name={this.props.name} value={item.value} checked/> :
                            <input type="radio" name={this.props.name} value={item.value}/>;
                        return (
                            <label className="radio-inline" key={'radio-item-' + index}>
                                {radio}
                                {item.text}
                            </label>
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = Radio;