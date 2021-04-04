import React, { Component } from 'react';
import Like from '../common/like';

// items: array
// onLike: func
// onDelete: func

class TableBody extends Component {

    renderCell(item, column) {
        if (column.content) return column.content(item)

        return item[column.path];
    }

    generateCellKey(item, column){

        return item._id + (column.path || column.key)
    }

    render() {
        const { items, columns } = this.props;

        return (
            <tbody>
                {
                    items.map(item =>
                        <tr key={item._id}>
                            {columns.map(col => <td key = {this.generateCellKey(item, col)}>{this.renderCell(item, col)}</td>)}
                        </tr>
                    )
                }
            </tbody>
        );
    }
}

export default TableBody;