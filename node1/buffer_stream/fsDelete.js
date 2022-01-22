const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newfile.js');
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder');
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    });
/* 
    fs.readdir(경로, 콜백) : 폴더 안의 내용물을 확인할 수 있습니다.
    fs.unlink(경로, 콜백) : 파일을 지울 수 있습니다.
    fs.rmdir(경로 콜백) : 폴더를 지울 수 있습니다.
*/