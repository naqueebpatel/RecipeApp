import React, { useState } from "react";
import NutritionModal from "./NutritionModal";
import RecipeModal from "./RecipeModal";

function RecipeCard({img,label,calorie,cuisineType,mealType,ingredientLines,item,totalDaily}){
    
    const [NutriModal,setNutriModal]=useState(false);
    const [RecModal,setRecipeModal]=useState(false);


    const openNutritionBox=()=>{
      setNutriModal(true);
    }

    const closeNutritionBox=()=>{
      setNutriModal(false);
    }

    const openRecModal=()=>{
      setRecipeModal(true);
    }

    const closeRecModal=()=>{
      setRecipeModal(false);
    }
    

    return(
    <div>
      <>
      {RecModal&&<RecipeModal
      closeRecModal={closeRecModal}
      ingredientLines={ingredientLines } 
      />
      }
      </>
        <>
        {NutriModal&&<NutritionModal
        closeNutritionBox={closeNutritionBox}
        totalDaily={totalDaily}
        />}
        </>
    <div class="container">
    <div class="wrapper">
      <img src={img} alt="" class="banner-image" />
      <h1> {label}</h1>
        <p>Meal Type   : {mealType}</p>
        <p>Cusine Type : {cuisineType}</p>
        <p>Dish Type   : {item?.dishType}</p>
        <p>Diet Label  : {item?.dietLabels}</p>
        <p>Caution     : {item?.cautions}</p>
     <div class="button-wrapper"> 
     <button class="btn outline" onClick={openNutritionBox}>NUTRITION</button>
       <button class="btn fill" onClick={openRecModal}>RECIPE</button>
     </div>
       </div>
       </div>
       </div>






        // <div>
        // <img src={img} alt="Recipe" />
        // <p>{label}</p>
        // <p>{calorie}</p>
        // <p>{cuisineType}</p>
        // <p>{mealType}</p>
        // </div>
    )
}

export default RecipeCard;