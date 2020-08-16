import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../DAL/store';
import Card from '../Card/Card';
import styles from './App.module.css';
import Button from '../Button/Button';
import { activeGameAC } from './../../BLL/actions';
import MenuInformation from '../MenuInformation/MenuInformation';
import {
	levelUpAC,
	setActiveClassAC,
	guessedCardsAC,
	resetCardsAC,
	resetLevelAC,
	setAllActiveClassAC,
	DisableAllActiveClassAC,
	CardsClassUpAC
} from '../../BLL/actions';

const App = () => {

	const dispatch = useDispatch();
	const {
		cards,
		cardsClass,
		activeCard,
		levelGame,
		attempts,
		guessedCards,
		cardsOnLevel
	} = useSelector((state: AppStateType) => state.cardsReducer);
	const [activeGame, setActiveGame] = useState(false);

	const clickCard = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
		const id = e.currentTarget.id;
		const value = e.currentTarget.dataset.value || '';

		if (activeCard.color !== '' && activeCard.color === value) {
			dispatch(guessedCardsAC(activeCard.id, id));
		} else if (activeCard.color !== '' && activeCard.color !== value) {
			dispatch(setActiveClassAC(id, value));
			setTimeout(() => dispatch(resetCardsAC(activeCard.id, id)), 300);
		} else {
			dispatch(setActiveClassAC(id, value));
		}
	}, [activeCard, dispatch]);

	const activeGameButton = useCallback(() => {
		setActiveGame(true);
		dispatch(setAllActiveClassAC());

		setTimeout(() => {
			dispatch(DisableAllActiveClassAC());
			dispatch(activeGameAC());
		}, 5000);

	}, [setActiveGame, dispatch]);

	const nextLevelButton = useCallback(() => {

		dispatch(activeGameAC());
		dispatch(levelUpAC());
		dispatch(setAllActiveClassAC());

		switch (levelGame + 1) {
			case 2:
				dispatch(CardsClassUpAC('levelTwo'));
				break;
			case 3:
				dispatch(CardsClassUpAC('levelThree'));
				break;
		}

		setTimeout(() => dispatch(DisableAllActiveClassAC()), 5000);

	}, [levelGame, dispatch]);

	const resetLevelButton = useCallback(() => {
		dispatch(resetLevelAC());
		dispatch(setAllActiveClassAC());

		setTimeout(() => {
			dispatch(DisableAllActiveClassAC());
		}, 5000);
	}, [dispatch]);

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

			{!activeGame && <Button title="run game" onClick={activeGameButton} />}

			{attempts === 0 &&
				<>
					<div className={styles.gameOver}>
						GAME OVER<br />
						Attempts ended!<br />
						<p className={styles.smile}>&#128561;</p>
					</div>

					<Button title="try again" onClick={resetLevelButton} />
				</>
			}

			{guessedCards === cardsOnLevel &&
				<>
					<div className={styles.wonGame}>YOU ARE THE BEST!<br />&#128526;</div>

					<Button title="next level" onClick={nextLevelButton} />
				</>
			}

			{levelGame === 4 &&
				<>
					<div className={styles.wonGame}>YOU WIN<br />All levels comlete!<br />&#129312;</div>

					<Button title="try again" onClick={resetLevelButton} />
				</>
			}

			{activeGame && attempts !== 0 && guessedCards !== cardsOnLevel && levelGame !== 4 &&
				<>
					<MenuInformation
						levelGame={levelGame}
						attempts={attempts}
						guessedCards={guessedCards}
						cardsOnLevel={cardsOnLevel}
					/>

					<div className={styles[cardsClass]}>
						{cardsJSX}
					</div>

					<Button title="reset level" onClick={resetLevelButton} />
				</>
			}

		</div>
	);
};

export default App;