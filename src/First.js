import React from 'react';

import './First.css';
import logo from './kittiz_logo.png';
import kittiz from './kittiz.png';
import { Link } from 'react-router-dom';

const First = () => {

    return (
        <div className='header'>
            <Link to='/First'>
                <img src={kittiz} className='kittiz'></img>
            </Link>
            <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
            <Link to='/First/LineUp' className='button'>PLAYERS</Link>
            <Link to='/First/TodayGame' className='buttonGame'>GAMES</Link>
        </div>
    )
};

export default First;