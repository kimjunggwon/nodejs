const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);

}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error); 
    });


/*
    util 모듈
     - util.deprecate : 함수가 deprecated 처리되었을 알림, 첫 번째는 인수로 넣은 함수를 사용했을 때 경고 메시지 출력, 두 번째 인수로 경고 메시지 내용
     - util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿉니다.
*/