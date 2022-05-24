import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/ui';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {
    return (
        <Layout title="Listado de Pokemons">
            <Grid.Container gap={ 2 } justify={ 'flex-start' }>
                {
                    pokemons.map( pokemon => (
                        <PokemonCard
                            key={ pokemon.id }
                            pokemon={ pokemon }/>
                    ) )
                }
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ( context ) => {

    const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=150' );
    const pokemons: SmallPokemon[] = data.results.map( ( pokemon, index ) => ( {
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
    } ) );
    return {
        props: {
            pokemons
        }
    };
};

export default HomePage;

