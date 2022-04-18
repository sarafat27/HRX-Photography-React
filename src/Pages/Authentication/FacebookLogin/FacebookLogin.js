import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import fbLogo from '../../../images/fbLogo/facebook.png'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const FacebookLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'>

                </div>
                <p className='col-4 mt-3'>or</p>
                <div style={{ height: '2px' }} className='bg-dark w-50'>
                </div>
            </div>
            {errorElement}
            <Button onClick={() => signInWithFacebook()} className='w-100 d-block rounded-pill' variant="dark">
                <img className='me-2' width={25} src={fbLogo} alt="" />
                Login with facebook</Button>
        </div>
    );
};

export default FacebookLogin;