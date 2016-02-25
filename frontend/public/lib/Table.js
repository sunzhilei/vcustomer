/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ColumnComponent extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                {
                    this.props.columns.map((column, index) => {
                        for (let key in column) {
                            return (<th key={'table-column-item-' + index}>{column.text}</th>)
                        }
                    })
                }
            </tr>
            </thead>
        )
    }
}

class RowsComponent extends React.Component {
    render() {
        return (
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
                                        return (<td key={'table-td-' + index}>{row_key}</td>);
                                    }
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        )
    }
}

class Pagination extends React.Component {
    handleClick(e) {
        e.preventDefault();
        this.props.onPageClick(e.target.getAttribute("value"));
    }

    render() {
        let pageNumber;
        let overNumber = this.props.total % 10;
        if (overNumber > 0) {
            pageNumber = (this.props.total - overNumber) / 10 + 1;
        } else {
            pageNumber = this.props.total / 10;
        }
        let pageList = [];
        for (let i = 1; i <= pageNumber; i++) {
            pageList[i] = i;
        }

        let pageNumbers = pageList.map((page, index) => {
            return (
                <li key={'table-page-item-' + index}>
                    <a value={page} href="#" onClick={e => {this.handleClick(e)}}>{page}</a>
                </li>
            )
        })

        return (
            <div className="PaginationComponent">
                <nav>
                    <ul className="pagination pagination-sm">
                        <li>
                            <a href="#" aria-label="上一页">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {pageNumbers}
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

class TableComponent extends React.Component {
    onPageClick(page) {
        $.get(this.props.url, {page: (page * 10 - 10) < 1 ? 1 : (page * 10 - 10), number: 10}, data => {
            this.setState(data);
        }, 'json');
    }

    constructor() {
        super();
        this.state = {
            total: 1,
            currPage: 1,
            rows: []
        }
    }

    componentDidMount() {
        let isPagination = this.props.config.pagination ? 10 : this.state.total;
        $.get(this.props.url, {page: 1, number: isPagination}, data => {
            this.setState(data);
        }, 'json');
    }

    render() {

        let PaginationComponent = this.props.config.pagination ?
            <Pagination total={this.state.total} currPage={this.state.currPage}
                        onPageClick={page => this.onPageClick(page)}/> : '';

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <ColumnComponent columns={this.props.config.columns}/>
                    <RowsComponent columns={this.props.config.columns} rows={this.state.rows}/>
                </table>
                {PaginationComponent}
            </div>
        );
    }
}
module.exports = TableComponent;