import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/BannerImages/pic1.jpg'
import pic2 from '../../../images/BannerImages/pic2.jpg'
import pic3 from '../../../images/BannerImages/pic3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{ height: '500px' }}
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>HRX Photography</h3>
                    <p>This is one of the leading photography in bangladesh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '500px' }}
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>HRX Photography</h3>
                    <p>This is one of the leading photography in bangladesh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '500px' }}
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>HRX Photography</h3>
                    <p>
                        This is one of the leading photography in bangladesh
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;