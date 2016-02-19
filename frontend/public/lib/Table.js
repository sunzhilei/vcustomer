/**
 * Created by sunzhilei on 2016/1/22.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ColumnItemsComponent extends React.Component {
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

class RowItemsComponent extends React.Component {
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

        let pageItems = pageList.map((page, index) => {
            return (
                <li key={'table-page-item-' + index}><a href={page}>{page}</a></li>
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

class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0,
            rows: []
        }
    }

    componentDidMount() {
        $.get(this.props.url, {page: 1, number: 10}, data => {
            this.setState(data);
        }, 'json');
    }

    render() {

        let PaginationComponent = this.props.config.pagination ? <Pagination total={this.state.total}/> : '';

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <ColumnItemsComponent columns={this.props.config.columns}/>
                    <RowItemsComponent columns={this.props.config.columns} rows={this.state.rows}/>
                </table>
                {PaginationComponent}
            </div>
        );
    }
}
module.exports = TableComponent;