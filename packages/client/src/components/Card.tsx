import React from 'react';
import './Card.css';

const backSrc = './img/cyberpunk/back.jpg';
interface IProps {
	imgSrc: string;
	handleChoice: () => void;
	isFlipped: boolean;
}

const Card = ({ imgSrc, handleChoice, isFlipped }: IProps) => {
	return (
		<div className='card'>
			<div className={isFlipped ? 'flipped' : ''}>
				<div className='card-glitch'>
					<img
						className='card-front card-glitch-item'
						src={imgSrc}
						alt='front'
					/>
					<img
						className='card-front card-glitch-item'
						src={imgSrc}
						alt='front'
					/>
				</div>
				<div className='card-glitch card-back' onClick={handleChoice}>
					<img className='card-glitch-item' src={backSrc} alt='back' />
					<img className='card-glitch-item' src={backSrc} alt='back' />
				</div>
			</div>
		</div>
	);
};

export default Card;
