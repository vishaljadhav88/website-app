import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
    const {Mealid} = useParams();
    const [info, setInfo]=useState()
    console.log(mealid);

    const getInfo = asyncs () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        
    }
    if (mealid != "") {
        getInfo()
    }
  return (

    <div>
        <img/>
        <div>
            <h1>Recipe detail</h1>
            <button>{data.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{data.strIntructions}</p>
            </div>
    </div>
    
  )
}

export default MealInfo
