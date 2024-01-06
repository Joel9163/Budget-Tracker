import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	budget: 2000,
	expenses: [
        { id: uuidv4(), name: 'Placeholder', cost: 0 }
    ],
};

export const AppContext = createContext(initialState);

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
    function delete_expense(id) {
        dispatch({
          type: 'DELETE_EXPENSE',
          payload: id
        });
      }
    
      function add_expense(expense) {
        dispatch({
          type: 'ADD_EXPENSE',
          payload: expense
        });
      }
      function set_budget(budget) {
        dispatch({
          type: 'SET_BUDGET',
          payload: budget
        });
      }
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				add_expense,
                delete_expense,
                set_budget
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
