import React, { Component } from 'react';


// columns : array
// onSort : func
// sortColumn: object

class TableHeader extends Component {

    raiseSortEvent = (sortBy) => {
        const sortColumn = { ...this.props.sortColumn };

        if (sortBy === sortColumn.sortBy) {
            sortColumn.sortOrder = sortColumn.sortOrder === 'asc' ? 'desc' : 'asc'
        } else {
            sortColumn.sortBy = sortBy;
        }

        this.props.onSort(sortColumn);
    }

    renderSortIcon = (column) => {
        const {sortColumn} = this.props;

        if(sortColumn.sortBy !== column.path) return null;

        if(sortColumn.sortOrder === 'asc') return <i className='fa fa-sort-asc'/>

        return <i className='fa fa-sort-desc'/>
    }
    render() {
        const { columns } = this.props;

        return (
            <thead>
                <tr>
                    {columns.map(column =>
                        <th className='clickable' key={column.key || column.path} onClick={() => this.raiseSortEvent(column.path)}>
                            {column.label} {this.renderSortIcon(column)} 
                        </th>)}
                </tr>

            </thead>
        );
    }
}



export default TableHeader;