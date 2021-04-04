import React from 'react';
import Counter from './counter';


/**
 * Controlled Component
 * Doesn't have state because it's controlled by its parent
 */
/**
 * Statless Functional Component 
 * Can't implement hooks lifecycle
 */

const Counters = (props) => {
    
    //console.log(`Render Counters`);

    const { counters, onReset, onIncrement, onDecrement, onDelete } = props;
    
    return (

        <div>
            <button className="m-2 btn btn-secondary btn-sm" onClick={onReset} >Reset</button>
            {
                counters.map(counter =>
                    <Counter key={counter.id} 
                             counter={counter}
                             onIncrement={onIncrement}
                             onDecrement={onDecrement}
                             onDelete={onDelete}
                    />)
            }
        </div>
    );

}

export default Counters;