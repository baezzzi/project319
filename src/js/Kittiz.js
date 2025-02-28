import React from 'react';
import { Link } from 'react-router-dom';

import '../css/kittiz.css';

import kittiz from '../image/kittiz.png';
import kittizheader from '../image/kittizhedaer.png';

const Kittiz = () => {
    return (
        <div className='kittizcontainer'>
            <div className='header'>
                <Link to='/First'>
                    <img src={kittiz} className='kittiz'></img>
                </Link>
                <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
                <Link to='/First/Player' className='button'>PLAYERS</Link>
                <Link to='/First/Game' className='buttonGame'>GAMES</Link>
            </div>

            <div className='kittizheader'>
                <img src={kittizheader} className='kittizheader'></img>
            </div>
        </div>
    )
}

export default Kittiz;