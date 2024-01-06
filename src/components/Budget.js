import React, {useState, useContext }  from 'react';
import {AppContext} from '../context/AppContext'
const Budget = () => {
    const {budget, set_budget} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(budget);
	const Editing = () => {
		setIsEditing(true);
	};

	const Save = (value) => {
		set_budget(value);
		setIsEditing(false);
	};
    if(isEditing){
        return( <div className = 'alert p-4  alert-info d-flex justify-content-between align-items-center'>
			    <input
				    required='required'
				    type='number'
				    class='form-control mr-3'
				    id='name'
				    value={value}
				    onChange={(event) => setValue(event.target.value)}
			    ></input>
			    <button
				    type='button'
				    class='btn btn-primary'
				    onClick={() => Save(value)}
			    >
                    Save
			    </button>
		    </div>);
    }else{ 
        return (<div class = 'alert alert-info p-3 d-flex justify-content-between align-items-center'>
                    <span>Budget: ${budget}</span>
			        <button type='button' class='btn btn-primary' onClick={Editing}>
				        Edit
			        </button>
                </div>);
    }
}
export default Budget;