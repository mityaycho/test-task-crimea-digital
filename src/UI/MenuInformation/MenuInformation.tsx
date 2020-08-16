import React from 'react';
import styles from './MenuInformation.module.css';

type MenuInformationPropsType = {
	levelGame: number;
	attempts: number;
	guessedCards: number;
	cardsOnLevel: number;
}

const MenuInformation = React.memo((props: MenuInformationPropsType) => {
	return (
		<div className={styles.container}>
			<span><p>Game level</p>{props.levelGame}</span>
			<span><p>Attempts</p>{props.attempts}</span>
			<span><p>Cards guessed</p>{props.guessedCards}</span>
			<span><p>Total cards</p>{props.cardsOnLevel}</span>
		</div>
	);
});

export default MenuInformation;