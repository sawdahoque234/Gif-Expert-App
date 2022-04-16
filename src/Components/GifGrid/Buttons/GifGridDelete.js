import React from "react";
import {FaTrash} from "react-icons/fa"; //Icons

const GifGridDelete = ({category, categories, setCategories}) => {
    return (
        <button
            className="delete-button"
            onClick={() => {
                const newCatState = categories.filter((cat) => {
                    return cat !== category;
                });

                setCategories(newCatState);
            }}
        >
            <FaTrash />
        </button>
    );
};

export default GifGridDelete;
