import React from "react";

function NutritionModal({closeNutritionBox,totalDaily}){
         

    return(
        <div class="App">
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-content">
          <button class="modal__btn" onClick={closeNutritionBox}>Close &rarr;</button>
          </div>
        </div>
        </div>
      </div>
    )

}

export default NutritionModal;