// #1

/* let foo = setInterval( () => {
    console.log("출력합니다.");
}, 1000);

setTimeout(function() {
    clearInterval(foo);
},5000); */

/* foo 함수는 setInterval 함수로 "출력합니다." 구문을 1초 마다 반복한다.
setTimeout 함수는 5000ms(5초) 뒤에 foo 함수의 반복을 중지한다.
"출력합니다."가 4번 반복되었을 때(4초) 5000ms(5초)가 되는 순간 중지된다. 즉 foo 함수는 4번만 실행된다.
5000ms가 되자마자 딱 종료한다. 이런 경우는 5050ms 과 같은 ms에 여유값을 주고 설정해두면 foo 함수를 5번 실행할 수 있다.
하지만 너무 작은 값 (5001ms, 5010ms) 같은 경우는 되지 않는다.  */

/* let bar;
bar = 10;
bar = 20;

console.log(bar); */

// 코드 5-19
//
/* let foo;
foo = function () {
    console.log("first function");
}
foo = () => {
    console.log("second function");
}

foo();
 */

// 코드 5-20
//
/* foo = () => {
    console.log("첫번째 함수");
}

function foo () {
    console.log("두번째 함수");
}

foo(); */

/* 선언한 순서에 상관없이, 익명함수와 화살표 함수는 선언적함수를 무조건적으로 덮어씌운다.
자바스크립트는 코드를 읽을 때, 선언적 함수를 가장 먼저 읽어들이고, 그 후에 실행코드를 읽기 때문에
선언적 함수르 선언된 foo가 foo () => 의 함수로 덮어씌워지기 때문에 foo() 함수를 실행했을 때, 화살표 함수로
선언한 함수가 실행되는 것이다. */

// 익명함수와 화살표 함수의 차이
// 내부에서 this 키워드가 가지는 의미

// 객체
// 배열은 요소에 접근할 때 index 값을 가지고 있고 객체는 key값을 가지고 있음

/* let array = ['사과', '바나나', '망고'];
let product  = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    원산지: '필리핀'

}

console.log(product);
console.log(product.제품명);
console.log(product.유형);
console.log(product['원산지']);
console.log("-------------------");

for (let key in product) {
    console.log(`${key} : ${product[key]}`);
}
 */

/*
let object = {
    name: '새우깡',
    price: 500,
    print: ()=> {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`)
    }
} */
// this 키워드를 쓰지 않으면, object 스코프 밖의 name 변수와 price 변수를 찾기 떄문에 정의되지 않았다고 오류가 뜬다.
// 또한 메소드를 화살표 함수로 선언하고, this 키워드를 쓴다면 화살표 함수의 this 키워드는 메소드를 소유한 객체를 가르키지 않고 상위 객체인 windows를 가리키기 떄문에 
// 메소드를 화살표 함수로 선언하는 것은 피해야한다.
/* object.print(); */

// JSON
// 객체 배열
/* let product = [
    {name: '사과', price: 1500},
    {name: '바나나', price: 1300},
    {name: '배', price: 1800},
];

console.log(product[0].name);
function printFruit(product) {
    console.log(`${product.name}의 가격은 ${product.price}입니다.`);
}

for (let p1 of product) {
    printFruit(p1);
} */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

let product = new Product('사과',1500);

console.log(product)

