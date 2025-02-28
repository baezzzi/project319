import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Player.css';

// image import
import kittiz from '../image/kittiz.png';
import playerheader from '../image/playerheader.png';

const Player = () => {
    return (
        <div className='playercontainer'>
            <div className='players'>
                <div className='header'>
                    <Link to='/First'>
                        <img src={kittiz} className='kittiz'></img>
                    </Link>
                    <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
                    <Link to='/First/Player' className='button'>PLAYERS</Link>
                    <Link to='/First/Game' className='buttonGame'>GAMES</Link>
                </div>
                <img src={playerheader} className='playerheader'></img>
                <div className='playertitle'>title</div>
            </div>
        </div>
    )
}

export default Player;