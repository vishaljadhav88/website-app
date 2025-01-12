import React from 'react'
import  { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
   const {MealId} = useParams();
   const [Info, SetInfo] = useState()
   console.log(MealId);

   const getInfo = async () =>{
       const get =  await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
       const jsonData = await get.json();
       console.log(jsonData.Meals[0]);
       SetInfo(jsonData.Meals[0])
      
   }
   if(MealId != ""){
       getInfo()
   }

  return (
    
     <div>
    
    {!Info ? "Data Not Found" :
      <div className='mealInfo'>
      <img src={Info.strMealThumb} alt=' '/>
      <div className='Info'>
         <h1>Recipe Detail</h1>
         <button>{Info.strMeal}</button>
         <h3>Instruction's </h3>
         <p>{Info.strInstructions}</p>
         </div>
         </div>
         
         
}
         </div>
  )
    
}

    
   
 

export default MealInfo

