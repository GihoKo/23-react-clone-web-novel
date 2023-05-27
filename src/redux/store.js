import { configureStore, createSlice } from '@reduxjs/toolkit'

let novels = createSlice({
    name : '화산천마',
    initialState : {
        id : 10001,
        title : '화산천마',
        조회수 : '2,513.2만',
        별점 : 9.5,
        장르 : ['웹소설','무협'],
        작가 : '사야객',
        전체화수 : '101화',
        썸네일 : "http://dn-img-page.kakao.com/download/resource?kid=bRq6rW/hzCtbWb45y/1kob45o06bMNOa7DMb7LY1&filename=th3",
        연재요일 : "월,화,수,목,금 연재",
        
    }
})

export default configureStore({
    reducer: {
    novels : novels.reducer
    }
})

// 웹소설 데이터