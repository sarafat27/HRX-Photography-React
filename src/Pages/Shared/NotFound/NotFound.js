import React from 'react';
import notFound from '../../../images/notFound/notFound.png'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger my-3'>Error Not found</h2>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;