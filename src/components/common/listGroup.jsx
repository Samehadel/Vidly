import React, { Component } from 'react';
import propTypes from 'prop-types';

class ListGroup extends Component {


    render() {

        const { onFilter, items, currentSelection, nameProperty, idProperty } = this.props;

        return (
            <div className="list-group m-3">
                {
                    items.map(item =>
                        <a key={item[idProperty]} href="#" className={this.getClass(item[nameProperty], currentSelection)}
                            onClick = { () => onFilter(item[nameProperty])}>
                            {item[nameProperty]}
                        </a>)
                }

            </div>
        );
    }
    getClass(itemName, currentSelection){
        return itemName === currentSelection ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
    }
}

ListGroup.defaultProps = {
    nameProperty: 'name',
    idProperty: 'id'
}

ListGroup.propTypes = {
    onFilter: propTypes.func.isRequired,
    items: propTypes.array.isRequired,
    currentSelection: propTypes.string.isRequired
}
export default ListGroup;