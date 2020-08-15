import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../DAL/store';
import Card from '../Card/Card';
import styles from './App.module.css';
import Button from '../Button/Button';
import { levelUpAC, setActiveClassAC, guessedCardsAC } from '../../BLL/actions';
import { activeGameAC } from './../../BLL/actions';

const App = () => {

	const dispatch = useDispatch();
	const { cards, cardsClass, activeCard } = useSelector((state: AppStateType) => state.cardsReducer);
	const [activeGame, setActiveGame] = useState(false);

	const clickHandler = (e: any) => {
		const id = e.currentTarget.id;
		const value = e.currentTarget.dataset.value;
		if (activeCard.color === value) {
			dispatch(guessedCardsAC(activeCard.id, id));
		} else {
			dispatch(setActiveClassAC(id, value));
		}
		console.log(value);
	};

	const cardsJSX = cards.map((el, i) => {

		return (
			<Card
				key={i}
				id={i}
				color={{ background: el.color }}
				clickHandler={clickHandler}
				value={el.color}
				active={el.activeClass}
				opacity={el.opacity}
			/>
		);
	});

	const setNextLevel = useCallback(() => dispatch(levelUpAC('levelUp')), [dispatch]);

	return (
		<div className={styles.App}>
			{activeGame &&
				<div className={styles[cardsClass]}>
					{cardsJSX}
				</div>
			}
			{!activeGame && <Button title="active game"
				onClick={() => {
					setActiveGame(true);
					dispatch(activeGameAC());
				}
				} />}
			{activeGame && <Button title="next level" onClick={setNextLevel} />}
		</div>
	);
};

export default App;
