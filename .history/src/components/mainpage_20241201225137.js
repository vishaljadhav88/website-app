import React from 'react'



const Mainpage = () => {

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Cake`);
        const jsonData = await get.json()
        console.log(jsonData.meals);
        
    }
  return (
    <>
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dish'/>
            <button onClick={myFun}>Search</button>
            </div>
    </div>

    </>
  )
}

export default Mainpage;