/**
 * Created by sunzhilei on 2016/1/22.
 */


import React from 'react';
import ReactDOM from 'react-dom';

class Select extends React.Component {
    render() {
        return (
            <select name={this.props.name ? this.props.name : ''}
                    className="c-select" value={this.props.data.value ? this.props.data.value : 0}
                    onChange={e => {this.props.onChange(e)}}>
                {
                    this.props.data.items.map((item, index) => {
                        return (
                            <option key={'select-' + index} value={item.value}>
                                {item.text}
                            </option>
                        )
                    })
                }
            </select>
        )
    }
}

module.exports = Select;