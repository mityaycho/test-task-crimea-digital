import { combineReducers,createStore, compose } from 'redux';
import { cardsReducer } from './setGame-reducer';

const reducers = combineReducers({
	cardsReducer
});

export type AppStateType = ReturnType<typeof reducers>;

const w : any = window as any;

const store = createStore(reducers, compose(w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;