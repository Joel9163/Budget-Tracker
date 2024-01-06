import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
const AddExpense = () =>{
    const [name, setname] = useState("");
    const [cost, setcost] = useState("");
    const {add_expense} = useContext(AppContext);
    const Submit = (event) =>{
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };
        add_expense(expense);
    }
    return(
        <form onSubmit = {Submit}>
            <div class = "form-group">
                <div class="col-sm">
                    <label for="Expense_Name">Expense Name:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        required = "required" 
                        id="Expense_Name" 
                        placeholder="Enter Expense"
                        value = {name}
                        onChange = {(event) => setname(event.target.value)}
                        ></input>
                </div>
            </div>
            <div class = "form-group">
                <div class="col-sm">
                    <label for="Expense_Cost">Expense Cost:</label>
                    <input 
                        type="text" 
                        class="form-control"
                        required = "required" 
                        id="Expense_Cost" 
                        placeholder="Enter Cost" 
                        value = {cost}
                        onChange = {(event) => setcost(event.target.value)}></input>
                </div>
            </div>
            <div class = "form-group">
                <div class="col-sm">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
}
export default AddExpense;
