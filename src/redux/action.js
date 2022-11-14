import * as types from "./actionTypes";

export const loadRecipeStart = () => {
    return {
        type: types.LOAD_RECIPE_START,
    }
}

export const loadRecipeSucces = () => {
  return {
    type: types.LOAD_RECIPE_SUCESS,
  };
};

export const loadRecipeError = () => {
  return {
    type: types.LOAD_RECIPE_ERROR,
  };
};