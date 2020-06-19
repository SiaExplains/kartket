import React, { FunctionComponent } from 'react';

interface Props {}

const NotFoundComponent: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>you try to open wrong page</p>
        </div>
    );
};

export default NotFoundComponent;
