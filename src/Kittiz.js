import React from 'react';
import { Link } from 'react-router-dom';

import kittiz from './kittiz.png';

const Kittiz = () => {
    return (
        <div className='header'>
            <Link to='/First'>
                <img src={kittiz} className='kittiz'></img>
            </Link>
            <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
            <Link to='/First/LineUp' className='button'>PLAYERS</Link>
            <Link to='/First/TodayGame' className='buttonGame'>GAMES</Link>

            <div className='content'>
                <div className='contenthead'>구단 인사말</div>
                <div className='contentbody'>
                    <p>안녕하세요</p>
                </div>
            </div>
        </div>
    )
}

export default Kittiz;