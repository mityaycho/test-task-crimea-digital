export const ACTIVE_GAME = 'setGame-reducer/ACTIVE_GAME';
export const LEVEL_UP = 'setGame-reducer/LEVEL_UP';
export const SET_ACTIVE_CLASS = 'setGame-reducer/SET_ACTIVE_CLASS';
export const GUESSED_CARDS = 'setGame-reducer/GUESSED_CARDS';

type ActiveGameACType = {
	type: typeof ACTIVE_GAME;
};

export const activeGameAC = (): ActiveGameACType => ({ type: ACTIVE_GAME });

type LevelUpACType = {
	type: typeof LEVEL_UP;
	cardsClass: string;
};

export const levelUpAC = (cardsClass: string): LevelUpACType => ({ type: LEVEL_UP, cardsClass });

type SetActiveClassACType = {
	type: typeof SET_ACTIVE_CLASS;
	classActive: string;
	color: string;
};

export const setActiveClassAC = (classActive: string, color: string): SetActiveClassACType => ({
	type: SET_ACTIVE_CLASS,
	classActive,
	color
});

type GuessedCardsACType = {
	type: typeof GUESSED_CARDS;
	idFirst: string;
	idNext: string;
};

export const guessedCardsAC = (idFirst: string, idNext: string): GuessedCardsACType => ({
	type: GUESSED_CARDS,
	idFirst,
	idNext
});

export type ActionsType = LevelUpACType |
	ActiveGameACType |
	SetActiveClassACType |
	GuessedCardsACType;