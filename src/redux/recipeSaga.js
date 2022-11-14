import {
    all,
    call,
    delay,
    put,
    takeEvery,
} from 'redux-saga/effects'

import * as types from "./actionTypes"
import * as action from "./action"
import * as Api from "./api"


function* onloadRecipeStartAsync() {
    try {
        const response = yield call(Api.loadRecipeApi);
        if (response.status === 200){
            yield delay(500);
            yield put(action.loadRecipeSucces(response.data));
        }
    }catch (error){
        yield put(action.loadRecipeError(error.response.data));
    }
}

function* onLoadRecipe() {
    yield takeEvery(types.LOAD_RECIPE_START, onloadRecipeStartAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga(){
    yield all([...recipeSaga])
}