import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const SiteData = (props) => {
    return (
        <div id="site-div">
            <p><strong>webURL: </strong> {props.graphSpData.webUrl}</p>
            <p><strong>Display Name: </strong> {props.graphSpData.displayName}</p>
            <p><strong>Name: </strong> {props.graphSpData.name}</p>
            <p><strong>Id: </strong> {props.graphSpData.id}</p>
        </div>
    );
};