import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Card from './components/Card';

const cardImages = [
	'/img/greek/ares.png',
	'/img/greek/demeter.png',
	'/img/greek/hephaestus.png',
	'/img/greek/hermes.png',
	'/img/greek/nike.png',
	'/img/greek/pan.png',
];

export interface ICard {
	src: string;
	id: string;
	isMatched: boolean;
}
function App() {
	const [cards, setCards] = useState<ICard[]>([]);
	const [turns, setTurns] = useState(0);

	const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);

	const handleChoice = (card: ICard) => () => {
		if (card.isMatched) return;
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetGame = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((src): ICard => {
				return {
					src,
					id: uuid(),
					isMatched: false,
				};
			});

		setCards(shuffledCards);
		setTurns(0);
	};

	useEffect(() => {
		resetGame();
	}, []);

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if (choiceOne.id !== choiceTwo.id && choiceOne.src === choiceTwo.src) {
				setCards((prevCards) =>
					prevCards.map((card) =>
						card.src === choiceOne.src ? { ...card, isMatched: true } : card
					)
				);
				console.log('Match!!!!');
			}

			setTimeout(() => {
				setChoiceOne(null);
				setChoiceTwo(null);
				setTurns((prevTurn) => prevTurn + 1);
			}, 500);
		}
	}, [choiceOne, choiceTwo]);

	return (
		<div className='App'>
			<h1>Turns: {turns}</h1>
			<button className='btn-reset' onClick={() => resetGame()}>
				Reset Game
			</button>
			<div className='card-grid'>
				{cards.map((card) => (
					<Card
						handleChoice={handleChoice(card)}
						imgSrc={card.src}
						key={card.id}
						isFlipped={
							card.isMatched ||
							card.id === choiceOne?.id ||
							card.id === choiceTwo?.id
						}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
