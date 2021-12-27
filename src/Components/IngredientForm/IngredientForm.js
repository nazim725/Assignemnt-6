import React, { useState } from 'react';
import Card from '../Card/Card';


import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddIngredient({ title: enteredName, amount: enteredAmount });
    event.target.reset();
  };

  const handleNameChange=e=>{
    setEnteredName(e.target.value)
  }
  const handleAmountChange=e=>{
    setEnteredAmount(e.target.value)
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              onChange={handleAmountChange}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;