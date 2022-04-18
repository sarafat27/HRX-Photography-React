import React from 'react';
import me from '../../images/about/me.JPG'
const About = () => {
    return (
        <div>
            <h2 className='text-success my-3'>My introduction</h2>
            <div className='mx-auto border border-3 border-dark rounded' style={{ height: 600, width: 300, padding: '5px' }}>
                <img height={300} width={250} src={me} alt="" />
                <h3>Md. Sarafat Hossain</h3>
                <p className='mt-2 text-white bg-dark rounded p-2'>I have graduated in computer science and engineering.I am determined to be a full stack web developer.That's why i am working hard daily to acheive my goal.I am completing the modules of programming hero course and practising a lot to reach my desired destination.</p>
            </div>
        </div>
    );
};

export default About;