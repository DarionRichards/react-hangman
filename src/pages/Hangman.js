import {useEffect, useState} from "react";

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
	const [showStartButton, setShowStartButton] = useState(true);
	const [correctWord, setCorrectWord] = useState();
	const [currentUserGuess, setCurrentUserGuess] = useState([]);
	const [incorrect, setIncorrect] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [gameWin, setGameWin] = useState(false);

	const images = [image0, image1, image2, image3, image4, image5, image6];

	const handleWordDisplay = () =>
		correctWord
			.split("")
			.map((letter) => (currentUserGuess.includes(letter) ? letter : "_"));

	const handleGuess = (value) => {
		setCurrentUserGuess([...currentUserGuess, value]);

		if (!correctWord.split("").find((element) => value === element)) {
			setIncorrect(incorrect + 1);
		}
	};

	// eslint-disable-next-line
	const handleKeyDownGuess = (e) => {
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			if (!currentUserGuess.includes(e.key)) {
				setCurrentUserGuess([...currentUserGuess, e.key]);

				if (!correctWord.split("").find((element) => e.key === element)) {
					setIncorrect(incorrect + 1);
				}
			}
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDownGuess);

		// Handle Loss
		if (incorrect >= 6) {
			setGameStarted(false);
			setGameOver(true);
		}

		// Handle Win
		if (gameStarted) {
			const result = correctWord.split("").every((element) => {
				return currentUserGuess.includes(element);
			});

			if (result) {
				setGameStarted(false);
				setGameWin(true);
			}
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDownGuess);
		};
	}, [
		incorrect,
		handleKeyDownGuess,
		correctWord,
		currentUserGuess,
		gameStarted,
	]);

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
								<h2>{handleWordDisplay()} </h2>
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
											disabled={currentUserGuess.includes(letter)}
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
					{gameWin && (
						<>
							<h1>Winner</h1>
						</>
					)}
					<section>
						{showStartButton ? (
							<button
								className="button"
								onClick={(e) => {
									setCorrectWord(randomWord());
									setGameStarted(true);
									setShowStartButton(false);
								}}
							>
								Start Game
							</button>
						) : (
							<button
								className="button"
								onClick={(e) => {
									setCorrectWord(randomWord());
									setCurrentUserGuess([]);
									setIncorrect(0);
									setGameStarted(true);
									setGameOver(false);
									setGameWin(false);
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
