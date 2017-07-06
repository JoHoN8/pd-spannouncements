/*
    app name pd-spannouncements
    author: Ted
    date: 
*/
import React from "react";
import {Announcement} from "./components.jsx";
import styles from "../../styleSheets/main.css";

export default class Announcements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annData: []
        };
        this._used = [];
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
            ]
        });
    }
    render() {
        this._used = [];
        return (
            <div className="announceContainer">
                <div className="selectControl">
                    <div>
                        <span>See specific organization</span>
                        <span>
                            <select className="orgs">
                                {
                                    this.state.annData.reduce((ary, a, i) => {
                                        if(ary.length === 0) {
                                            ary.push(<option key={i} value="All">All</option>);
                                        }
                                        if(this._used.indexOf(a.department) === -1) {
                                            this._used.push(a.department);
                                            ary.push(<option key={i+1} value={a.department}>{a.department}</option>);
                                        }
                                        return ary;
                                    }, [])
                                }
                            </select>
                        </span>
                    </div>
                </div>
                <div className="announcements">
                    {
                        //loop thru annoucements
                        this.state.annData.map((a, i) => {
                            return <Announcement key={i} announce={a}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}