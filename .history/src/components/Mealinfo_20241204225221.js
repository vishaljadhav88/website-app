import React from 'react'
import { data, useParams } from 'react-router-dom'

const MealInfo = () => {
   const {MealId} = useParams();
   const [Info, setInfo] = useState()
   console.log(MealId);

   const getInfo = async () =>{
       const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
       const jsonData = await get.json();
       console.log(jsonData.Meals[0]);
       setInfo(jsonData.Meals[0])
   }
   if(MealId != " "){
       getInfo()
   }

  return (
    j
  )
  }

export default MealInfo
