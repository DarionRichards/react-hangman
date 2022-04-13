import "./reset.css";
import "./styles.css";

import image0 from "./assets/images/0.jpg";

export const App = () => {
	return (
		<>
			<header className="container title">
				<h1>React Hangman</h1>
			</header>
			<main className="container">
				<section className="game-container">
					<section className="word-wrapper">
						<div className="letter-border">
							<h2>w</h2>
						</div>
						<div className="letter-border">
							<h2>o</h2>
						</div>
						<div className="letter-border">
							<h2>r</h2>
						</div>
						<div className="letter-border">
							<h2>d</h2>
						</div>
					</section>
					<section className="game-status-wrapper">
						<div>
							<img src={image0} alt="Hangman0" className="hangman-img" />
						</div>
						<div className="button-container">
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
							<button className="button">a</button>
						</div>
					</section>
					<div>
						<button className="button">Start Game</button>
					</div>
				</section>
			</main>
		</>
	);
};
