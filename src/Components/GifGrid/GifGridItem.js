import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import GifGridButtonWrapper from "./Buttons/GifGridButtonWrapper";


const GifGridItem = ({ title, url}) => {

    const [downloadLink, setDownloadLink] = useState("loading"); //init state is loading the download link

    //useEffect is getting the downloadable link for the image
    useEffect(() => {
        
        fetch(url)
        .then(res => res.blob())
        .then(url => {
            setDownloadLink(URL.createObjectURL(url))
        });
        
    }, [url]);

    return (
        <div className="card animate__animated animate__fadeIn bg-sky-600 hover:bg-sky-400 rounded-md m-4 p-1 self-center transition-all duration-500">
            <img
                className="w-auto sm:w-96 rounded-t-md m-auto hover:animate-pulse"
                src={url}
                alt={title.slice(0, -3)}
            />
            <p className="w-auto sm:w-96 uppercase text-xs sm:text-lg text-center text-sky-300 bg-stone-900">
                {title?.slice(0, -3)}
            </p>
            <GifGridButtonWrapper title={title} downloadLink={downloadLink} url={url}/>
        </div>
    );
};

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem;
