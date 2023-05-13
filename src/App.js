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
      <div className="boidSpace"></div>
      <div className="main">
        <div className="main-advertisement1">
          <Link to="/event/70eaffed97d54ecb9ea3c0cf2bcca789">웹툰 데못죽 시즌2 컴백!</Link>
        </div>
        <div className="main-content1-container">
          <div className="main-content1">
            <div><img className="main-content1-images" src={"https://dn-img-page.kakao.com/download/resource?kid=b1Tdg9/hzXasDymck/J0yRLkekjBbI2z61PnXnqK&filename=th3"} /></div>
            <div><img className="main-content1-images" src={"https://dn-img-page.kakao.com/download/resource?kid=cBMB1N/hzMT5dKY1I/PZTkduzWUH1YTGRAKP7wx1&filename=th3"} /></div>
            <div><img className="main-content1-images" src={"https://dn-img-page.kakao.com/download/resource?kid=b0V5Zb/hzVqD1EAmO/rwvgIbdc1LX4yH129Hdvb0&filename=th3"} /></div>
            <div><img className="main-content1-images" src={"https://dn-img-page.kakao.com/download/resource?kid=5f0EZ/hAd4VoLtJX/SzS0Pj6Ogxl3PK0Z3gEwMk&filename=th3"} /></div>
            <div><img className="main-content1-images" src={"https://dn-img-page.kakao.com/download/resource?kid=cd2S1s/hAd4f8Ckmq/rmFrUgmMld3PojKU8nJkd1&filename=th3"} /></div>
          </div>
        </div>

        <div className="main-content2-container">
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=bF7Qzn/hyzT0jnEqg/5HdFNwUCkAYFdlySESoxU0&filename=th3"} /></div>
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=vIfzm/hAdNV3EBUI/mB5fSz9QKmhQlgkKXKBidk&filename=th3"} /></div>
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=bcZq24/hzCs6VHJGe/b9S2ziTbwEPcVvSQ0rrZr0&filename=th3"} /></div>
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=dXoLM/hAdNRmEavx/rbmcN6ihhxslzelwI1dnc1&filename=th3"} /></div>
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=cm1RcI/hzN2kVDxFO/OB0DAkrrtzUFL1LnEA2rO0&filename=th3"} /></div>
          <div><img src={"https://dn-img-page.kakao.com/download/resource?kid=e4thK/hzVqH33HpM/NnuAvxrtdR7UDBpWzr5P71&filename=th3"} /></div>
        </div>

        <div className="main-advertisement2">
          <Link to="/event/70eaffed97d54ecb9ea3c0cf2bcca789">충격! 유재석 재입대? 5/16 플유 4화 대공개</Link>
        </div>

      </div>



    </div>
  );
}

export default App;
