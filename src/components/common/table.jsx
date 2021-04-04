import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';


const Table = ({ items, sortColumn, columns, onDelete, onLike, onSort }) => {

    return (
        <table className='table table-striped'>

            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />

            <TableBody 
                items={items}
                onLike={onLike}
                onDelete={onDelete}
                columns={columns} />

        </table>
    );
}

export default Table;