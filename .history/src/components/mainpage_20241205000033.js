import React, { useState } from 'react'
import MealCards from './MealCards'
const Mainpage = () => {
     
      const [data,setData] =useState()
      const [Search,setSearch] =useState()
    
      const handleInput = (event) =>{
          setSearch(event.target.value)
      }

  const myFun = async() =>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
    const jsonData =await get.json()
     console.log(jsonData.meals);
     setData(jsonData.meals)
  }
  console.log(data);
  
  return (
    < >
       <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
           <input type='text' placeholder='Enter Dish' onChange={handleInput} />
           <button onClick={myFun}>Search</button>
     </div>
    <div>
      <MealCards detail={data}/>
    </div>
     </div>





     </>
  )
}

export default Mainpage