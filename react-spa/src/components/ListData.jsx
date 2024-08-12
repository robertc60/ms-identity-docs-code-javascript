import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */

export function ListData ({columns}) {


    return (
        <>
            {
                    columns.map((column, index) => (
                        <div key={index}>
                            <span>{column.name}</span>
                        </div>
                    ))
                }
        </>
    );
};