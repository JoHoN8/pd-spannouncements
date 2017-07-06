/*
    app name pd-spannouncements
    author: Ted
    date: 
*/
import React from "react";
import propTypes from "prop-types";

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