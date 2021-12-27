import React, { useState } from 'react';
import IngredientForm from '../IngredientForm/IngredientForm';
import IngredientList from '../IngredientList/IngredientList';


const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

    const handleAddIngredient = ingredient => {
    const prevIngredients=[...userIngredients, { id: Math.random().toString(), ...ingredient }]
    setUserIngredients(prevIngredients)
      
  };

  const handleRemoveIngredient = id => {
  const remainingIngredients=userIngredients.filter(ingredient => ingredient.id !== id)
  setUserIngredients(remainingIngredients)
  };

  return (
    <div>
      <IngredientForm handleAddIngredient={handleAddIngredient} />

      <section>
        
        <IngredientList
          userIngredients={userIngredients}
          handleRemoveIngredient={handleRemoveIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;