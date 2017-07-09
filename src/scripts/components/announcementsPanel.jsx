/*
    app name pd-spannouncements
    author: Ted
    date: 
*/
import React from "react";
import propTypes from "prop-types";
import styles from "../../styleSheets/main";

export const AnnouncementPanel = (props) => {
    
    return (
        <div className="announceContainer">
            <div className="selectControl">
                <div>
                    <span className="annFilterLabel">See specific organization</span>
                    <span>
                        <select className="orgs" onChange={props.selectHandler}>
                            {props.options}
                        </select>
                    </span>
                </div>
            </div>
            <div className="announcements">
                {props.announcements}
            </div>
        </div>
        
    );
};
AnnouncementPanel.propTypes = {
    selectHandler: propTypes.func.isRequired,
    options: propTypes.array.isRequired,
    announcements: propTypes.array.isRequired
};

export const Announcement = (props) => {
    return (
        <div className="announce">
            <h1 className="title">{props.announce.title}</h1>
            <h2 className="department">From: {props.announce.department}</h2>
            <div className="body">
                {props.announce.body}
            </div>
        </div>
    );
};

Announcement.propTypes = {
    announce: propTypes.shape({
        title: propTypes.string.isRequired,
        department: propTypes.string.isRequired,
        body: propTypes.string.isRequired
    })
};
