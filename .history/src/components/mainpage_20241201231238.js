import React, { useState } from 'react'



const Mainpage = () => {
      const [data,setData] =useState()
      const [Search,setSearch] =useState()


  const handleInput = (event) => {
        setSearch(event.target.value)
  }

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
        const jsonData = await get.json()
        console.log(jsonData.meals);
        setData(jsonData.meals)
    }
    console.log(data);
  return (
    <>
    <div className='container'>
        <div className='SearchBar'>
            <input type='text' placeholder='Enter Dish' onChange={handleInput}/>
            <button onClick={myFun}>Search</button>
            </div>
            <mealCards/>
    </div>

    </>
  )
}

export default Mainpage;
