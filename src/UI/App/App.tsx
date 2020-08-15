import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../DAL/store';
import Card from '../Card/Card';
import styles from './App.module.css';
import Button from '../Button/Button';
import { levelUpAC } from '../../BLL/actions';

const App = () => {

	const dispatch = useDispatch();
	const cardsClass = useSelector((state: AppStateType) => state.cardsReducer.cardsClass);
	const cardsColor = useSelector((state: AppStateType) => state.cardsReducer.cardsColor);
	const [activeGame, setActiveGame] = useState(false);

	cardsColor.sort(() => Math.random() - 0.5);

	const clickHandler = (e: any) => {
		console.log(e.currentTarget.dataset.value);
	}

	const cardsJSX = cardsColor.map((el, i) => <Card
		key={i}
		color={{ background: el }}
		clickHandler={clickHandler}
		value={el}
		active="active" />);

	return (
		<div className={styles.App}>
			{activeGame &&
				<div className={styles[cardsClass]}>
					{cardsJSX}
				</div>
			}
			{!activeGame && <Button title="active game" onClick={() => setActiveGame(true)} />}
			{activeGame && <Button title="next level" onClick={() => dispatch(levelUpAC('levelUp'))} />}
		</div>
	);
};

export default App;
