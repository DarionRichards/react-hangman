// import {useState} from "react";
import {useState} from "react";
import image0 from "../assets/images/0.jpg";

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

	console.log("Correct Word: ", correctWord);
	console.log("User Guess: ", currentUserGuess);

	const showGuess = () =>
		correctWord
			.split("")
			.map((letter) => (currentUserGuess.has(letter) ? letter : "_"));

	const handleGuess = (guess) => {
		setCurrentUserGuess((previousState) => new Set([...previousState, guess]));
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
									<img src={image0} alt="Hangman0" className="hangman-img" />
								</div>
								<div className="button-container">
									{lettersArray.map((letter, i) => (
										<button
											key={i}
											className="button"
											value={letter}
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
									setCorrectWord(randomWord());
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
