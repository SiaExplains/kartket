import Link from 'next/link';

const HeaderComponent = () => {
    return (
        <>
            This is header
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/ali'>
                <a>Ali</a>
            </Link>
        </>
    );
};

export default HeaderComponent;
