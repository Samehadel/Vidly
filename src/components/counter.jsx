import React, { Component } from 'react';

/**
 * Controlled Component
 * Doesn't have state because it's controlled by its parent
 */

class Counter extends Component {


    render() {

        //console.log(`Render Counter ${this.props.counter.id}`);

        const { counter, onIncrement, onDecrement, onDelete } = this.props;
        const disapleDecrement = counter.value === 0 ? true : false

        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formateCount()}</span>

                <button type="button" className="m-2 btn btn-success btn-sm"
                    onClick={() => onIncrement(counter)}>+</button>

                <button type="button" className="m-2 btn btn-secondary btn-sm"
                    onClick={() => onDecrement(counter)} disabled={disapleDecrement}>-</button>

                <button className="m-2 btn btn-danger btn-sm" onClick={() => onDelete(counter)}>Delete</button>
            </div>
        );
    }

    formateCount = () => {
        const { value } = this.props.counter

        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = 'm-2 badge badge-';
        classes += (this.props.counter.value === 0 ? 'warning' : 'primary');

        return classes;
    }

    /*
    ** Hook Methods
    *
    componentDidUpdate(prevProps, prevState){
        console.log(`componentDidUpdate Counter ${this.props.counter.id}`);

        if(prevProps.counter.value !== this.props.counter.value) console.log('Call Server');
    }

    componentWillUnmount(){
        console.log(`Unmount Counter ${this.props.counter.id}`);
    }

    componentDidMount(){
        console.log(`Mount Counter ${this.props.counter.id}`);
    }
    */
}
export default Counter;