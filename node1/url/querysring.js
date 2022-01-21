const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

/*
    url 모듈 querystring 객체
     - querystring.parse(쿼리) : url의 query부분을 자바 스크립트 객체로 분해합니다.
     - querystring.stringify(객체) : 분해된 query 객체를 문자열로 다시 조립합니다.
*/