import React from 'react';

import '../css/First.css';
import kittiz from '../image/kittiz.png';
import { Link } from 'react-router-dom';

const First = () => {

    return (
        <div className='header'>
            <Link to='/First'>
                <img src={kittiz} className='kittiz'></img>
            </Link>
            <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
            <Link to='/First/Player' className='button'>PLAYERS</Link>
            <Link to='/First/Game' className='buttonGame'>GAMES</Link>
        </div>
    )
};

export default First;