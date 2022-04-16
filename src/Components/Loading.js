import React from "react";

const Loading = ({margin = "mt-8", height = "h-12", border = "border-8"}) => {
    return (
        <div 
          className={` ${margin} ${height} ${border} aspect-square border-white border-t-black  rounded-full mx-auto animate-spin`}>

        </div>
    );
};

export default Loading;
