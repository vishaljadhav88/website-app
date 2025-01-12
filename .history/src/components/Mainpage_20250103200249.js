import React, { useState } from 'react';
import MealCards from './MealCards';

const Mainpage = () => {
  const [data, setData] = useState([]); // Initialize with an empty array
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for the API call

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search == "")
      setMsg("Please Enter")
      
      
      
      
      
      
      // Clear data when the input is empty
      return;
    }

    setLoading(true); // Start loading
    setMsg(''); // Clear previous messages

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      
      if (jsonData.meals) {
        setData(jsonData.meals); // Update state with meal data
      } else {
        setData([]); // Clear data if no meals are found
        setMsg('No results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMsg('An error occurred, please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    
  
    <>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
          <input 
            type='text' 
            placeholder='Enter Dish' 
            value={search} 
            onChange={handleInput} 
          />
          <button onClick={myFun}>Search</button>
        </div>
        
        {loading && <div>Loading...</div>} {/* Show loading indicator */}
        
        {msg && <div className="message">{msg}</div>} {/* Show message (error or no results) */}
        
        <div>
          <MealCards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
