import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories, setLimit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form
            className="bg-stone-800 py-5 drop-shadow-2xl flex justify-center"
            onSubmit={handleSubmit}
        >
            <input
                className="block w-1/3 p-2 rounded-sm rounded-r-none drop-shadow-2xl bg-stone-500 focus:outline-none text-right text-sky-300 uppercase font-extrabold text-lg"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

            <select 
                className="justify-self-end bg-stone-500 border-0 rounded-sm rounded-l-none text-sky-300 font-extrabold text-center shadow-none"
                onChange={handleLimitChange} >
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <button className="bg-sky-500 hover:bg-sky-900 px-2 sm:px-5 flex justify-center items-center font-sans font-semibold text-sm sm:text-lg text-white hover:text-sky-200 transition duration-200 ease-in-out">
                Submit
            </button>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
