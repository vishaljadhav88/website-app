import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
  const [info, setInfo] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { idMeal } = useParams(); // Get the meal ID from the URL
  
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const jsonData = await response.json();
        
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]); // Update state with the first meal
        } else {
          setInfo(null); // If no meals found, set info to null
        }
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false when fetch is done
      }
    };

    getInfo(); // Call the function to fetch the meal data
  }, [idMeal]);

  // Render loading or error message
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
