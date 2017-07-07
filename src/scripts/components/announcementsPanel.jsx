/*
    app name pd-spannouncements
    author: Ted
    date: 
*/
import React from "react";
import {Announcement} from "./components";
import propTypes from "prop-types";
import styles from "../../styleSheets/main";

export default class Announcements extends React.Component {
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
            annData: this.props.announcements
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
        let filtered = this.state.department !== "All";
        return (
            <div className="announceContainer">
                <div className="selectControl">
                    <div>
                        <span className="annFilterLabel">See specific organization</span>
                        <span>
                            <select className="orgs" onChange={this._handleFilter}>
                                {this._createOptions()}
                            </select>
                        </span>
                    </div>
                </div>
                <div className="announcements">
                    {
                        //loop thru annoucements
                        this.state.annData.reduce((ary, a, i) => {

                            if (!filtered || filtered && a.department === this.state.department) {
                                ary.push(<Announcement key={i} announce={a}/>);
                            }
                            return ary;
                        },[])
                    }
                </div>
            </div>
        );
    }
}
Announcements.propTypes = {
    announcements: propTypes.array.isRequired
};