import './App.css';
import React, { useState, useEffect } from "react";
import Loading from './component/loading';
import Meal from './component/meal';
import { data } from './data'
import Navbar from './component/navbar';
const allCategories = ['all',...new Set(data.map((data) => data.category))];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  
  useEffect(() => {
    setTimeout(()=>{
      setMenu(data)
      setIsLoading(false)
    }, 3000)
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  const filter = ( category ) => {      
    if(category === 'all')  {
      setMenu(data)
      return;
      
    }
    else {
      const newMeals = data.filter((meal)=> meal.category === category)
      setMenu(newMeals);
      
    }

  }


  return (
    <div className="App">
    <h1>Our Menu</h1>
 <Navbar categories={categories} filter={filter}/>
    <Meal menu = {menu} />
    
  
    </div>
  );
}

export default App;
