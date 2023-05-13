import './App.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faBox, faTicket, faUser, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">

      <div className="navbar">
        <div className="navbar-top">
          <div className="Logo verticalAlignment">
            <div style={{ fontFamily: 'Noto Sans KR' }}><Link to="/menu/10011">kakaoPage</Link></div>
          </div>
          <div className="navbar-top-2">
            <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>추천</div>
            <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>웹툰</div>
            <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>
              <Link to="/menu/10011">웹소설</Link>
            </div>
            <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>책</div>
            <div className="verticalAlignment" style={{ fontFamily: 'Noto Sans KR' }}>바로가기</div>
          </div>

          <div className="navbar-top-searchContainer verticalAlignment">
            <form>
              <div><input className="navbar-top-searchContainer-input" /></div>
              <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </form>
          </div>

          <div className="navbar-top-4 ">
            <div className="verticalAlignment">
              <FontAwesomeIcon icon={faTicket} style={{ fontSize: "24px" }} />
            </div>
            <div className="verticalAlignment">
              <Link to="/inven/recent">
                <FontAwesomeIcon icon={faBox} style={{ fontSize: "24px" }} />
              </Link>
            </div>
            <div className="verticalAlignment">
              <Link to="/inven/recent">
                <FontAwesomeIcon icon={faGift} style={{ fontSize: "24px" }} />
              </Link>
            </div>
            <div className="verticalAlignment">
              <div className="navbar-top-4-toggleBtn ">
                <button onClick={()=>{

                }}>
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px" }} />
                </button>
                <button onClick={()=>{
                  
                }}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottom ">
        <button className="navbar-bottom-list-buttonCss">지금핫한</button>
        <button className="navbar-bottom-list-buttonCss">남성인기</button>
        <button className="navbar-bottom-list-buttonCss">실시간랭킹</button>
        <button className="navbar-bottom-list-buttonCss">판타지</button>
        <button className="navbar-bottom-list-buttonCss">현판</button>
        <button className="navbar-bottom-list-buttonCss">무협</button>
        <button className="navbar-bottom-list-buttonCss">드라마</button>
        <button className="navbar-bottom-list-buttonCss">로판</button>
        <button className="navbar-bottom-list-buttonCss">로맨스</button>
        <button className="navbar-bottom-list-buttonCss">단행본</button>
        <button className="navbar-bottom-list-buttonCss">요일</button>
        <button className="navbar-bottom-list-buttonCss">채팅소설</button>
        <button className="navbar-bottom-list-buttonCss">완전판</button>
        <button className="navbar-bottom-list-buttonCss">BL</button>
        <button className="navbar-bottom-list-buttonCss">여성인기</button>
        <button className="navbar-bottom-list-buttonCss">장르전체</button>
      </div>




    </div>
  );
}

export default App;
