import './App.css';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faBox, faTicket, faUser, faMagnifyingGlass, faAngleDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Webnovel } from './routes/webnovel.js';

import { Novel10001 } from './routes/novel/화산천마.js'

function App() {

  let [drag, setDrag] = useState(false); //드래그 스위치
  let [storedDragValue, setStoredDragValue] = useState(0); //저장된 드래그 값
  let [dragValue, setDragValue] = useState(0); //현재움직인 값
  let [downX, setDownX] = useState(0); //클릭한 곳의 X 좌표

  function clickBtn(e) {
    let btns = document.querySelectorAll('.navbar-bottom-list-buttonCss');;
    btns.forEach((btn, index) => {
      btn.classList.remove('navbar-bottom-list-buttonCss-click');
    })
    e.target.classList.add('navbar-bottom-list-buttonCss-click');
  }
  function mouseDown(e) {
    if (drag == false) {
      setDrag(true); //드래그 스위치 on
      setDragValue(0); //현재값 초기화
      setDownX(e.clientX); //클릭시 X좌표
    }
  }
  function mouseMove(e) {
    if (drag == true) {//클릭시
      setDragValue(e.clientX - downX); //현재 움직인 X값
      if (storedDragValue + dragValue > 0) {
        document.querySelector('.navbar-bottom').style.transform = `translateX(0px)`;
        console.log('더못가')
        //좌측으로 더 당겨도 못감
      } else if (storedDragValue + dragValue < 0 && storedDragValue + dragValue > -230) {
        document.querySelector('.navbar-bottom').style.transform = `translateX(${storedDragValue + dragValue}px)`;
        //이제까지 움직인 div 박스의 거리
      } else if (storedDragValue + dragValue < -230) {
        document.querySelector('.navbar-bottom').style.transform = `translateX(-230px)`;
        console.log('더못가')
        // 우측으로 더 당겨도 못감
      }
    }
  }
  function mouseUp(e) {
    setDrag(false);//스위치 off
    ;//이제까지 움직인 거리 저장
    setStoredDragValue(storedDragValue + dragValue)
    console.log(storedDragValue);
  }
  function mouseOut(e) {
    if (drag == true) {
      setDrag(false);//스위치 off
      setStoredDragValue(storedDragValue + dragValue);//이제까지 움직인 거리 저장
      console.log(storedDragValue);
    }
  }



  let navigate = useNavigate();

  let [navbar, setNavbar] = useState(["추천", "웹툰", "웹소설", "책", "바로가기"]);
  let [navbar주소, setNavbar주소] = useState(["/menu/추천", "/menu/웹툰", "/menu/웹소설", "/menu/책", "/menu/바로가기"]);
  let [navBottomMenus, setnavBottomMenus] = useState(["지금핫한", "남성인기", "실시간랭킹", "판타지", "현판", "무협", "드라마", "로판", "로맨스", "단행본", "요일", "채팅소설", "완전판", "BL", "여성인기", "장르전체"])

  return (
    <div className="App">

      <div className="navbar" >
        <div className="navbar-top">
          <div className="navbar-top-Logo Logo verticalAlignment">
            <div style={{ fontFamily: 'Noto Sans KR' }}>
              <Link
                to="/menu/웹소설"
                className="navbar-top-2-Links"
                onClick={(e) => {
                  let links = document.querySelectorAll('.navbar-top-2-Links');
                  links.forEach((link, index) => {
                    link.classList.remove('navbar-top-2-Links-click')
                  })
                }}>kakaoPage</Link>
            </div>
          </div>
          <div className="navbar-top-2">
            {
              navbar.map((navbarName, index) => {
                return (
                  <Navbarmenu navbarName={navbarName} index={index} navbar주소={navbar주소} key={index} />
                )
              })
            }
          </div>
          <div className="navbar-top-searchContainer verticalAlignment">
            <form>
              <div><input className="navbar-top-searchContainer-input" placeholder='작가,제목을 입력하세요' /></div>
              <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </form>
          </div>
          <div className="navbar-top-4 ">
            <div className="verticalAlignment">
              <FontAwesomeIcon icon={faTicket} style={{ fontSize: "24px" }} />
            </div>
            <div className="verticalAlignment">
              <Link to="/inven/recent" className="navbar-top-4-Links">
                <FontAwesomeIcon icon={faBox} style={{ fontSize: "24px" }} />
              </Link>
            </div>
            <div className="verticalAlignment">
              <Link to="/inven/recent" className="navbar-top-4-Links">
                <FontAwesomeIcon icon={faGift} style={{ fontSize: "24px" }} />
              </Link>
            </div>
            <div className="verticalAlignment">
              <div className="navbar-top-4-toggleBtn ">
                <button onClick={() => {

                }}>
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px" }} />
                </button>
                <button onClick={() => {

                }}>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom-container">
        <div className="navbar-bottom" draggable="false"
          onMouseDown={(e) => { mouseDown(e) }}
          onMouseMove={(e) => { mouseMove(e) }}
          onMouseUp={(e) => { mouseUp(e) }}
          onMouseOut={(e) => { mouseOut(e) }}>
          {
            navBottomMenus.map((menu, index) => {
              return (
                <NavBottomMenu menu={menu} index={index} clickBtn={clickBtn} key={index} />
              )
            })
          }

        </div>
      </div>

      <div className="voidSpace"></div>

      <Routes>
        <Route path={`${navbar주소[0]}`} element={<><div>추천페이지입니다</div></>} />
        <Route path={`${navbar주소[1]}`} element={<><div>웹툰페이지입니다</div></>} />
        <Route path={`${navbar주소[2]}`} element={
          <Webnovel/ >
        } />
        <Route path={`${navbar주소[3]}`} element={<><div>책페이지입니다</div></>} />
        <Route path={`${navbar주소[4]}`} element={<><div>바로가기페이지입니다</div></>} />

        <Route path={`/content/10001`} element={ < Novel10001 /> } />

      </Routes>

    </div >
  );
}

function Navbarmenu(props) {
  return (
    <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>
      <Link to={`${props.navbar주소[props.index]}`}
        className="navbar-top-2-Links"
        onClick={(e) => {
          let links = document.querySelectorAll('.navbar-top-2-Links');
          links.forEach((link, index) => {
            link.classList.remove('navbar-top-2-Links-click')
          })
          e.target.classList.add('navbar-top-2-Links-click');
        }}>{props.navbarName}</Link>
    </div>
  )
}
function NavBottomMenu(props) {
  return (
    <button className="navbar-bottom-list-buttonCss" onClick={
      (e) => { props.clickBtn(e) }}>{props.menu}</button>
  )
}

export default App;
