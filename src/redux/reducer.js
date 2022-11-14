import * as types from "./actionTypes";

const intialState = {
    recipe: [],
    loading: false,
    error: null,
};

const recipeReducer = (state = intialState, action) => {
    switch (action.types) {
        case types.LOAD_RECIPE_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_RECIPE_SUCESS:
            return {
                ...state,
                loading: false,
                recips: action.payload,
            };
        case types.LOAD_RECIPE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default recipeReducer;