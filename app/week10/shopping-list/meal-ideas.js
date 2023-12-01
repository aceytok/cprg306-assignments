"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    async function loadMeals(){
        try {
          if (ingredient == ""){
            setMeals([]);
            return;
          }
          const data = await fetchMealIdeas(ingredient);
          if (data!=null){
            setMeals(data);
          }
          else {
            setMeals([]);
          } 
        }
        catch (e) {
          console.log(e);
        }
    }
    
      useEffect(() => {
        loadMeals(ingredient);
      }, [ingredient]);
    
        return(
          <div className="flex-1 max-w-sm m-2">
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <p className="text-l">Here are some meal ideas using {ingredient}: </p>
            <ul>
              {meals.map(meal => (
                <li key = {meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                  {meal.strMeal}
                </li>))}
            </ul>  
          </div>
        )
}
