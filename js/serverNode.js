
// 모듈 추출
const response = require('express');
const express = require('express');

// 서버 생성
const app = express();

app.get('*', (request,response) => {
    response.status(404);
    response.set('methodA','ABCD');
    response.set({
        methodB1 : 'FGHIJ',
        methodB2 : 'KLMNO' ,
    });
    response.send('본문을 입력합니다.');
})

app.listen(52273,() => {
    console.log("Server running");
})