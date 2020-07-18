import Head from 'next/head';
import Link from 'next/link';
import Meta from './meta';
import HeaderComponent from './header';
import FooterComponent from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <HeaderComponent />
            {children}
            <FooterComponent />
            <style jsx global>
                {`
                    * {
                        font-size: 20px;
                    }
                `}
            </style>
        </>
    );
}
