import React, { useState } from 'react'
import MealCard from './MealCards'



const Mainpage = () => {
  const [data,setData] =useState()
  const [Search,setSearch] =useState()


const handleInput = (event) => {
    setSearch(event.target.value)
}
const myFun = async () =>{
  if(search == ""){
      setMsg("Please Enter Something")
  }else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
      const jsonData = await get.json();
  console.log(jsonData.meals);
  setData(jsonData.meals)
  
  return (
    <>
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dish' onChange={handleInput}/>
                  <button onClick={myFun}></button>
            <MealCard detail={data}/>
              
              
            </div>
    </div>

    </>
  )
}

export default Mainpage;