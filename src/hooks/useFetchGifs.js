import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async()=> {
        try{
            const newImages = await getGifs( category );
            setImages( newImages );
            setIsLoading( false );
        }catch(error){
            console.error('Error fetching gifs:', error);
        }
    };

    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
};