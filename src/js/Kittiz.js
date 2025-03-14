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

            <div className='contentcontainer' align="center">
                <div className='content' >
                    <h1>안녕하세요?</h1>
                    <h3  > <br />
                        고양이를 좋아하지만 고양이가 아닌 no kittiz 입니다. <br />
                        다영이의 프로젝트를 준비한 건 1월 말 .. 독일에서 입니다. <br />
                        올해는 뭐하지!? 라는 생각과 브레인스토밍의 결과로 <br/> 생일카페 컨셉을 선택했습니다 ㅎㅎ <br />
                        그리하여 탄생한 no kittiz ! <br /> 2025년 신설된 구단 이름의 걸맞게 트렌디하고 독창적인 구단이 되겠습니다. <br />
                        어쩌구저ㄱ쩌구 구단소개 도대체 어케하는 겨? <br />
                        아무쪼록 저희가 가장 원하는 바는 다영이의 행복입니다 ! <br />
                        올해도 행복하게 (우리랑 같이) 보내시고 <br />
                    </h3>
                    <h1>다영아 생일 추카해!!!!!!!!!!!!</h1>
                </div>
            </div>
        </div>
    )
}

export default Kittiz;