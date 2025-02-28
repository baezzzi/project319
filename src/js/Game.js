import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Game.css';

import logo from '../image/kittiz_logo.png';
import kiwoom from '../image/kiwoom.png';
import kittiz from '../image/kittiz.png';
import gameheader from '../image/gmaeheader.png';

const Game = () => {

    function getTodayInfo() {
        const today = new Date(); // 현재 날짜 가져오기
        const month = today.getMonth() + 1; // 월 (0부터 시작하므로 +1)
        const date = today.getDate(); // 일
        const dayNames = ['일', '월', '화', '수', '목', '금', '토']; 
        const day = dayNames[today.getDay()]; // 요일
    
        return `${month}월 ${date}일 ${day}요일`;
    }

    return (
        <div className='gamecontainer'>
            <div className='header'>
                <Link to='/First'>
                    <img src={kittiz} className='kittiz'></img>
                </Link>
                <Link to='/First/Kittiz' className='buttonKittiz'>KITTIZ</Link>
                <Link to='/First/Player' className='button'>PLAYERS</Link>
                <Link to='/First/Game' className='buttonGame'>GAMES</Link>
            </div>

            <img src={gameheader} className='gameheader'></img>

            <div className='Games'>
                <div className='todaygame'>
                    <div className='date'>{getTodayInfo()}</div>
                </div>
                <div className='justline'></div>
                <div className='teams'>
                    <img src={logo} className='ktzlogo'></img>
                    <div className='versus'>VS</div>
                    <img src={kiwoom} className='kiwoomlogo'></img>
                </div>
                <div className='lineup'>
                    <div className='ktzLineup'>
                        <div className='pitcher'>박다영 (19)</div>
                        <div className='nums'>
                            <div className='num'>1</div>
                            <div className='pbox'>
                                <p className='gplayer'>곰아찌 (51) 3B</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>2</div>
                            <div className='pbox'>
                                <p className='gplayer'>직장인 (96) 1B</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>3</div>
                            <div className='pbox'>
                                <p className='gplayer'>다요 (369) SS</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>4</div>
                            <div className='pbox'>
                                <p className='gplayer'>onge (24) DH</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>5</div>
                            <div className='pbox'>
                                <p className='gplayer'>민영차 (02) LF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>6</div>
                            <div className='pbox'>
                                <p className='gplayer'>다영차 (01) CF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>7</div>
                            <div className='pbox'>
                                <p className='gplayer'>응지연 (20) RF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>8</div>
                            <div className='pbox'>
                                <p className='gplayer'>다영웅니 (25) C</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num'>1</div>
                            <div className='pbox'>
                                <p className='gplayer'>민옹식 (15) 2B</p>
                            </div>
                        </div>
                    </div>

                    <div className='kiwoomLineup'>
                        <div className='pitcher2'>이명종 (38)</div>
                        <div className='nums'>
                            <div className='num2'>1</div>
                            <div className='pbox2'>
                                <p className='gplayer'>이주형 (2) RF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>2</div>
                            <div className='pbox2'>
                                <p className='gplayer'>안우진 (41) DH</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>3</div>
                            <div className='pbox2'>
                                <p className='gplayer'>김혜성 (3) 2B</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>4</div>
                            <div className='pbox2'>
                                <p className='gplayer'>이정후 (51) CF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>5</div>
                            <div className='pbox2'>
                                <p className='gplayer'>김하성 (7) SS</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>6</div>
                            <div className='pbox2'>
                                <p className='gplayer'>송성문 (24) 3B</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>7</div>
                            <div className='pbox2'>
                                <p className='gplayer'>최주환 (53) 1B</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>8</div>
                            <div className='pbox2'>
                                <p className='gplayer'>변상권 (56) LF</p>
                            </div>
                        </div>
                        <div className='nums'>
                            <div className='num2'>1</div>
                            <div className='pbox2'>
                                <p className='gplayer'>홍원기 (78) C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;