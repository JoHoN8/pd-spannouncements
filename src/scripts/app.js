/**
	app name pd-spannouncements
 */
import React from "react";
import ReactDOM from "react-dom";
import Announcements from "./components/announcementsPanel";

//function component
const App = () => {
	let ann = [
                {
                    title: "announcement 1",
                    department: "HQ",
                    body: "some announcement that is helpful"
                },
                {
                    title: "announcement 2",
                    department: "Field",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 3",
                    department: "LTCOP",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 4",
                    department: "HD",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 5",
                    department: "Field",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 5",
                    department: "HQ",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 6",
                    department: "HQ",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 7",
                    department: "HQ",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 8",
                    department: "HQ",
                    body: "some event is happening here"
                },
                {
                    title: "announcement 9",
                    department: "HQ",
                    body: "some event is happening here"
                },
            ];
	return (
		<div>
			<Announcements announcements={ann}/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));