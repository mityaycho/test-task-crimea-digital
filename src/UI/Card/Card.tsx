import React from 'react';
import logo from './../../media/logo.svg';
import styles from './Card.module.css';

const Card = React.memo((props: any) => {
	return (
		<div className={styles.container}>
			<div
				id={props.id}
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