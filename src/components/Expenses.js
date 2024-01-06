import React, { useContext }  from 'react';
import {AppContext} from '../context/AppContext'
function Expenses () {
    const {expenses} = useContext(AppContext);
    const total = expenses.reduce(
        (accumulator, currentValue) => { return accumulator + currentValue.cost},
        0,
      );
    return (
        <div className = 'alert p-5 alert-warning'>
            <span> Total Spending: ${total}</span>
        </div>
    );
}
export default Expenses;