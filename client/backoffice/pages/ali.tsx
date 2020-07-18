import Layout from '../components/layout/layout';

const AliPage: Function = () => {
    return (
        <>
            <h4 className='boldBlue'>This is ali page!</h4>

            <style jsx>
                {`
                    .boldBlue {
                        color: blue;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    );
};

export default AliPage;
