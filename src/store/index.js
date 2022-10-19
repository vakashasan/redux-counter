import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ReducerCounter } from './reducer/Reducer'

const store = createStore(ReducerCounter , applyMiddleware(thunk))

export { store }