import React, { Component } from 'react';
import queryString from 'query-string';

const ProductDetails = ({location, match}) => {

    const result = queryString.parse(location.search)

    console.log(result);
    return ( 
        <div>
            <h1>Product Details for id: {match.params.id}</h1>
        </div>
     );

}
 
export default ProductDetails;