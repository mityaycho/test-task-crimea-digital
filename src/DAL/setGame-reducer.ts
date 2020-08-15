import {
	LEVEL_UP,
	ACTIVE_GAME,
	SET_ACTIVE_CLASS,
	GUESSED_CARDS,
	ActionsType,
	RESET_CARDS,
	RESET_LEVEL,
	SET_ALL_ACTIVE_CLASS,
	DISABLE_ALL_ACTIVE_CLASS
} from "../BLL/actions";


const initialState = {
	cardsClass: 'cardsSixteen',
	cards: [
		{ color: 'green', activeClass: '', opacity: '' },
		{ color: 'green', activeClass: '', opacity: '' },
		{ color: 'yellow', activeClass: '', opacity: '' },
		{ color: 'yellow', activeClass: '', opacity: '' },
		{ color: 'gray', activeClass: '', opacity: '' },
		{ color: 'gray', activeClass: '', opacity: '' },
		{ color: 'red', activeClass: '', opacity: '' },
		{ color: 'red', activeClass: '', opacity: '' },
		{ color: 'purple', activeClass: '', opacity: '' },
		{ color: 'purple', activeClass: '', opacity: '' },
		{ color: 'black', activeClass: '', opacity: '' },
		{ color: 'black', activeClass: '', opacity: '' },
		{ color: 'aqua', activeClass: '', opacity: '' },
		{ color: 'aqua', activeClass: '', opacity: '' },
		{ color: 'pink', activeClass: '', opacity: '' },
		{ color: 'pink', activeClass: '', opacity: '' }
	],
	activeCard: { id: '', color: '' }
};


export const cardsReducer = (state = initialState, action: ActionsType) => {

	switch (action.type) {
		case ACTIVE_GAME:
			return {
				...state
			};

		case SET_ACTIVE_CLASS:
			return {
				...state,
				cards: state.cards.map((el, i) => i === +action.classActive ?
					{ color: el.color, activeClass: 'active', opacity: '' } :
					el),
				activeCard: { id: action.classActive, color: action.color }
			};

		case GUESSED_CARDS:
			return {
				...state,
				cards: state.cards.map((el, i) => i === +action.idFirst || i === +action.idNext ?
					{ color: el.color, activeClass: 'active', opacity: 'disabled' } :
					el),
				activeCard: { id: '', color: '' }
			};

		case RESET_CARDS:
			return {
				...state,
				cards: state.cards.map((el, i) => i === +action.idFirst || i === +action.idNext ?
					{ color: el.color, activeClass: '', opacity: '' } :
					el),
				activeCard: { id: '', color: '' }
			};

		case LEVEL_UP:
			state.cards.sort(() => Math.random() - 0.5);
			const resetActive = state.cards.map(el => ({ color: el.color, activeClass: '', opacity: '' }));

			return {
				...state,
				cardsClass: action.cardsClass,
				cards: [
					...resetActive,
					...resetActive
				]
			};

		case RESET_LEVEL:
			return {
				...state,
				cards: state.cards.map(el => ({ color: el.color, activeClass: '', opacity: '' })),
				activeCard: { id: '', color: '' }
			};

		case SET_ALL_ACTIVE_CLASS:
			state.cards.sort(() => Math.random() - 0.5);
			return {
				...state,
				cards: state.cards.map(el => ({ color: el.color, activeClass: 'active', opacity: '' }))
			};

		case DISABLE_ALL_ACTIVE_CLASS:
			return {
				...state,
				cards: state.cards.map(el => ({ color: el.color, activeClass: '', opacity: '' }))
			};

		default:
			return state;
	};
};