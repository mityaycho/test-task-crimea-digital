import React from 'react';
import logo from './../../media/logo.svg';
import styles from './Card.module.css';

const Card = (props: any) => {
	return (
		<div className={styles.card} style={props.color} onClick={props.clickHandler} data-value={props.value}>
			<img src={logo} className={styles.logo} alt="logo" />
		</div>
	);
};

export default Card;