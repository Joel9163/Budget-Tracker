import React, { useContext }  from 'react';
import {AppContext} from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
    const {expenses} = useContext(AppContext);
    return (
        <ul class="list-group">
            {expenses.map((expense)=>(<ExpenseItem id= {expense.id} name = {expense.name} cost= {expense.cost}/>))}
        </ul>
    );
}
export default ExpenseList;