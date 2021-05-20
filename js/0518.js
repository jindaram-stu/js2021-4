// process.on('exit', () => {
//     console.log('프로세스가 종료되었습니다.');
// });

/* process.on('exit', (code) => {
    console.log('프로세스가 종료됩니다.');
    console.log(`About to exit with code : ${code}`); // 0일 경우 일반적임, 1일 경우 강제종료
})
process.on('uncaughtException',(err) => {
    console.log('예외가 발생했습니다.')
    console.log(`About to error with code : ${err}`);
})

error.error.error; */


/* const os = require('os');

console.log(os.hostname()); // 데스크탑 이름
console.log(os.uptime()); // 운영체제가 실행된 시간
console.log(os.arch());
console.log(os.freemem());
console.log(os.cpus());

const url = require('url');

console.log(url.parse('https://naver.com')); */

const fs = require('fs');
const file = fs.readFileSync('pizza.txt');

console.log(file);
console.log(file.toString());