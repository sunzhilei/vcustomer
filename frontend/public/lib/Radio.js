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
                    this.props.config.items.map((item, index) => {
                        //let active = this.props.config.active;
                        //if (!this.props.config.active) {
                        //    active = this.props.config.items[0].value
                        //}
                        let radio = (this.props.config.active == item.value) ?
                            <input type="radio" name={this.props.name} defaultValue={item.value} defaultChecked/> :
                            <input type="radio" name={this.props.name} defaultValue={item.value}/>;
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