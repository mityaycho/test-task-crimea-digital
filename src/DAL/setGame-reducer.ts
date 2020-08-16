import {
	LEVEL_UP,
	ACTIVE_GAME,
	SET_ACTIVE_CLASS,
	GUESSED_CARDS,
	ActionsType,
	RESET_CARDS,
	RESET_LEVEL,
	SET_ALL_ACTIVE_CLASS,
	DISABLE_ALL_ACTIVE_CLASS,
	CARDS_CLASS_UP
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
	activeCard: { id: '', color: '' },
	levelGame: 1,
	attempts: 16,
	guessedCards: 0,
	cardsOnLevel: 16
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
				activeCard: { id: action.classActive, color: action.color },
				attempts: state.attempts - 1
			};

		case GUESSED_CARDS:
			return {
				...state,
				cards: state.cards.map((el, i) => i === +action.idFirst || i === +action.idNext ?
					{ color: el.color, activeClass: 'active', opacity: 'disabled' } :
					el),
				activeCard: { id: '', color: '' },
				guessedCards: state.guessedCards + 2
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
				cards: [
					...resetActive,
					...resetActive
				],
				attempts: (state.cardsOnLevel + 10) * 2,
				guessedCards: 0,
				levelGame: state.levelGame + 1,
				cardsOnLevel: state.cardsOnLevel * 2
			};

		case CARDS_CLASS_UP:
			return {
				...state,
				cardsClass: action.cardsClass
			};

		case RESET_LEVEL:
			return {
				...state,
				cards: state.cards.map(el => ({ color: el.color, activeClass: '', opacity: '' })),
				activeCard: { id: '', color: '' },
				attempts: state.cardsOnLevel,
				guessedCards: 0
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