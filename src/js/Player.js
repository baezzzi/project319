import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Player.css';

// image import
import kittiz from '../image/kittiz.png';
import playerheader from '../image/playerheader.png';
import p20 from '../image/p20.JPG';

const Player = () => {
    return (
        <div className='playercontainer'>
            <div className='header'>
                <Link to='/First'>
                    <img src={kittiz} className='kittiz'></img>
                </Link>
                <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
                <Link to='/First/Player' className='button'>PLAYERS</Link>
                <Link to='/First/Game' className='buttonGame'>GAMES</Link>
            </div>
            <img src={playerheader} className='playerheader'></img>

            {/* 첫 줄 */}
            <div className='players'>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>곰아찌 (51)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>다영웅니 (25)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>다영차 (01)</div>
                </div>
            </div>

            {/* 둘 째 줄 */}
            <div className='players'>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>다요 (369)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>민영차 (02)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>민옹식 (15)</div>
                </div>
            </div>

            {/* 셋 째 줄 */}
            <div className='players'>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>박다영 (19)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>응지연 (20)</div>
                </div>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>직장인 (96)</div>
                </div>
            </div>

            {/* 넷 째 줄 */}
            <div className='players'>
                <div className='playerbox'>
                    <img src={p20} className='p20'></img>
                    <div className='playername'>onge (24)</div>
                </div>
            </div>
        </div>
    )
}

export default Player;