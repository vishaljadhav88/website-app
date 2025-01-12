import React from 'react'
import { NavLink } from 'react-router-dom';
import MealInfo from './MealInfo';

// import { MealInfo } from './MealInfo';
const MealCards = ({detail}) => {
       console.log(detail);
       
  return(
    <div className='meals'>
      {!detail ? " " : 
      detail.map((curlItem)=>{
        return(
        <div className='mealImg' key={curlItem.idMeal}>
       <img src={ curlItem.strMealThumb}  alt={curlItem.strMeal}/>
        <p>{curlItem.strMeal}</p>
       <NavLink to={`/${curlItem.idMeal}`}><button >Recipe</button></NavLink>
       </div>
        
        
        
      )
    }) 
    }
 <div>
          <MealInfo detail={detail} />
        </div>

</div>


)
}
         
        

export default MealCards




