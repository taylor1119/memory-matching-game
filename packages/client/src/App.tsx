import React, { useEffect, useState } from 'react';
import './App.css';

const cardImages = [
	'/img/greek/ares.png',
	'/img/greek/demeter.png',
	'/img/greek/hephaestus.png',
	'/img/greek/hermes.png',
	'/img/greek/nike.png',
	'/img/greek/pan.png',
];

function App() {
	const [cards, setCards] = useState<string[]>([]);
	const [turns, setTurns] = useState(0);

	useEffect(() => {
		const shuffledCards = [...cardImages, ...cardImages].sort(
			() => Math.random() - 0.5
		);

		setCards(shuffledCards);
		setTurns(0);
	}, [setCards]);

	return (
		<div className='App'>
			<h1>{turns}</h1>
			<button onClick={() => setTurns(turns + 1)}>++</button>
			<ul>
				{cards.map((src, idx) => (
					<li id={idx.toString()}>
						<img src={src} alt='' />
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
