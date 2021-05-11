// 삼항연산자 <조건식> ? <참> : <거짓>


let var1 = 0;
let test;
let var2;
// var1 = 0일 경우 "var1은 0"을 출력, 그 외의 값일 경우 "var1은 0아 아님!" 을 출력한다.
var1 == 0 ? console.log("var1은 0") : console.log("var1은 0이 아님!"); 


test = test ? test : "초기화 합니다.";
console.log(test);

// 짧은 초기화 조건문 ( A || B에서 A가 참일 경우 A로 대체, A || B 에서 A가 거짓일 경우 B로 대체)
var2 = var2 || "초기화1"; //var2 에는 아무것도 저장되있지 않기 때문에 false다. 그래서 var2에는 "초기화1"란 문자열로 초기화된다.
console.log(var2);

var2 = var2 || "초기화2"; // var2에는 이미 "초기화1" 으로 초기화 되어 있기 때문에 참이기 때문에 그대로 var2를 초기화한다. 그래서 그대로 "초기화1" 으로 초기화된다.
console.log(var2);
