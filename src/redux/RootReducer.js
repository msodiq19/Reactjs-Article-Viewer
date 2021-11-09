import { combineReducers } from 'redux'
import articleReducer from './articleReducer'

const RootReducer = combineReducers({
    news: articleReducer
})

export default RootReducer;