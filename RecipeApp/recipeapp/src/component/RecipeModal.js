import React from "react";

//show ingredients in list form in order and work on ui/ux of both modals alongwith design and implementation of SearchBar

function RecipeModal({closeRecModal,ingredientLines}){

        return(
            <div class="App">
          <div class="modal-overlay">
            <div class="modal">
              <div class="modal-content">
                <ul class="list">
               {ingredientLines.map((item,ind)=>{
                return(
                  <li key={ind}>{item}</li>
                )
               })}
               </ul>
              <button class="modal__btn" onClick={closeRecModal}>Close &rarr;</button>
              </div>
            </div>
          </div>
          </div>

    )
}

export default RecipeModal;