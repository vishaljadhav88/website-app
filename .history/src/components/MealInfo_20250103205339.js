import React, { useState, useEffect } from 'react'
import { NavLink, json, useParams } from 'react-router-dom';

const MealInfo = ({detail}) => {
    // const [data, setData] = useState()
  
    const [info, SetInfo] = useState()
    const {idMeal} = useParams();
    
  
 
       const getinfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
    if(info !== ""){

      getinfo()
    }

   

    
     
  return (
    <>
    {!info ?  "Not Found" :  
      
    <div className='mealInfo'>
      <div className='info'>
        <div className='msg'/>

          

      </div>
      
      
     <img src={info.strMealThumb} alt={info.strMeal}/>
      
        <div className='mealInfo'>
        <h1>Recipe Detail's</h1>
         <button>{info.strMeal} <h3>Instructions:</h3></button>
        
         
        </div>
        
    </div> 
  
    }
        
    </>
     
     
  )
}


export default MealInfo;

