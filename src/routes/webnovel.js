import { useState, Link, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '.././App.css';


function Webnovel(props) {

    const [currentSlide, setCurrentSlide] = useState(-10 * 3.5) // 초기값 -100*3.5
    let [slideSwitch, setSlideSwitch] = useState(0); // 0: 없음, -1: next, 1: prev
    // 다음 슬라이드 값을 받아와서 실제로 슬라이드를 움직임
    useEffect(() => {
        let slide = document.querySelector('.main-content1');
        slide.style.transform = `translateX(${currentSlide}%)`;
        무한캐러셀(); //특정 슬라이드에 도착시 해당 캐러셀로 애니메이션 없이 이동해 눈속임으로 무한 캐러셀 실행
    }, [currentSlide])

    function 무한캐러셀() {
        setTimeout(() => { // 슬라이드가 다 움직인 이후 실행되게 만듬
            if (currentSlide == -5 && slideSwitch == 1) { // 해당 슬라이드에 next 버튼 누른 상태에서 시작
                let slide = document.querySelector('.main-content1'); // 움직이는 컨테이너
                slide.style.transition = 'none'; // 트랜지션 없애서 이동효과 없애기
                setCurrentSlide(-45); // 이동할 슬라이드값으로 변경 ( 이때 useEffect로 가버림 )
                setSlideSwitch(0); // 스위치 닫기
            } else if (currentSlide == -65 && slideSwitch == -1) {
                let slide = document.querySelector('.main-content1'); // 움직이는 컨테이너
                slide.style.transition = 'none';
                setCurrentSlide(-25);
                setSlideSwitch(0);
            } else {
                return
            }
        }, 1000);
    };

    return (

        <div className="main">
            <div className="main">
                <div className="main-advertisement1">
                    웹툰 데못죽 시즌2 컴백!
                </div>
                <div className="main-content1-container">
                    <button
                        className="main-content1-carouselBtn-prev"
                        onClick={() => {
                            let slide = document.querySelector('.main-content1');
                            slide.style.transition = 'all 1s' // 트랜지션 줘서 효과주기
                            setCurrentSlide(currentSlide + 10); // 다음 슬라이드 값으로 변경
                            setSlideSwitch(1); // next 스위치 on
                            //바로 useEffect로 슬라이드 움직임
                        }}

                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="main-content1">
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-0.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-1.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-2.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-3.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-0.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-1.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-2.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-3.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-0.png`} /></div>
                        <div><img className="main-content1-images" src={process.env.PUBLIC_URL + `/mainContent1-1/mainContent1-1.png`} /></div>
                    </div>
                    <button
                        className="main-content1-carouselBtn-next"
                        onClick={() => {
                            let slide = document.querySelector('.main-content1');
                            slide.style.transition = 'all 1s'
                            setSlideSwitch(-1);
                            setCurrentSlide(currentSlide - 10);

                            //바로 useEffect로 슬라이드 움직임
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
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
                    충격! 유재석 재입대? 5/16 플유 4화 대공개
                </div>

            </div>
        </div >

    )
}

export { Webnovel }