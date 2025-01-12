import React from 'react'
import  { useState } from 'react'
import { data, useParams } from 'react-router-dom'

const MealInfo = () => {
   const {MealId} = useParams();
   const [Info, setInfo] = useState()
   console.log(MealId);

   const getInfo = async () =>{
       const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
       const jsonData = await get.json();
       console.log(jsonData.Meals[0]);
       setInfo(jsonData.Meals[0])
   }
   if(Info != " "){
       getInfo()
   }

  return (
    <div className='MealInfo'>
      <img/>
      <div className='Info'>
         <h1>Recipe Detail</h1>
         <button>{Info.strInfo}</button>
         <h3>Instruction's</h3>
         <p>{Info.strInstructions}</p>
         </div>
         <div/>
         </div>
    
  )
  }

export default MealInfo
