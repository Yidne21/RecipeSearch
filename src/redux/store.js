import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./recipeSaga";

/**
 * This function act as the storage for all the UI componet states
 * and returns all state data
 */
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
