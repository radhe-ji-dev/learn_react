import React, { useState, useEffect, useRef } from 'react';

const StopWatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const timerRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			timerRef.current = setTimeout(() => {
				setTime((prev) => prev + 1);
			}, 1000);
		}

		return () => clearTimeout(timerRef.current);
	}, [isRunning, time]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<div>
			<h1>Stopwatch</h1>
			<h2>Time: {formatTime(time)}</h2>

			<button onClick={() => setIsRunning(true)}>Start</button>
			<button onClick={() => setIsRunning(false)}>Stop</button>
			<button
				onClick={() => {
					setIsRunning(false);
					setTime(0);
				}}>
				Reset
			</button>
		</div>
	);
};

export default StopWatch;
