const [info, setInfo] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { mealId } = useParams();

const MealInfo = ({detail}) => {
    // const [data, setData] = useState()
  
    const [Info, SetInfo] = useState()
    const {mealId} = useParams();
    
  
 
       const getInfo = async () =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0])
         SetInfo(jsonData.meals[0])
       }
       
    if(mealId !== ""){

      getInfo()
    }

   

    
     
  return (
    <>
    {!Info ?  "Not Found" :  
      
    <div className='MealInfo'>
      <div className='Info'>
        <div className='msg'/>

          

      </div>
      
     <img src =  {Info.strMealThumb} alt='MealId'/>

        <div className='MealInfo'>
        <h1>Recipe Detail's</h1>
         <button>{Info.strMeal}</button>
        <h3>Intructions :</h3>
        <p>{Info.strInstructions}</p>
        </div>
    </div> 
    }
        
    </>
     
     
  )
}

export default MealInfo;

