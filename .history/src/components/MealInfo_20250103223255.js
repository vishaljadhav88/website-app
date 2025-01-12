import React, { useState, useEffect } from 'react'
import { json, useParams } from 'react-router-dom';

const MealInfo = ({detail}) => {
    // const [data, setData] = useState()
  
    const [info, SetInfo] = useState()
    const {idMeal} = useParams();
    console.log(idMeal)
    

       const getinfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
       if(info !== ""){

      getinfo(); // Call the API when the component mounts
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

