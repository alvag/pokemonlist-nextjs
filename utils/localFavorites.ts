const toggleFavorite = ( id: number ) => {
    let favorites: number[] = pokemons();

    if ( favorites.includes( id ) ) {
        favorites = favorites.filter( favoriteId => favoriteId !== id );
    } else {
        favorites.push( id );
    }
    localStorage.setItem( 'favorites', JSON.stringify( favorites ) );
};

const existInFavorites = ( id: number ): boolean => {
    const favorites: number[] = pokemons();
    return favorites.includes( id );
};

const pokemons = (): number[] => {
    return JSON.parse( localStorage.getItem( 'favorites' ) || '[]' );
};

export default {
    toggleFavorite,
    existInFavorites,
    pokemons
};
