import React, { useState, useEffect } from 'react'
import { NavLink, json, useParams } from 'react-router-dom';

const Recipe = ({}) => {
    // const [data, setData] = useState()
  
    const [Info, SetInfo] = useState()
    const {mealId} = useParams();
    
  
 
       const getInfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
    if(mealId != ""){
      getInfo()
    }

   
     
     
  return (
    <>
    {!Info ?  "Not Found" :  
      
    <div className='MealInfo'>
      <div className='Info'>

      </div>
      
     <img src =  {Info.strMealThumb} alt='meal'/>

        <div className='MealInfo'>
        <h1>Recipe Detail's</h1>
         <button>{Info.strMeal}</button>
        <h3>Intructions :</h3>
        <p>{Info.strInstructions}</p>
        </div>
    </div> 
    }
        
    </>
     
     
  )
}

export default Recipe;

