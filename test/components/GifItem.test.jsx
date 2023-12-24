import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'One Punch' 
    const url   = 'https://media4.giphy.com/media/3ohzdOXZARMFbaqch2/giphy.gif?cid=9205ea0djz2iga5eje4jiq2xc6i9mrv4tqvd506j952xfrb3&ep=v1_gifs_search&rid=giphy.gif&ct=g'


    test('GifItem debe coincidir con el snapshot', () => {
        const { container } = render(
            <GifItem 
                title= { title }
                url= { url }
             />
        );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
         
        render( <GifItem title= { title } url= { url } /> );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect ( alt ).toBe( title );
    });

    test('Debe de mostar el titulo en el componente', () => {

        render( <GifItem title= { title } url= { url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});