import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
    const {Mealid} = useParams();
    const [info, setInfo]=useState()
    console.log(mealid);

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
        
    }
    if (mealId != "") {
        getInfo()
    }
  return (

    <div>
        <div className='mealinfo'>
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
