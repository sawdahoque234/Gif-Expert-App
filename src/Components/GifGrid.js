import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import Loading from "./Loading";

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="text-center font-bold text-lg sm:text-3xl text-sky-500 bg-stone-700 py-4 uppercase sticky top-0 z-10">
                {category}
            </h3>
            {loading && <Loading />}{" "}
            {/* It checks if 'loading(useFetchGifs.js) is true'*/}
            <div className="flex flex-wrap justify-around p-5">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

export default GifGrid;
