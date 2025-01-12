import React, { useState,useEffect } from 'react'
import { NavLink, json, useParams } from 'react-router-dom';

const Recipe = ({detail}) => {
    const [data, setData] = useState()
    const [Info, SetInfo] = useState()
    const {meal} = useParams();
    
  
        
       const getInfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
    if(meal != ""){
      getInfo()
    }

   
     
     
  return (
    <>
    {!data ?  "Not Found" :  
    
    <div className='msg'>
      
     <img src={Info.strMealThumb}/>
        <div className='MealInfo'>
        <h1>Recipe Detail's</h1>
         <button>{Info.strMeal}</button>
        <h3>Intructions :</h3>
        <p>{Info.strInstructions}</p>
        </div>
    </div> }
        
    </>
     
     
  )
}

export default Recipe;
