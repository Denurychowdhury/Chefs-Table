import { useState } from "react";
import Banner from "./Component/Banner";
import Header from "./Component/header";
import OurRecipies from "./Component/OurRecipies";
import Recipies from "./Component/Recipies";
import Sidebar from "./Component/Sidebar";

const App = () => {
  
  const [recipeQeue,setRecipeQeue]=useState([])
  const [removerecipeQeue, setRemoveRecipeQeue] = useState([])
  const[totaltime,setTotalTime]=useState(0)
  const[totalcalories,setTotalCalories]=useState(0)
  const addRecipeToqeue = (recipe) => {
    const isExist = recipeQeue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (!isExist) {
      const newRecipe=[...recipeQeue,recipe]
     setRecipeQeue(newRecipe);
    }
    else {
      alert('Recipe all ready exist in qeue')
   }
  }
  const removeRecipeToqeue = (id) => {
    const removeCard = recipeQeue.find(recipe => recipe.recipe_id ===id);
    // find recipe to remove
    const updateCooking = recipeQeue.filter(recipe => recipe.recipe_id!==id)
    setRecipeQeue(updateCooking)
    setRemoveRecipeQeue([...removerecipeQeue,removeCard])
  }
  // console.log(recipeQeue);
  const calculateTimeAndCalory = (time,calories) => {
    setTotalTime(totaltime + time);
    setTotalCalories(totalcalories+calories)
  }
  return (
    <div className="w-11/12 mx-auto">
      {/* header section */}
     <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* our recipies section section */}
      <OurRecipies></OurRecipies>
      {/* recipe card section */}
      <section className="flex flex-col md:flex-row gap-4">
        {/* card section */}
        <Recipies addRecipeToqeue={addRecipeToqeue}></Recipies>
        {/*sidebar section */}
        <Sidebar
          recipeQeue={recipeQeue}
          removeRecipeToqeue={removeRecipeToqeue}
          removerecipeQeue={removerecipeQeue}
          calculateTimeAndCalory={calculateTimeAndCalory}
          totaltime={totaltime}
          totalcalories={totalcalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;