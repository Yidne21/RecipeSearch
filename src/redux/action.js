import * as types from "./actionTypes";

export const loadRecipeStart = () => {
    return {
        type: types.LOAD_RECIPE_START,
    }
}

export const loadRecipeSucces = (recipes) => {
  //console.log("loadRecipeSucces Called", recipes)
  return {
    type: types.LOAD_RECIPE_SUCESS,
    payload: recipes
  };
};

export const loadRecipeError = (error) => {
  return {
    type: types.LOAD_RECIPE_ERROR,
    payload: error
  };
};