import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Footer: FunctionComponent<Props> = (props) => {
    return (
        <div>
            This is footer
            <br />
            <Link to='/test'>Test</Link>
            &nbsp;
            <Link to='/'>Home</Link>
            <span>test</span>
        </div>
    );
};

export default Footer;
