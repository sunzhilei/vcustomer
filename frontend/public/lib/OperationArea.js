/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class OperationArea extends React.Component {
    render() {

        let data = this.props.data;

        let columnItems = data.columns.map(function (column) {
            for (let key in column) {
                return (<th>{column[key]}</th>)
            }
        })

        let rowItems = data.rows.map(function (row) {
            return (
                <tr>
                    {
                        data.columns.map(function (column) {
                            for (let key in column) {
                                let column_key = column[key];
                                let row_key = row[column_key]
                                return (<td>{row_key}</td>);
                            }
                        })
                    }
                </tr>
            );
        })


        return (
            <div className="col-sm-9 col-md-10 blog-main">
                <h1 className="sub-header">列表</h1>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {columnItems}
                        </tr>
                        </thead>
                        <tbody>
                        {rowItems}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

module.exports = OperationArea;