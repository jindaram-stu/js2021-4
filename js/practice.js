// 짧은 초기화 조건
// test = A||B에서 A가 참이라면, test에 A를 대입하고, 
// A가 거짓이라면, B를 test에 대입한다.

let test;

test = test || "테스트입니다."; // test에 null 값이 있기 때문에 false 로 판단하여 뒤에 문자열로 초기화시켰다.

console.log(test);

test = test || "두번째 테스트입니다."; // test에는 이미 "테스트입니다." 라는 문자열이 들어있기 때문에 B인 "두번째 테스트입니다." 로 초기화 되지 않는다.

console.log(test);