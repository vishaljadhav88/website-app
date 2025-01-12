
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = ({detail}) => {
  const [info, setInfo] = useState(null); // Initialize with null
  const { idMeal } = useParams(); // Get the meal ID from the URL
  
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const jsonData = await response.json();
      if (jsonData?.meals) {
        setInfo(jsonData.meals[0]); // Update state with the first meal
      } else {
        setInfo(null); // If no meals found, set info to null
      }
     // console.log(jsonData);
      
    };

    getInfo(); // Call the function to fetch the meal data
  }, []);
  return (
    <div>
      { !info ? (
        <p>Data Not Found</p>
      ) : (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className='info'>
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions:</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;

