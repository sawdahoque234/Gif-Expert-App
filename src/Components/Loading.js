import React from "react";

const Loading = ({margin = "mt-8"}) => {
    return (
        <div 
          className={`h-12 w-12 border-white border-t-black border-8 rounded-full mx-auto animate-spin ${margin}`}>

        </div>
    );
};

export default Loading;
