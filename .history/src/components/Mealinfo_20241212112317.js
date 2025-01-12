import React from 'react'
import { NavLink } from 'react-router-dom';
// import { MealInfo } from './MealInfo';
const MealInfo = () => {
  const {MealId} = useParams();
  const [Info, SetInfo] = useState()
  console.log(MealId);


  const getInfo = async () =>{
    const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);

       
  return(

    <div className='meals'>
      {!detail ? " " : detail.map((curlItem)=>{
        return(
        <div className='mealImg'>
        <img src={curlItem.strMealThumb}/>
        <p>{curlItem.strMeal}</p>
       <NavLink to={`/${curlItem.idMeal}`}><button >Recipe</button></NavLink>
       </div>
        
        
      )
    }) 
    }
</div>
)
}
         
        

export default MealCards



