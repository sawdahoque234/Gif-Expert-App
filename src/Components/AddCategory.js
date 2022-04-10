import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories, setLimitGifs }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form
            className="bg-stone-800 py-5 drop-shadow-2xl"
            onSubmit={handleSubmit}
        >
            <input
                className="block w-1/3 mx-auto p-2 rounded-sm drop-shadow-2xl bg-stone-500 focus:outline-none text-right text-sky-300 uppercase font-extrabold text-lg"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
