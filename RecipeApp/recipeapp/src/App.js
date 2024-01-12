import './App.css';
import { useEffect, useState } from 'react';
import RecipeCard from './component/RecipeCard';


function App(){

const [data,setData]=useState();
const [search,setSearch]=useState("");
const [query,setQuery]=useState("chicken");

const App_Id="ca508253";
const App_Key="0fd364ca21c243248025b54a96bd695b";
// const reqApi=`https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_Key}`;



useEffect(()=>{
  async function fetchData(){
      const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
      const data=await response.json();
      setData(data.hits);
}
fetchData()
},[query])

console.log(data);

const handleSearchQuery=(event)=>{
        const {value}=event.target;
        setSearch(value);
}

const UpdateSearch=(event)=>{
  event.preventDefault();
  setQuery(search);
}

return(
  <div >
    {/* <form onSubmit={UpdateSearch} >
    <input type="text" id="searchBar" value={search} onChange={handleSearchQuery}/>
      <button>SEARCH</button>
      </form> */}
      <section class="webdesigntuts-workshop">
        <form onSubmit={UpdateSearch}>		    
            <input type="search" placeholder="What are you looking for?" value={search} onChange={handleSearchQuery} /> 		    	
            <button>Search</button>
        </form>
     </section>
    <div style={{display:"flex",flexWrap:"wrap"}} /*apply flex here not in app.css as it may not work//spent 4 hrs on this */>  
    {data?.map((item)=>{
      return(
        <RecipeCard 
        img={item.recipe.image}
        label={item.recipe.label}
        calorie={item.recipe.calories}
        cuisineType={item.recipe.cuisineType}
        mealType={item.recipe.mealType}
        ingredientLines={item.recipe.ingredientLines}
        totalDaily={item.recipe.totalDaily}
        item={item.recipe}
        />
      )
    })}
    </div>
    </div>
)

}
export default App;
