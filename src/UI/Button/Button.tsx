import React from 'react';
import styles from './Button.module.css';

type ButtonPropsType = {
	onClick: () => void;
	title: string;
}

const Button = React.memo((props: ButtonPropsType) => {
	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={props.onClick}>{props.title}</button>
		</div>
	);
});

export default Button;