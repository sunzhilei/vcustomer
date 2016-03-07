/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router'

class TableComponent extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    {
                        this.props.columns.map((column, index) => {
                            for (let key in column) {
                                if (column.formatter) {
                                    return (<th key={'table-column-item-' + index}>{column.text}</th>)
                                } else {
                                    return (<th key={'table-column-item-' + index}>{column.text}</th>)
                                }
                            }
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.props.rows.map((row, index) => {
                        return (
                            <tr key={'table-tr-' + index}>
                                {
                                    this.props.columns.map((column, index) => {
                                        for (let key in column) {
                                            let column_key = column[key];
                                            let row_key = row[column_key]
                                            if (column.formatter) {
                                                return (
                                                    <td key={'table-td-' + index}>
                                                        {
                                                            column.formatter.map((format, index) => {
                                                                return (<Link key={'table-td-' + index}
                                                                              to={format.url + row_key}
                                                                              className="btn btn-secondary">{format.text}</Link>);
                                                            })
                                                        }
                                                    </td>
                                                )
                                            } else {
                                                return (<td key={'table-td-' + index}>{row_key}</td>);
                                            }
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

class PaginationComponent extends React.Component {

    handlePreClick(e) {
        e.preventDefault();
        this.props.onPaginationClick(1);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onPaginationClick(e.target.getAttribute("value"));
    }

    handleNextClick(e) {
        e.preventDefault();
        this.props.onPaginationClick(this.state.pageList.length);
    }

    constructor() {
        super();
        this.state = {
            pageList: [1]
        }
    }

    componentWillReceiveProps(new_props) {
        let yuNumber = new_props.paginationTotal % 10;

        let pageNumber = yuNumber > 0 ? (new_props.paginationTotal - yuNumber) / 10 + 1 : new_props.paginationTotal / 10;

        let pageList = [1];
        for (let i = 0; i < pageNumber; i++) {
            pageList[i] = i + 1;
        }

        this.setState({pageList: pageList});
    }

    render() {
        return (
            <div className="PaginationComponent">
                <nav>
                    <ul className="pagination pagination-sm">
                        <li>
                            <a href="#" aria-label="上一页" onClick={e => {this.handlePreClick(e)}}>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {
                            this.state.pageList.map((page, index) => {
                                return (
                                    <li key={'table-page-item-' + index}>
                                        <a value={page} href="#" onClick={e => {this.handleClick(e)}}>{page}</a>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <a href="#" aria-label="下一页" onClick={e => {this.handleNextClick(e)}}>
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

class DataTableComponent extends React.Component {

    handlePageClick(url, page, number) {
        let params = {};
        if (this.props.config.pagination) {
            params = {
                page: page == 1 ? 1 : page * number - number + 1,
                number: number
            }
        }
        $.get(url, params, data => {
            this.setState(data);
        }, 'json');
    }

    constructor() {
        super();
        this.state = {
            total: 0,
            rows: []
        }
    }

    componentDidMount() {
        if (this.props.url) {
            this.handlePageClick(this.props.url, 1, 10);
        }
    }

    componentWillReceiveProps(new_props) {
        if (this.props.url) {
            this.handlePageClick(new_props.url, 1, 10);
        }
    }

    render() {
        return (
            <div className="table-responsive">
                <TableComponent columns={this.props.config.columns} rows={this.state.rows}/>
                {
                    this.props.config.pagination ?
                        <PaginationComponent
                            paginationTotal={this.state.total}
                            onPaginationClick={page => this.handlePageClick(this.props.url,page,10)}
                        />
                        : ''
                }
            </div>
        );
    }
}
module.exports = DataTableComponent;