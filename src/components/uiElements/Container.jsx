import React from "react";
import Button from './Button';

function Container () {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",

        }}
        >
            <Button />
        </div>

    )
}

export default Container;