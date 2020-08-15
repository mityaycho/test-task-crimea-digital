import { LEVEL_UP } from "../BLL/actions";



const initialState = {
	cardsClass: 'cardsSixteen',
	cardsColor: [
		'green',
		'green',
		'yellow',
		'yellow',
		'gray',
		'gray',
		'red',
		'red',
		'purple',
		'purple',
		'black',
		'black',
		'aqua',
		'aqua',
		'pink',
		'pink'
	]
};

export const cardsReducer = (state = initialState, action: any) => {
	switch(action.type) {
		case LEVEL_UP:
			return {
				...state, cardsColor: [...state.cardsColor, ...state.cardsColor], cardsClass: action.cardsClass
			}
		default:
			return state;
	};
};