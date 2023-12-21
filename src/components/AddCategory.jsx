import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        // setCategories( categorie => [inputValue, ...categorie]);
        onNewCategory( inputValue );
        setInputValue('');
    };

    return(
        <form onSubmit={ onSubmit }>
            <input 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
};