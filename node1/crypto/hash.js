const crypto = require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/*
    crypto 모듈의 객체
     - createHash(알고리즘) : 사용할 해시 알고리즘을 넣습니다.
      * 해시 알고리즘 종류 : md5, sha1, sha256(주 사용), sha512(주 사용)
     - update(문자열) : 변환할 문자열을 넣습니다.
     - digest(인코딩) : 인코딩할 알고리즘을 넣습니다.
      * 인코딩 알고리즘 : base64(주 사용), hex, latin1
*/