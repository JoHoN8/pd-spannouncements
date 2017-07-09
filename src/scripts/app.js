/**
	app name pd-spannouncements
 */
import React from "react";
import ReactDOM from "react-dom";
import {AnnouncementPanel, Announcement} from "./components/announcementsPanel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this._handleFilter = this._handleFilter.bind(this);
        this._createOptions = this._createOptions.bind(this);
        this._createAnnouncements = this._createAnnouncements.bind(this);
        this.state = {
            annData: [],
            department: "All",
            filtered: false
        };
    }
    componentDidMount() {
        this.setState({
            annData: [
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
            ]
        });
    }
    _handleFilter(event) {
        let selected = event.target.value,
            newStateObj = {};

        this.setState((currentState) => {
            if (selected === "All") {
                newStateObj.filtered = false;
            } else {
                newStateObj.filtered = true;
            }
            newStateObj.department = selected;
            return newStateObj;
        });
    }
    _createOptions() {
        let selections = this.state.annData.reduce((ary, item) => {
            if(ary.indexOf(item.department) === -1) {
                ary.push(item.department);
            }
            return ary;
        }, []);
        selections.sort();
        selections.unshift("All");
        return selections.map((item, i) => {
            return <option key={i+1} value={item}>{item}</option>;
        });
    }
    _createAnnouncements() {
        //loop thru annoucements
        return this.state.annData.reduce((ary, a, i) => {

            if (!this.state.filtered || this.state.filtered && a.department === this.state.department) {
                ary.push(<Announcement key={i} announce={a}/>);
            }
            return ary;
        },[]);
    }
    render() {
        return (
            <div>
                <AnnouncementPanel 
                    selectHandler = {this._handleFilter}
                    options = {this._createOptions()}
                    announcements = {this._createAnnouncements()}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));