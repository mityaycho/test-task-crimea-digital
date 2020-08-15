export const ACTIVE_GAME = 'setGame-reducer/ACTIVE_GAME';
export const LEVEL_UP = 'setGame-reducer/LEVEL_UP';
export const SET_ACTIVE_CLASS = 'setGame-reducer/SET_ACTIVE_CLASS';
export const GUESSED_CARDS = 'setGame-reducer/GUESSED_CARDS';
export const RESET_CARDS = 'setGame-reducer/RESET_CARDS';
export const RESET_LEVEL = 'setGame-reducer/RESET_LEVEL';
export const SET_ALL_ACTIVE_CLASS = 'setGame-reducer/SET_ALL_ACTIVE_CLASS';
export const DISABLE_ALL_ACTIVE_CLASS = 'setGame-reducer/DISABLE_ALL_ACTIVE_CLASS';


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

type ResetCardsACType = {
	type: typeof RESET_CARDS;
	idFirst: string;
	idNext: string;
};
export const resetCardsAC = (idFirst: string, idNext: string): ResetCardsACType => ({
	type: RESET_CARDS,
	idFirst,
	idNext
});

type ResetLevelACtype = {
	type: typeof RESET_LEVEL;
};
export const resetLevelAC = (): ResetLevelACtype => ({ type: RESET_LEVEL });

type SetAllActiveClassACType = {
	type: typeof SET_ALL_ACTIVE_CLASS;
};
export const setAllActiveClassAC = (): SetAllActiveClassACType => ({ type: SET_ALL_ACTIVE_CLASS });

type DisableAllActiveClassACType = {
	type: typeof DISABLE_ALL_ACTIVE_CLASS;
};
export const DisableAllActiveClassAC = (): DisableAllActiveClassACType => ({ type: DISABLE_ALL_ACTIVE_CLASS });


export type ActionsType = LevelUpACType |
	ActiveGameACType |
	SetActiveClassACType |
	GuessedCardsACType |
	ResetCardsACType |
	ResetLevelACtype |
	SetAllActiveClassACType |
	DisableAllActiveClassACType;