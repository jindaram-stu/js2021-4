let foo = function() {
    console.log("[익 명 함 수]");
    console.log("함수 첫번째 줄");
    console.log("함수 두번째 줄");
    console.log("--------------------------");
}
console.log(foo);
foo();

// ---------------------------

function foo2() { // 선언적 함수
    console.log("[선 언 적 함 수]");
    console.log("선언적 함수 첫번째 줄");
    console.log("선언적 함수 두번째 줄");
    console.log("--------------------------");
}
console.log(foo2);
foo2();


// ---------------------------

let foo3 = () => { // 화살표 함수
    console.log("[화 살 표 함 수]");
    console.log("화살표 함수 첫번째 줄");
    console.log("화살표 함수 두번째 줄");
    console.log("--------------------------");
}
console.log(foo3);
foo3();

// ---------------------------

function foo4 (x) { // 기본 형태의 함수 예제 (제곱)
    return x*x;
}

console.log(foo4(5));

// ---------------------------

function multiply (x,y) { // 여러개의 매개변수를 가지고 있는 함수
    return x*y;
}

console.log(multiply(5,4));
console.log(multiply(5));

// ---------------------------

function print(x) { // 반환(return)이 없는 함수
    console.log(`${x}를 매개로 하는 프린트 함수 입니다.`);
}

print("안녕하세요");    

// ----------------------------

function sum(min,max) {
    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}

console.log(sum(5,7));

function mul(min,max) {
    let result = 1;
    for (let i = min; i <= max; i++) {
        result *= i;
    }
    return result;
}

console.log(mul(5,7));

// if (!매개변수) {} 를 통해 매개변수가 들어오지 전달되지 않았을 때의 초기값을 설정할 수 있다.
// <pre><code>
function print2(name, count) {
    // 기본적으로 변수에는 null 값이 들어있다. 즉 null값이 들어있을 떄 해당 if문을 실행하는 것이다.
    if (!count) { 
        count = 1;
    }
    console.log(`${name}은 ${count}개 입니다.`);
}
    print2("사과",10);
    print2("사과");

// ----------------------------
// 콜백함수
function print(callback1, callback2) {
    return sum(5,4) + multiple(5,4);
}

function sum(a,b) {
    return a+b;
}

function multiple (a,b) {
    return a*b;
}

console.log(print(sum(),multiple()));

// ----------------------------
// 표준 내장 함수
let var1 = "52";
let var2 = "52.723";
let var3 = "1401동";

console.log(parseInt(var1));
console.log(parseFloat(var2));
console.log(parseInt(var3));

// 타이머 함수
// setTimeout (함수, 1000) -> 1초 후에 해당 함수를 호출한다.
setTimeout(function() {
    console.log("안녕하세요.");
}, 1000);

let var5 = setInterval (function() {
    console.log("안녕하세요2")
}, 1000);

setTimeout(function() {
    clearInterval(var5);
    console.log("var5 함수를 정지합니다.");
}, 5000);

