import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
function RemainingBudget () {
    const {expenses, budget} = useContext(AppContext);
    const total = expenses.reduce(
        (accumulator, currentValue) => { return accumulator + currentValue.cost},
        0,
      );
    const alert_type = budget>= total? 'alert p-5 alert-success': 'alert p-5 alert-danger';
    return (
        <div className = {alert_type}>
            <span> Remaining Budget: ${budget-total}</span>
        </div>
    );
}
export default RemainingBudget;