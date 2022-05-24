import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui';

interface Props {
    title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ( { children, title } ) => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Max Alva"/>
                <meta name="description" content={ `Informacion del pokemon ${ title }` }/>
                <meta name="keywords" content={ `${ title }, pokemon, pokedex` }/>
            </Head>

            <Navbar/>

            <main style={ {
                padding: '0 20px'
            } }>
                { children }
            </main>
        </>
    );
};
