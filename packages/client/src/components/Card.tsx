import React from 'react';

interface IProps {
	imgSrc: string;
	handleChoice: () => void;
	isFlipped: boolean;
}

const Card = ({ imgSrc, handleChoice, isFlipped }: IProps) => {
	return (
		<div className='card'>
			<div className={isFlipped ? 'flipped' : ''}>
				<img className='card-front' src={imgSrc} alt='front' />
				<div className='card-back' onClick={handleChoice} />
			</div>
		</div>
	);
};

export default Card;
