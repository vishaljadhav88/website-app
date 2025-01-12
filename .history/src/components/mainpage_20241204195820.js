import React, { useState } from 'react'
import MealCard from './MealCards'



const Mainpage = () => {
  const [data,setData] =useState()
  const [Search,setSearch] =useState()


const handleInput = (event) => {
    setSearch(event.target.value)
}
const myFun = async () =>{
  if(setSearch == ""){
      setMsg("Please Enter Something")
  }
      
  
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

export default Mainpage
