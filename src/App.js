import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/RemainingBudget';
import Expenses from './components/Expenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';
import './App.css';
function App () {
  return (
      <AppProvider>
          <div className='container'>
          	<h1 className='mt-3'>Expense Tracker</h1>
          	<div className='row mt-3'>
	  		<div className='col-sm'>
	  			<Budget />
	  		</div>
	  		<div className='col-sm'>
	  			<RemainingBudget />
	  		</div>
	  		<div className='col-sm'>
	  			<Expenses />
	  		</div>
	  	</div>
          	<h3 className ='mt-3'> Expenses</h3>
	  	<div className= 'row mt-3'>
	  		<div className='col-sm'>
          			<ExpenseList />
			</div>
      		</div>
      		<h3 className ='mt-3'> Add Expenses</h3>
      		<div className= 'row mt-3'>
        		<div className='col-sm'>
          			<AddExpense />
			</div>
      		</div>
    	</div>
      </AppProvider>
  );
};

export default App;
