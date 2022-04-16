import React from "react";
import { BiCopyAlt } from "react-icons/bi";
import Tooltip from "../Tooltip";

const GifGridButtonCopy = ({url}) => {
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(url); //Copying the link to clipboard
            }}
            className="bg-sky-400 focus:bg-sky-800 py-4 block w-1/2 text-center font-sans text-3xl text-sky-100 group relative transition-all duration-200 rounded-br-md"
        >
            <BiCopyAlt className="inline animate-[pulse_2s_ease-out_infinite] active:scale-110 transition-all duration-100" />
            <Tooltip text={"Copied!"} />
        </button>
    );
};

export default GifGridButtonCopy;
