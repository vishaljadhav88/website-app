import React, { useState, useEffect } from 'react'
import { NavLink, json, useParams } from 'react-router-dom';

const MealInfo = ({detail}) => {
    // const [data, setData] = useState()
  
    const [Info, SetInfo] = useState()
    const {mealId} = useParams();
    
  
 
       const getInfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
    if(mealId !== ""){

      getInfo()
    }

   

    
     
  return (
    <div className="MealInfo">
      {Info ? (
        <>
          <div className="Info">
            <h1>{Info.strMeal}</h1>
            <img src={Info.strMealThumb} alt={Info.strMeal} />
            <div className="MealDetails">
              <h3>Instructions:</h3>
              <p>{Info.strInstructions}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Meal Not Found</div>
      )}
    </div>
  );
};


export default MealInfo;

