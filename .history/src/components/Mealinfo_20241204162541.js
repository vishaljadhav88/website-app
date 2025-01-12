import React from 'react'
import { useParams } from 'react-router-dom'
const MealInfo = () => {
    const {Mealid} = useParams()
  return (
    <div>MealInfo</div>
  )
}

export default MealInfo
