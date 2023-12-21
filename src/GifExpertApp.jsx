import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories] );
        // setCategories( cat => [...cat, 'valorant']);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories = { setCategories }
                onNewCategory = { onAddCategory } 
            />

            {/* Listado de items/gifs */}

            <ol>
                {
                    categories.map( cat => {
                        return <li key={ cat }> { cat } </li>
                    })
                }
            </ol>

                {/* Gif item */}
        </>
    );
};