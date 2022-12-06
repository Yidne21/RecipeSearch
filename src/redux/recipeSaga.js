import {
    all,
    call,
    put,
    takeEvery,
    fork
} from 'redux-saga/effects'

import * as types from "./actionTypes"
import * as action from "./action"
import * as Api from "./api"


/**
 * This fuction perform request response to the api endpoint
 * and if the api request status code is 200 it distracture the  response data and 
 * send to the reducer.
 * @param {*} payload
 */
function* onloadRecipeStartAsync({payload}) {
    try {
        const response = yield call(Api.loadRecipeApi, payload);
        if (response.status === 200){
            const { hits:[...recipes] } = response.data;
            yield put(action.loadRecipeSucces(recipes));        }
    }catch (error){
        yield put(action.loadRecipeError(error.response.data));
    }
}
/**
 * This is a generator function which initiate the loadRecipeStartAsync function to perform 
 * api request response.
 */
function* onLoadRecipe() {
    yield takeEvery(types.LOAD_RECIPE_START, onloadRecipeStartAsync);
}

/**
 * This function controll concurrency between different api request and response.
 */
const recipeSaga = [fork(onLoadRecipe)];

/**
 * This function export all the data to the reducer.
 */

export default function* rootSaga(){
    yield all([...recipeSaga])
}