import React, { Component } from 'react';

class Like extends Component {

    render() { 
        
        const {isLiked, likeId, onLike} = this.props;

        return ( 
            <i className={this.getLikeClass(isLiked)} aria-hidden="true" onClick={() => onLike(likeId)}></i>
         );
    }

    getLikeClass(isLiked){
        const likeClass = isLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'

        return likeClass;
    }
}
 
export default Like;