import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDetails from './productDetails';
class Products extends Component {

    procuts = [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'}
    ]
    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <ul class="list-group">
                    {this.procuts.map(product => <li className="list-group-item clickable" ><Link to={`/products/${product.id}`}>{product.name}</Link></li> )}
                    
                </ul>

                <Route path='/products/:id' component={ ProductDetails }/>
            </div>
        );
    }
}

export default Products;