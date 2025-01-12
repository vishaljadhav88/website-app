import React, { useState } from 'react'

const Mainpage = () => {
      const [data, setData]=useState

  const myFun = async() =>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=cake`);
    const jsonData =await get.json()
     console.log(jsonData.Meals);
     setData(jsonData.Meals)
  }
  console.log(data);
  
  return (
    < >
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter Dish' />
          <button onClick={myFun}>Search</button>
    </div>
    </div>

    </>
  )
}

export default Mainpage