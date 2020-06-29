import React from 'react';

const CategoryCompoenent = (props) => {
    return (
        <div>
            <h3>Categories Management</h3>
            <div>
                <label>Title:</label>
                <input placeholder='title' />
            </div>
            <div>
                <label>Description:</label>
                <input placeholder='description' />
            </div>
        </div>
    );
};

export default CategoryCompoenent;
