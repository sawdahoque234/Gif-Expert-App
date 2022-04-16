import React from "react";
import PropTypes from "prop-types";
import GifGridButtonDownload from "./GifGridButtonDownload";
import GifGridButtonCopy from "./GifGridButtonCopy";

const GifGridButton = ({ downloadLink, title, url }) => {
    return (
        <div className="flex">
            {<GifGridButtonDownload downloadLink={downloadLink} title={title}/>}

            <GifGridButtonCopy url={url}/>
        </div>
    );
};

GifGridButton.prototype = {
    downloadURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifGridButton;
