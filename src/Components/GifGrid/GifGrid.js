import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import Loading from "../Loading";
import GifGridDelete from "./Buttons/GifGridDelete";

const GifGrid = ({ category, categories, setCategories, limit}) => {
    const { data: images, loading } = useFetchGifs(category, limit);

    return (
        <div className="relative">
            <h3 className="text-center font-bold text-lg sm:text-3xl text-sky-500 bg-stone-700 py-4 uppercase sticky top-0 z-10 break-words p-12">
                {category}
            </h3>
            {loading && <Loading />}
            
            <div className="flex flex-wrap justify-around p-5">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img}/>
                ))}
            </div>
            
            <GifGridDelete category={category} categories={categories} setCategories={setCategories}/>
        </div>
    );
};

export default GifGrid;
