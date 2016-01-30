/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Pagination extends React.Component {
    render() {

        let pageList = [];
        let pageNumber
        let overNumber = this.props.total % 10;
        if (overNumber != 0) {
            pageNumber = (this.props.total - overNumber) / 10 + 1;
        } else {
            pageNumber = this.props.total / 10;
        }
        for (let i = 1; i <= pageNumber; i++) {
            pageList[i] = i;
        }

        let pageItems = pageList.map(function (page) {
            return (
                <li><a href={page}>{page}</a></li>
            )
        })

        return (
            <div style={{'text-align':'center'}}>
                <nav>
                    <ul className="pagination pagination-sm">
                        <li>
                            <a href="#" aria-label="上一页">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {pageItems}
                        <li>
                            <a href="#" aria-label="下一页">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class OperationArea extends React.Component {
    render() {

        let config = this.props.config;
        let data = this.props.data;

        let PaginationComponent = config.Pagination ? <Pagination total={this.props.data.total}/> : '';

        let columnItems = config.columns.map(function (column) {
            for (let key in column) {
                return (<th>{column.text}</th>)
            }
        })

        let rowItems = data.rows.map(function (row) {
            return (
                <tr>
                    {
                        config.columns.map(function (column) {
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
                <div className="table-responsive">
                    <table className="table table-bordered">
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
                {PaginationComponent}
            </div>
        );
    }
}

module.exports = OperationArea;