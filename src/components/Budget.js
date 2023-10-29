import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const { dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value < expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0)) {
            alert('Budget cannot lower than expenses');
            return;
        }
        setNewBudget(event.target.value);
    }
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    return (
    <div className='alert alert-secondary'>
    <span>Currency: {currency}</span>
    <select className="custom-select" id="inputGroupSelect02" onChange={handleCurrencyChange}>
        <option defaultValue value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
    </select>
    <br></br>
    <br></br>
    <span>Budget: {currency}{budget}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;