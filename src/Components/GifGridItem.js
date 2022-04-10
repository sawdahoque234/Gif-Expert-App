import React from "react";

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn bg-sky-600 hover:bg-sky-400 rounded-md m-4 p-1 self-center">
            <img className="w-auto sm:w-96 rounded-t-md m-auto hover:animate-pulse" src={url} alt={title} />
            <p className="w-auto sm:w-96 uppercase rounded-b-md text-xs sm:text-lg text-center text-sky-300 bg-stone-900">
                {title.slice(0, -3)}
            </p>
        </div>
    );
};

export default GifGridItem;
