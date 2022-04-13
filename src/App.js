import "./reset.css";
import "./styles.css";

import {Hangman} from "./pages/Hangman";

export const App = () => {
	return (
		<div className="container">
			<Hangman />
		</div>
	);
};
