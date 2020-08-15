import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../DAL/store';
import Card from '../Card/Card';
import styles from './App.module.css';
import Button from '../Button/Button';
import { levelUpAC, setActiveClassAC, guessedCardsAC, resetCardsAC, resetLevelAC, setAllActiveClassAC, DisableAllActiveClassAC } from '../../BLL/actions';
import { activeGameAC } from './../../BLL/actions';

const App = () => {

	const dispatch = useDispatch();
	const { cards, cardsClass, activeCard } = useSelector((state: AppStateType) => state.cardsReducer);
	const [activeGame, setActiveGame] = useState(false);

	const clickCard = useCallback((e: React.FormEvent<HTMLInputElement>) => {
		const id = e.currentTarget.id;
		const value = e.currentTarget.dataset.value !== undefined ? e.currentTarget.dataset.value : '';

		if (activeCard.color !== '' && activeCard.color === value) {
			dispatch(guessedCardsAC(activeCard.id, id));
		} else if (activeCard.color !== '' && activeCard.color !== value) {
			dispatch(setActiveClassAC(id, value));
			setTimeout(() => dispatch(resetCardsAC(activeCard.id, id)), 300);
		} else {
			dispatch(setActiveClassAC(id, value));
		}
	}, [cards, cardsClass, activeCard]);

	const activeGameButton = useCallback(() => {
		setActiveGame(true);
		dispatch(setAllActiveClassAC());

		setTimeout(() => {
			dispatch(DisableAllActiveClassAC());
			dispatch(activeGameAC());
		}, 5000);

	}, [setActiveGame, dispatch]);

	const nextLevelButton = useCallback(() => {
		dispatch(levelUpAC('levelUp'));
		dispatch(setAllActiveClassAC());

		setTimeout(() => {
			dispatch(DisableAllActiveClassAC());
			dispatch(activeGameAC());
		}, 1000);

	}, [dispatch]);

	const resetLevelButton = useCallback(() => dispatch(resetLevelAC()), [dispatch]);

	const cardsJSX = cards.map((el, i) =>
		<Card
			key={i}
			id={i}
			color={{ background: el.color }}
			clickCard={clickCard}
			value={el.color}
			active={el.activeClass}
			opacity={el.opacity}
		/>
	);

	return (
		<div className={styles.App}>
			{activeGame &&
				<div className={styles[cardsClass]}>
					{cardsJSX}
				</div>
			}
			{!activeGame &&
				<Button
					title="active game"
					onClick={activeGameButton}
				/>
			}
			{activeGame &&
				<>
					<Button title="next level" onClick={nextLevelButton} />
					<Button title="reset level" onClick={resetLevelButton} />
				</>}
		</div>
	);
};

export default App;