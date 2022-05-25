import { Layout } from '../../components/layouts';
import { FavoritePokemons, NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

    const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>( [] );

    useEffect( () => {
        setFavoritePokemons( localFavorites.pokemons() );
    }, [] );

    return (
        <Layout title={ 'Pokemons Favoritos' }>
            {
                !favoritePokemons.length
                    ? <NoFavorites/>
                    : ( <FavoritePokemons pokemons={ favoritePokemons }/> )
            }
        </Layout>
    );
};

export default FavoritesPage;
