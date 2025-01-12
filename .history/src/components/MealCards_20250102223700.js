import React from 'react'
import { NavLink } from 'react-router-dom';

// import { MealInfo } from './MealInfo';
const MealCards = ({detail}) => {
       console.log(detail);
       
  return(
    <div className='meals'>
      {!detail ? " " : detail.map((curlItem)=>{
        return(
        <div className='mealImg'>
       <img src={ curlItem.strMealThumb}/>
        <p>{curlItem.strMeal}</p>
       <NavLink to={`/${curlItem.mealId}`}><button >Recipe</button></NavLink>
       </div>
        
        
      )
    }) 
    }
</div>
)
}
         
        

export default MealCards




