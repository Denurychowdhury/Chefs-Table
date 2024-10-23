/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

const Recipies = ({addRecipeToqeue}) => {
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    fetch("recipies.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data))
  }, [])
//   console.log(recipies)
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipies.map((recipe, idx) => (
          <div key={idx} className="card bg-base-100  border-2">
            <figure className="px-4 pt-4">
              <img
                className="md:h-52 w-full rounded-xl"
                src={recipe.recipe_image}
                alt="recipe image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg text-gray-700 font-semibold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-600 text-base">
                {recipe.short_description}
              </p>
              <h3 className="text-lg text-gray-700 font-medium">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul className="ml-8">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx} className="list-disc text-gray-600">
                    {item}
                  </li>
                ))}
                    </ul>
                <div className="flex gap-4">
                        <div className="flex items-center">
                            <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                            <p>{recipe.preparing_time} minute.</p>
                        </div> 
                        <div className="flex items-center">
                            <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                            <p>{recipe.calories} calories.</p>
                        </div> 
               </div>
              <div className="card-actions">
                <button onClick={()=>addRecipeToqeue(recipe)} className="btn bg-green-400 Want to Cook rounded-full px-4 text-xl text-gray-800 mt-6 font-medium">Want to Cook</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipies
