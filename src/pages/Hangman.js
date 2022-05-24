import {useState} from "react";

import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";

import {lettersArray} from "../data/letters";
import {PROGRAMING_LANG} from "../data/words";

const randomWord = () => {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
};

export const Hangman = () => {
	const [gameStarted, setGameStarted] = useState(false);
	const [inProgress, setInProgress] = useState(false);
	const [showStartButton, setShowStartButton] = useState(true);
	const [correctWord, setCorrectWord] = useState();
	const [currentUserGuess, setCurrentUserGuess] = useState(new Set());
	const [incorrect, setIncorrect] = useState(0);
	const [wordChosen, setWordChosen] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	const images = [image0, image1, image2, image3, image4, image5, image6];

	const showGuess = () =>
		correctWord
			.split("")
			.map((letter) => (currentUserGuess.has(letter) ? letter : "_"));

	const handleGuess = (value) => {
		setCurrentUserGuess((previousState) => new Set([...previousState, value]));
		setWordChosen([...wordChosen, value]);

		if (lettersArray.includes(value)) {
		}

		const result = correctWord.split("").find((element) => value === element);

		if (!result) {
			setIncorrect(incorrect + 1);
		}

		if (incorrect >= 5) {
			// setGameStarted(false);
			setGameOver(true);
		}
	};

	return (
		<>
			<header className="title">
				<h1>React Hangman</h1>
			</header>
			<main>
				<section className="game-container">
					{gameStarted && (
						<>
							<section className="word-wrapper">
								<h2>{inProgress ? showGuess() : correctWord} </h2>
							</section>
							<section className="game-status-wrapper">
								<div>
									<img
										src={images[incorrect]}
										alt="Hangman0"
										className="hangman-img"
									/>
								</div>
								<div className="button-container">
									{lettersArray.map((letter, i) => (
										<button
											key={i}
											className="button"
											value={letter}
											disabled={wordChosen.includes(letter)}
											onClick={(e) => {
												handleGuess(e.target.value);
											}}
										>
											{letter}
										</button>
									))}
								</div>
							</section>
						</>
					)}
					{gameOver && (
						<>
							<h1>Game Over</h1>
						</>
					)}
					<section>
						{showStartButton ? (
							<button
								className="button"
								onClick={(e) => {
									setCorrectWord(randomWord());
									setGameStarted(true);
									setInProgress(true);
									setShowStartButton(false);
								}}
							>
								Start Game
							</button>
						) : (
							<button
								className="button"
								onClick={(e) => {
									setGameStarted(true);
									setGameOver(false);
									setCorrectWord(randomWord());
									setCurrentUserGuess(new Set());
									setIncorrect(0);
									setWordChosen([]);
								}}
							>
								Reset Game
							</button>
						)}
					</section>
				</section>
			</main>
		</>
	);
};
