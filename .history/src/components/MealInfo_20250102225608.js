import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
   const { MealId } = useParams();
   const [Info, SetInfo] = useState()
   console.log(MealId);
   


   useEffect(() => {
      if (MealId) {  // Check if MealId exists
         const getInfo = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
            const jsonData = await get.json();
            if (jsonData.Meals && jsonData.Meals[0]) {
               SetInfo(jsonData.Meals[0]);
            }
         };
         getInfo();
      }
   }, [MealId]); // Re-run the effect if MealId changes

   return (
      <div>
         {!Info ? "Data Not Found" :
            <div className="mealInfo">
               <img src={Info.strMealThumb} alt="meal" />
               <div className="Info">
                  <h1>Recipe Detail</h1>
                  <button>{Info.strMeal}</button>
                  <h3>Instructions</h3>
                  <p>{Info.strInstructions}</p>
               </div>
            </div>
         }
      </div>
   );
}

export default MealInfo;

