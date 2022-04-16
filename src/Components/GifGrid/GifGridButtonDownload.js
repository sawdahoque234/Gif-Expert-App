import React from "react";
import PropTypes from "prop-types";
import { FiDownload } from "react-icons/fi"; //Icons
import Loading from "../Loading";

const GifGridButtonDownload = ({ downloadLink, title }) => {
    if(downloadLink === "loading") {
        return(
            <button 
                className="bg-red-600 hover:bg-red-700 w-1/2 flex items-center justify-center" >
                <Loading margin="mt-0"/> {/* We dont want any margin */}
            </button>
        );
    } else {
        return (
            <a
                href={downloadLink}
                onClick={() => {
                    console.log(downloadLink);
                }}
                download={title.slice(0, -3)}
                className="bg-lime-400 focus:bg-lime-800 py-4 block w-1/2 text-center font-sans text-3xl text-sky-100 group transition-all duration-200 rounded-bl-md"
            >
                <FiDownload className="inline animate-[bounce_2s_ease-out_infinite]" />
            </a>
        );
    }
};

GifGridButtonDownload.prototype = {
    downloadLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default GifGridButtonDownload;
