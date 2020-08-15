import React from 'react';
import logo from './../../media/logo.svg';
import styles from './Card.module.css';

const Card = (props: any) => {
	return (
		<div 
		id={props.id} 
		className={`${styles.card} ${styles[props.active]} ${styles[props.opacity]}`} 
		style={props.color} 
		onClick={props.clickHandler} 
		data-value={props.value}
		>
			<img src={logo} className={styles.logo} alt="logo" />
		</div>
	);
};

export default Card;