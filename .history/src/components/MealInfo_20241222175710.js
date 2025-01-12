import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
   const { MealId } = useParams();
   const [Info, SetInfo] = useState(null);  // Start with null instead of undefined

   // Fetch the meal data when the component mounts or MealId changes
   useEffect(() => {
       if (MealId) {
           const getInfo = async () => {
               try {
                   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
                   const jsonData = await response.json();
                   console.log(jsonData.Meals[0]);
                   SetInfo(jsonData.Meals[0]);
               } catch (error) {
                   console.error('Error fetching data:', error);
               }
           };
           getInfo();
       }
   }, [MealId]);  // Trigger the effect when MealId changes

   return (
     <div>
        {!Info ? "Data Not Found" :
           <div className='MealInfo'>
              <img src={Info.strMealThumb} alt={curlItem.strMeal} />
              <div className='Info'>
                 <h1>Recipe Detail</h1>
                 <button>{Info.strMeal}</button>
                 <h3>Instruction's </h3>
                 <p>{Info.strInstructions}</p>
              </div>
           </div>
        }
     </div>
   );
}

export default MealInfo;
