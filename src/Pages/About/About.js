import React from 'react';
import me from '../../images/about/me.JPG'
const About = () => {
    return (
        <div>
            <h2 className='text-success my-3'>My introduction</h2>
            <div className='mx-auto' style={{ height: 600, width: 300 }}>
                <img height={300} width={250} src={me} alt="" />
                <p className='mt-2 text-success'>My name is Md. Sarafat Hossain.I have graduated in computer science and engineering.I am determined to be a full stack web developer.That's why i am working hard daily to acheive my goal.I am completing the modules of programming hero course and practising a lot to reach my desired destination.</p>
            </div>
        </div>
    );
};

export default About;