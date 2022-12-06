import * as types from "./actionTypes";


/**
 * This function called when the user hits the search button
 * @param {*} query 
 * @returns the action type and the recipe  name or query to search
 */
export const loadRecipeStart = (query) => {
  // console.log(query)
    return {
        type: types.LOAD_RECIPE_START,
        payload: query
    }
}

/**
 * This function fired when loadRecipeStart 
 * action is succed and get the 200 status code from the api server
 * @param {*} recipes 
 * @returns the acion types and the recipe got from the api
 */
export const loadRecipeSucces = (recipes) => {
  // console.log("loadRecipeSucces Called", recipes)
  return {
    type: types.LOAD_RECIPE_SUCESS,
    payload: recipes
  };
};

/**
 * This function called when there is an error occured during api 
 * fetching
 * @param {*} error 
 * @returns returns the action type and the error payload
 */
export const loadRecipeError = (error) => {
  return {
    type: types.LOAD_RECIPE_ERROR,
    payload: error
  };
};