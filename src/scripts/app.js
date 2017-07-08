/**
	app name pd-spannouncements
 */
import React from "react";
import ReactDOM from "react-dom";
import Announcements from "./components/announcementsPanel";

class App extends React.Component {
    constructor(props) {
        super(props);
        this._handleFilter = this._handleFilter.bind(this);
        this._createOptions = this._createOptions.bind(this);
        this.state = {
            annData: [],
            department: "All"
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
        let selected = event.target.value;
        this.setState({
            department: selected
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
    render() {
        return (
            <div>
            <Announcements 
                selectHandler = {this._handleFilter}
                optionsCreator = {this._createOptions}
                announcements = {this.state.annData}
                filtered = {this.state.department !== "All"}
                filterDepartment = {this.state.department}
            />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));