import Link from 'next/link';

const FooterComponent = () => {
    return (
        <>
            This is Footer <br />
            <Link href='/sitemap'>
                <a>Sitemap</a>
            </Link>
        </>
    );
};

export default FooterComponent;
