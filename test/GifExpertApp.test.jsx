import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe coincidir con el snapshot', () => {
        const { container } = render( <GifExpertApp />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la categoria al agregarla en el input y el value del input vacio', () => {
        
        const categoria = 'Dragon Ball'
        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: categoria } } );
        fireEvent.submit( form ); 

        expect( screen.getByText('Dragon Ball') ).toBeTruthy();
        expect( input.value ).toBe('');

    });
});