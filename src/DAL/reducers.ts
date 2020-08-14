


const initialState = {
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

		default:
			return state;
	};
};