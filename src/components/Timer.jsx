import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export default function Timer() {
	const [time, setTime] = useState(0);
	const [isRunning, setRunning] = useState(false);

	// Unaccurate:
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(
				() => setTime((time) => time + 1),
				1000
			);

			return () => clearInterval(interval);
		}
	}, [isRunning, time]);

	const secondsToTime = (seconds) => {
		let minutes = Math.floor(seconds / 60);
		let secs = seconds % 60;
		return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
	};

	const onStart = () => setRunning(true);
	const onStop = () => setRunning(false);

	return (
		<div className={styles.timer}>
			<p className={styles.timerDisplay}>{secondsToTime(time)}</p>
			<article>
				<button
					className={`${styles.startButton} ${styles.timerButton}`}
					onClick={onStart}
				>
					START
				</button>
				<button
					className={`${styles.stopButton} ${styles.timerButton}`}
					onClick={onStop}
				>
					STOP
				</button>
			</article>
		</div>
	);
}
