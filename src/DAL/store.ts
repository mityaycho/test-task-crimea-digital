import { combineReducers,createStore } from 'redux';
import { cardsReducer } from './setGame-reducer';

const reducers = combineReducers({
	cardsReducer
});

export type AppStateType = ReturnType<typeof reducers>;

const store = createStore(reducers);

export default store;