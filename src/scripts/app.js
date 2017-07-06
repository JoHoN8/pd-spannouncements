/**
	app name pd-spannouncements
 */
import React from "react";
import ReactDOM from "react-dom";
import Announcements from "./components/announcementsPanel.jsx";

//function component
const App = () => {
	return (
		<div>
			<Announcements />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));