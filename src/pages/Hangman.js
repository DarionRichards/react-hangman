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
	const [showStartButton, setShowStartButton] = useState(true);
	const [answer, setAnswer] = useState("");

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
								<h2>{answer} </h2>
							</section>
							<section className="game-status-wrapper">
								<div>
									<img src={image0} alt="Hangman0" className="hangman-img" />
								</div>
								<div className="button-container">
									{lettersArray.map((letter, i) => (
										<button className="button" key={i}>
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
									setAnswer(randomWord());
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
									setAnswer(randomWord());
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
