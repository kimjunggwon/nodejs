const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();

        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, { Location: '/', 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; path=/`, });
        res.end();
    }else if(cookies.name){
        res.writeHead(200, { 'Content-Type':'text/html;charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    }else{
        try{
            const data = await fs.readFile('../html/cookie2.html');
            res.writeHead(200, { 'Content-Type':'text/html;charset=utf-8' });
            res.end(data);
        }catch(err){
            res.writeHead(500, { 'Content-Type':'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
})
.listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다.');
});

/*
    쿠키명 = 쿠키값 : 기본적인 쿠키의 값입니다.
    Expires = 날짜 : 만료 기한, 이 기한이 지나면 쿠키가 제거, 기본값을 클라이언트가 종료될 때까지입니다.
    Max-age = 초 : Expires와 비슷하지만 날짜 대신 초를 입력할 수 있습니다. 해당 초가 지나면 쿠키가 제거됩니다. Expires보다 우선합니다.
    Domain = 도메인명 : 쿠키가 전송될 도메인을 특정할 수 있습니다.
    Path = URL : 쿠키가 전송될 URL을 특정 할 수 있습니다.
    Secure : HTTPS일 경우에만 쿠키가 전송됩니다.
    HttpOnly : 쿠키 조작 방지를 막을 수 있는 설정입니다.
*/