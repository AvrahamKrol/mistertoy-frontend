import { toyReducer } from './reducers/toy.reducer.js'

import { createStore, compose, combineReducers } from 'redux'

const rootReducer = combineReducers({
  toyModule: toyReducer,
})

export const store = createStore(rootReducer)
