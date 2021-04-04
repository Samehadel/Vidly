import React, { Component } from 'react';
import _ from 'lodash'
import propTypes from 'prop-types';


class Pagination extends Component {


    render() {
        const { numberOfPages, displayedPage, onPageChange } = this.props;

        let hasNext = false;
        let hasPrevious = false;

        if (numberOfPages > 1) {
            hasNext = displayedPage === numberOfPages ? false : true;
            hasPrevious = displayedPage === 1 ? false : true
        }


        let arrayOfNumbers = _.range(1, numberOfPages + 1);

        if(numberOfPages === 1 && displayedPage === 1) arrayOfNumbers = [];

        return (
            <nav aria-label="Page navigation example">
                {arrayOfNumbers.length !== 0 && <ul className="pagination">
                    <li className={this.getClass(hasPrevious)} >
                        <a className="page-link" onClick={() => onPageChange(displayedPage - 1)} href="#">Previous</a>
                    </li>
                    {
                        arrayOfNumbers.map(num =>
                            <li key={num} className={this.getActiveClass(num)}>
                                <a className="page-link" onClick={() => onPageChange(num)} href="#">{num}</a>
                            </li>
                        )
                    }
                    <li className={this.getClass(hasNext)}>
                        <a className="page-link" onClick={() => onPageChange(displayedPage + 1)} href="#">Next</a>
                    </li>
                </ul>}
            </nav>
        );
    }

    getClass(check) {
        return check === false ? 'page-item disabled' : 'page-item'
    }

    getActiveClass(currentPage) {
        const { displayedPage } = this.props;

        return displayedPage === currentPage ? 'page-item active' : 'page-item'
    }
}
Pagination.propTypes = {
    numberOfPages: propTypes.number.isRequired,
    displayedPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination;