import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
    const {MealId} = useParams();
    const [info, setInfo]=useState()
    console.log(Mealid);

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
        
    }
    if (MealId != "") {
        getInfo()
    }
  return (

    <div>
        <div className='MealInfo'>
        <img/>
        <div>
            <h1>Recipe detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strIntructions}</p>
            </div>
            </div>
    </div>
    
  )
}

export default MealInfo