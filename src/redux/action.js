import * as types from "./actionTypes";

export const loadRecipeStart = (query) => {
  console.log(query)
    return {
        type: types.LOAD_RECIPE_START,
        payload: query
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