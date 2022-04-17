import React from 'react';
import { Button } from 'react-bootstrap';
import fbLogo from '../../../images/fbLogo/facebook.png'
const FacebookLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'>

                </div>
                <p className='col-4 mt-3'>or</p>
                <div style={{ height: '2px' }} className='bg-dark w-50'>
                </div>
            </div>
            <Button className='w-100 d-block rounded-pill' variant="dark">
                <img className='me-2' width={25} src={fbLogo} alt="" />
                Login with facebook</Button>
        </div>
    );
};

export default FacebookLogin;