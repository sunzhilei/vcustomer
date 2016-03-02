/**
 * Created by sunzhilei on 2016/1/22.
 */


import React from 'react';
import ReactDOM from 'react-dom';

class Select extends React.Component {
    render() {
        return (
            <select name={this.props.name ? this.props.name : ''}
                    className="c-select"
                    onChange={e => {this.props.onChange(e)}}>
                {
                    this.props.data.items.map((item, index) => {
                        if (item.selected) {
                            return (
                                <option value={item.value} selected>{item.text}</option>
                            )
                        } else {
                            return (
                                <option value={item.value}>{item.text}</option>
                            )
                        }
                    })
                }
            </select>
        )
    }
}

module.exports = Select;