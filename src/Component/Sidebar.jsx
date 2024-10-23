/* eslint-disable react/prop-types */
// import React from "react"

const Sidebar = ({ recipeQeue, removeRecipeToqeue, removerecipeQeue,calculateTimeAndCalory,totaltime,totalcalories }) => {
  console.log(recipeQeue)
  return (
    //   want to cook
    <div className="md:w-1/3 border-2 rounded-lg text-gray-600 p-2 bg-base-100">
      {/* want to qeue table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center">
          Want to Cook {recipeQeue.length}
        </h2>
        <table className="text-sm table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeQeue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} Categories</td>
                <td>
                  <button
                    onClick={() =>{removeRecipeToqeue(recipe.recipe_id),calculateTimeAndCalory(recipe.preparing_time,recipe.calories)}}
                    className=" bg-green-400 rounded-full px-2 py-1 md:px-3 md:py-2  text-gray-800"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* cooking ongoing */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center">
          Want to Cook {removerecipeQeue.length}
        </h2>
        <table className="text-sm table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {removerecipeQeue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} Categories</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Times={totaltime} minutes</td>
              <td>Total Calories={totalcalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* currently cook */}
    </div>
    // cook ongoing
  )
}

export default Sidebar
