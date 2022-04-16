import React from "react";

const Tooltip = ({text}) => {
    return (
        <span className="block bg-black/75 p-2 rounded-2xl text-lg top-[-1em] left-1/2 absolute scale-0 group-focus:animate-toolTip">
            Copied!
        </span>
    );
};

export default Tooltip;
