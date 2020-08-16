import React, { CSSProperties } from 'react';
import logo from './../../media/logo.svg';
import styles from './Card.module.css';

type CardPropsType = {
	id: number;
	active: string;
	opacity: string;
	color: CSSProperties;
	clickCard: (e: React.MouseEvent<HTMLInputElement>) => void;
	value: string;
};

const Card = React.memo((props: CardPropsType) => {
	return (
		<div className={styles.container}>
				<img src={logo} className={styles.logo} alt="logo" />
			<div
				id={`${props.id}`}
				className={`${styles.card} ${styles[props.active]} ${styles[props.opacity]}`}
				style={props.color}
				onClick={props.clickCard}
				data-value={props.value}
			>
				<img src={logo} className={styles.logo} alt="logo" />
			</div>
		</div>
	);
});

export default Card;