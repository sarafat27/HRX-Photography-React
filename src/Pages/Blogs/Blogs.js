import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='my-3'>Blogs </h2>
            <div>
                <h3>(1) Write the Differences between authorization and authentication.</h3>
                <p>Ans: Authentication is the process by which an user can be identified by the system.Besides,authorization is the process which determines wheather an user can get any type of special facility or not.Authentication is visible by the user and user can partially change it.But authorization process is not visible to user and user can do nothing in it.Authentication always comes first before authorization.As example,login or signup in facebook is authentication and accessing to any private group of facebook is authorization.</p>
            </div>
            <div>
                <h3>(2) Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Ans: I am using firebase because i can implement all kinds of authentication system in my website through it.Beside this websites can be deployed also in firebase.
                    <br />
                    I have many other options of authentication besides firebase.These are:
                    <br />
                    1.Auth0
                    <br />
                    2.Okta
                    <br />
                    3.IBM
                    <br />
                    4.Centrify
                    <br />
                    5.Imageware
                    <br />
                    of which,Auth0 is heavily used besides firebase.
                </p>
            </div>
            <div>
                <h3>(3) What other services does firebase provide other than authentication?</h3>
                <p>Ans: Besides authentication,many other services firebase provide.They are:hosting,cloud storage,cloud functions,cloud firestore,google analytics,cloud messaging,remote config,dynamic links etc. </p>
            </div>
        </div >
    );
};

export default Blogs;