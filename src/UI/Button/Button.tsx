import React from 'react';
import styles from './Button.module.css';

const Button = React.memo((props: any) => {
	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={props.onClick}>{props.title}</button>
		</div>
	);
});

export default Button;