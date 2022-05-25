import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui';

interface Props {
    title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ( { children, title } ) => {

    const origin = ( typeof window !== 'undefined' && window.location.origin ) || '';

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Max Alva"/>
                <meta name="description" content={ `Informacion del pokemon ${ title }` }/>
                <meta name="keywords" content={ `${ title }, pokemon, pokedex` }/>

                <meta property="og:title" content={ `Información sobre ${ title }` }/>
                <meta property="og:description" content={ `Esta es la pagina sobre ${ title }` }/>
                <meta property="og:image" content={ `${ origin }/img/banner.png` }/>
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
