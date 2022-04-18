import React from 'react';
import './Album.css'
import pic1 from '../../../images/album/pic1.jpg'
import pic2 from '../../../images/album/pic2.jpg'
import pic3 from '../../../images/album/pic3.jpg'
import pic4 from '../../../images/album/pic4.jpg'
import pic5 from '../../../images/album/pic5.jpg'
import pic6 from '../../../images/album/pic6.jpg'
import pic7 from '../../../images/album/pic7.jpg'
import pic8 from '../../../images/album/pic8.jpg'
import pic9 from '../../../images/album/pic9.jpg'
const Album = () => {
    return (
        <div>
            <h2 className='my-5 text-success'>Our previous works</h2>
            <div className='album container'>
                <img className='mx-auto' src={pic1} alt="" />
                <img className='mx-auto' src={pic2} alt="" />
                <img className='mx-auto' src={pic3} alt="" />
                <img className='mx-auto' src={pic4} alt="" />
                <img className='mx-auto' src={pic5} alt="" />
                <img className='mx-auto' src={pic6} alt="" />
                <img className='mx-auto' src={pic7} alt="" />
                <img className='mx-auto' src={pic8} alt="" />
                <img className='mx-auto' src={pic9} alt="" />
            </div>
        </div>
    );
};

export default Album;