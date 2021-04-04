import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {

    columns = [
        { key: 'empty1' },
        { path: 'title', label: 'Title', content: (item) => <Link to={`/movies/${item._id}`}>{item.title}</Link> },
        { path: 'genre', label: 'Genre' },
        { path: 'stock', label: 'Stock' },
        { path: 'rating', label: 'Rating' },
        { path: 'liked', label: 'Liked', content: (item) => <Like isLiked={item.liked} likeId={item._id} onLike={() => this.props.onLike(item._id)} /> },
        { key: 'delete', content: (item) => <button className="btn btn-danger" onClick={() => this.props.onDelete(item)}>Delete</button> }
    ]

    render() {
        const { items, onDelete, onLike, onSort, sortColumn } = this.props;

        return (
            <Table
                items={items}
                sortColumn={sortColumn}
                columns={this.columns}
                onDelete={onDelete}
                onLike={onLike}
                onSort={onSort}
            />
        );
    }
}
export default MoviesTable;