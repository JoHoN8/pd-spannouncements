/*
    app name pd-spannouncements
    author: Ted
    date: 
*/
import React from "react";
import {Announcement} from "./components";
import propTypes from "prop-types";
import styles from "../../styleSheets/main";

const Announcements = (props) => {
    
    return (
        <div className="announceContainer">
            <div className="selectControl">
                <div>
                    <span className="annFilterLabel">See specific organization</span>
                    <span>
                        <select className="orgs" onChange={props.selectHandler}>
                            {props.optionsCreator()}
                        </select>
                    </span>
                </div>
            </div>
            <div className="announcements">
                {
                    //loop thru annoucements
                    props.announcements.reduce((ary, a, i) => {

                        if (!props.filtered || props.filtered && a.department === props.filterDepartment) {
                            ary.push(<Announcement key={i} announce={a}/>);
                        }
                        return ary;
                    },[])
                }
            </div>
        </div>
        
    );
};
Announcements.propTypes = {
    selectHandler: propTypes.func.isRequired,
    optionsCreator: propTypes.func.isRequired,
    announcements: propTypes.array.isRequired,
    filtered: propTypes.bool.isRequired,
    filterDepartment: propTypes.string.isRequired
};

export default Announcements;