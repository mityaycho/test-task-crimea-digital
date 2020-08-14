import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../DAL/store';
import Card from '../Card/Card';
import styles from './App.module.css';

const App = () => {

	const cardsColor = useSelector((state: AppStateType) => state.cardsReducer.cardsColor);

	cardsColor.sort(() => Math.random() - 0.5 );

	const clickHandler = (e: any) => {
		console.log(e.currentTarget.dataset.value)
	}

	const cardsJSX = cardsColor.map((el, i) => <Card 
	key={i} 
	color={{background: el}} 
	clickHandler={clickHandler} 
	value={el} />);

	return (
		<div className={styles.App}>
			<div className={styles.cardsContainer}>
				{cardsJSX}
			</div>
		</div>
	);
};

export default App;
