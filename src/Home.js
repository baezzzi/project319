import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Home.css';
import logo from './kittiz_logo.png';

const Home = () => {
    return (
        <div className='container'>
            <Link to='/First' >
                <img src={logo} className='kittyLogo' />
            </Link>
        </div>
    );
};

export default Home;