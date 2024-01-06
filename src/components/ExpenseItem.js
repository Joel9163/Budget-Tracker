import React, { useContext }  from 'react';
import {AppContext} from '../context/AppContext';
import {TiDelete} from 'react-icons/ti';
const ExpenseItem = (props) => {
    const {delete_expense} = useContext(AppContext);
    return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div> 
                <span class='badge badge-secondary badge-pill mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size = '1.5em' onClick= {() => delete_expense(props.id)}></TiDelete>
            </div>
        </li>
    );
}
export default ExpenseItem;