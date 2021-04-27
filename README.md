# 진승범 [201840230]

## [04월 27일]
#### 1. setInterval(), setTimeout(), clearInterval()

#### 2. 선언적 함수와 익명함수 호출 순서

#### 3. 익명함수와 화살표 함수의 차이 (this 키워드)

#### 4. 객체
> 배열은 index 로 값을 구분하지만 객체는 key 값으로 값을 구분한다.
<pre><code>
let product = {
    제품명: '신라면',
    제조사: '농심'.
    가격: 900,
    칼로리 : '500kcal'
}
</code></pre>
> 이런식으로 객체를 구성할 수 있다. 앞에 [제품명, 제조사, 가격, 칼로리]가 key 값이 되는 것이다. 이를 출력하려면<br> console.log(product[key]) 의 형태로 출력할 수 있다.
<pre><code>
console.log(product[제품명]);
console.log(product[제조사]);
console.log(product[가격]);
console.log(product[칼로리]);
</code></pre>
>이런 형식으로 객체가 가지고 있는 key의 값들을 출력할 수 있다. 또한 for문을 이용하여 객체의 모든 값들을 출력할 수 있다.

<pre><code>
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}
</code></pre>
> 해당 for문을 이용해서 해당 객체의 모든 값을 출력할 수 있다.
><br>
>변수뿐만 아니라, 배열, 함수도 역시 객체에 포함될 수 있다.

<pre><code>
let object = {
    name: '새우깡',
    price: 500,
    print: () => {
        console.log(`${this.name}의 가격은 ${this.price}입니다.`)
    }
}

object.print();
</code></pre>
> print 함수에서 ket값의 앞에 this 키워드를 쓰지 않으면, object 스코프 밖의 name 변수와 price 변수를 찾기 때문에 정의되지 않았다고 오류가 뜬다.
## [04월 13일]
#### 1. 함수 (Function)
##### 1-1. 익명함수
> 이름을 붙이지 않고, 변수 안에 함수 생성
> 함수를 호출하면 내부의 코드 덩어리 모두 실행
<pre><code>
let 함수 = function {
    console.log("익명 함수 첫번째 줄");
    console.log("익명 함수 두번째 줄");
}

함수명();
console.log(함수명);

// 출력결과
// 익명 함수 첫번째 줄
// 익명 함수 두번째 줄
</code></pre>
##### 1-2. 선언적 함수
> 이름을 붙여, 함수를 생성
<pre><code>
function 함수명() {
    console.log("선언적 함수 첫번째 줄");
    console.log("선언적 함수 두번째 줄");
}

함수명();

// 출력결과
// 선언적 함수 첫번째 줄
// 선언적 함수 두번째 줄
</code></pre>

##### 1-3. 화살표 함수
> '하나의 표현식을 리턴하는 함수'를 만들 때는 중괄호 생략 가능
<pre><code>
let 함수명 = () => {
    console.log("화살표 함수 첫번째 줄");
    console.log("화살표 함수 두번째 줄");
}

함수명();

// 출력결과
// 화살표 함수 첫번째 줄
// 화살표 함수 두번째 줄
</code></pre>
#### 2. 함수의 기본형태
###### 함수의 기본형태
<pre><code>
function <함수 이름>(<매개변수>) {
    <함수 코드>;
    return <리턴 값>;
} 
</code></pre>
###### 함수 예제 (제곱 함수)
<pre><code>
function square (x) {
    return x*x;
}

console.log(square(5));

// 출력결과
// 25
</code></pre>
###### 여러 매개변수의 함수
<pre><code>
funciton multiply (x,y) {
    return x*y;
}

console.log(multiply(5,4));
console.log(multiply(5));

// 실행결과
// 20
// NaN
</code></pre>
###### 반환형이 없는 함수
<pre><code>
function print(x) {
    console.log(`$[x]를 매개인자로 받는 프린트 함수입니다.`);
}

print("안녕하세요");

// 실행결과
// 안녕하세요를 매개인자로 받는 프린트 함수입니다.
</code></pre>

###### 여러가지 함수 형태
<pre><code>
// min 값 부터 max 까지 더하기

function sum(min,max) {
    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}
console.log(sum(5,7));

// 실행결과
// 18
</code></pre>
<pre><code>
// min 값 부터 max 까지 곱하기

function sum(min,max) {
    let result = 1;
    for (let i = min; i <= max; i++) {
        result *= i;
    }
    return result;
}
console.log(sum(5,7));

// 실행결과
// 18
</code></pre>

#### 3. 매개변수 검사
> if (!매개변수) {} 를 통해 매개변수가 들어오지 전달되지 않았을 때의 초기값을 설정할 수 있다.
<pre><code>
function print2(name, count) {
    // 기본적으로 변수에는 null 값이 들어있다. 즉 null값이 들어있을 떄 해당 if문을 실행하는 것이다.
    if (!count) { 
        count = 1;
    }
    console.log(`${name}은 ${count}개 입니다.`);
}
    print2("사과",2);
    print2("사과");

    // 실행결과
    // 사과는 2개 입니다.
    // 사과는 1개 입니다.
</code></pre>
> <strong> if문 말고 count = count || 1; 로 더 짧게 표현할 수 있다. </strong>
> a = a || b // a가 true(null X)면 a로 초기화, a가 false(null O)면 b로 초기화
#### 4.콜백함수 (CallBack)
> 함수를 매개변수로 받아, 다른 함수에서 매개변수로 받은 함수를 사용할 수도 있습니다. 이를 콜백(Callback) 함수라고 합니다.
<pre><code>
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
</code></pre>

#### 5. 표준 내장 함수
##### 5-1. 숫자 변환 함수
> parseInt() : 문자열을 정수로 변환합니다.
> parseFloat() : 문자열을 실수로 변환합니다.
<pre><code>
let var1 = "52";
let var2 = "52.723";
let var3 = "1401동";

console.log(parseInt(var1));
console.log(parseFloat(var2));
console.log(parseInt(var3));
</code></pre>
##### 5-2. 타이머 함수
> setTimeout(함수, 시간) : 특정 시간 후에 함수를 실행합니다.
> setInterval(함수, 시간) : 특정 시간마다 함수를 실행합니다.
> clearInterval(함수) : 특정 시간마다 반복하던 함수를 종료시킵니다.

<pre><code>
setTimeout(function() {
    console.log("안녕하세요.");
}, 1000);

let var5 = setInterval (function() {
    console.log("안녕하세요2")
}, 1000);

setTimeout(function() {
    clearInterval(var5);
    console.log("함수를 정지합니다.");
}, 5000);



// 실행결과
// (1초후에) 안녕하세요
// (1초마다) 안녕하세요2
// 안녕하세요
// 안녕하세요2
// 안녕하세요2
// 안녕하세요2
// 안녕하세요2
// Ctrl + C 시 종료.
</code></pre>




## [04월 09일]
#### 1. 역 for 반복문  
> 감소연산자를 통해 배열을 끝 자리부터 첫 자리까지 출력시키는 for문을 구현할 수 있다.
<pre><code>
let array = [] 1, 2, 3, 4, 5 ];

for (int i = array.lennth-1; i>=0; i--) {
    console.log(array[i]);
}
</code></pre>

#### 2. for in 반복문과 for of 반복문
> for in 반복문과 for of 반복문을 통해서 인덱스와 요소에 쉽게 접근 할 수 있다.
<pre><code>
// for in 반복문
for (let 인덱스 in 배열) { // 반복문의 조건문을 붙이지 않아도 0부터 시작한다.

}
// for of 반복문
for (let 요소 of 배열) { // 반복문의 조건문을 붙이지 않아도 0부터 시작한다.

}
</code></pre>

<pre><code>
let array = ['사과','감자','포도','딸기','수박'];

for (let i in array) {
    console.log(`${i}번째의 음식은 ${array[i]}입니다.`);
}

for (let a of array) {
    console.log(`${a}`);
}
</code></pre>
<b>출력결과</b>
<pre><code>
0번째의 음식은 사과입니다.
1번째의 음식은 감자입니다.
2번째의 음식은 포도입니다.
3번째의 음식은 딸기입니다.
4번째의 음식은 수박입니다.
사과
감자
포도
딸기
</code></pre>


## [3월 30일]
#### 1. if else if [조건에 따라 코드 실행]
> if문은 조건에 따라, 실행하는 코드가 달라져야 할 때, 사용하는 것이다. 
> 기본적으로 if(조건식)의 형태로 사용하며, 모든 조건을 벗어난 상황에서는 else 문을 통해 모든 조건을 커버하면 된다.
> 여러개의 조건이 필요 할 때에는, else if문을 사용하여 여러 개의 조건을 써주면 된다.
<pre><code>
if (조건식) { }
else if (조건식) { }
else { }
</code></pre>
> else는 if, else if문을 제외한 모든 조건일 때, 실행되기 때문에 따로 조건식이 붙지 않는다.  
#### 2. switch 문 [ 변수의 특정한 값에 따라 실행 ]
> switch문은 변수의 값이 정해져 있을 때, 원하는 변수의 값이 나올 때, 원하는 코드를 실행시킬 수 있다.

<pre><code>
switch (변수) {
    case 1:  {
     console.log("변수의 값은 1입니다."); <!-- 변수가 1일 때 해당 코드 실행 -->
     break; <!-- switch문은 break문이 없으면, 변수 값에 관계없이 다음 case를 실행한다. -->
    } 
    
    case 2 : {
        console.log("변수의 값은 2입니다.");
        break;
    }
}
</code></pre>
#### 3. 삼항 연산자 [ 간격한 조건문 ]
> (조건식) ? 참 : 거잣
> 해당 양식이 삼항 연산자의 양식이다. 조건식이 참일 때, 참에 해당하는 코드를 실행하고, 거짓일 경우 거짓에 해당하는 코드를 실행한다.
> 코드가 간결해서 좋지만, 가독성이 좋지않아, 간단한 조건문을 쓸 때에는 좋을 것 같다.

#### 4. 반복문 ( for문, while문 ) [ 계속적인 실행 반복문 ]
> 반복문은 해당 조건을 만족하지 않을 때까지 반복하는 것이다. 반복문은 대표적으로 2가지가 있는데, 반복의 횟수가 정해져있을 때, 쓰기에 유용한, 순차적인 수로 반복을 해야할 때, 유용한 <strong>for</strong>문이 있고, 조건을 만족하면 계속 반복하는 <strong>while</strong>문으로 나뉜다.

<pre><code>
for (변수; 조건식; 중감식;) { 증감식에 의해 변수값이 증감하고, 조건식을 만족하면 계속 반복한다.

}

while (조건식) { // 만족하지 않을 때까지 반복

}
</code></pre>

#### 5. 짧은 초기화 조건문
> || 연산자를 조건식이 아닌, 연산식에서 사용하 경우 
> A || B에서 A가 참이라면, 해당 변수에 A를 저장하고, A가 거짓이라면 B를 저장한다.

<pre><code>
let test;

test = test || "내용을 초기화합니다."; // test는 null값이기 때문에 문자열을 저장
console.log(test); // "내용을 초기화합니다." 출력

test = test || "두번째로 내용을 초기화합니다."; // test는 이미 "내용을 초기화합니다." 라는 문자열이 들어있기 때문에, A는 참 그리하여 변수의 내용이 바뀌지 않는다.
console.log(test); // "내용을 초기화합니다." 출력
</code></pre>

#### 6. 기본적인 입력
>해당 코드를 이용하여 사용자에게 값을 입력받을 수 있다.
<pre><code>
const repl = require('repl');

repl.start( {
    prompt : "<값을 입력해주세요.>";,
    eval : (command, context, filename, callback) => {
        let number = Number(command);

        if (isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자입니다.");
        }

        callback();
    }
});
</code></pre>
## [03월 23일]
#### 1. 문자열 배열
> "안녕하세요" 에서 "녕하" 부문만 빼어내고 싶을 때, "안녕하세요"[1]+"안녕하세요"[2] 와 같이 마치 배열처럼 사용 할 수 있다.  <br>
예시) console.log("안녕하세요"[1]+"안녕하세요"[2]) > 실행결과 : 녕하 <br>
#### 2. 문자열 안에 계산값 넣기 (Backtick)
> 만약 5+2 = 7 이라는 구문을 출력하고 싶을 때, Backtick(\`)을 이용해서 넣을 수 있다.
\${5+2}는 안에 있는 수식을 계산해준다. ```console.log(`5+2=${5+2}`);``` 이런식으로 코드를 짤 수  있다. 해당 실행결과는 ```" 5+2=7 "``` 결과를 보여준다. 
예시) <br> 1. ```console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);``` <strong>실행결과 : "올해는 2021년 입니다." </strong>
    2. ```let var1 = 5;``` <br>　```console.log(`var1의 값은 ${var1} 입니다.`); ``` <strong>   실행결과 : "var1의 값은 5입니다." </strong>
#### 3. 논리/비교 연산자
> 자바와 비슷하게 OR연산자(||), AND연산자(&&)가 있다. True or False 를 출력한다.<br>
> 예시)<br>
>   ```let var1 = 3;```<br>
>   ```let var2 = 5;```<br>
>   ```console.log(var == 3 || var == 5);```<br>
    <strong> 실행결과 -> True </strong>

#### 4. 변수 (let)
> 자바에는 변수 var, let, const가 있다. 본 수업에서는 let에 대해서 배웠다.<br>
 ```let a=0;``` 과 같이 let형 변수 <b>a</b>를 선언할 수 있다. 하지만 그 뒤에
  ```let a=15;``` 와 같은 중복선언은 불가능하다. a의 값은 15로 바꾸고 싶다면 ```a = 15;```과 같이 재할당 해주어야 한다.<br>
  예시)<br>
  ```let var1 = 15;```<br>
  ```console.log(var1);```<br>
  ```let var1 = 20;``` // *Uncaught SyntaxError: Identifier 'var1' has already been declared*<br>
  ```var1 *= 2;``` // *var1 기존에 할당되었던, 15 \* 2를 해준다는 의미이다.*<br>
  ```console.log(var1);``` // **<br>
  **실행결과 : 15, 30**

#### 5. 복합 대입 연산자 (+=,-=,*=,)
> +=, -=, *=, /= 와 같이 복합 대입 연산자를 사용 할 수 있다.<br>
만약 ```a += 5; > a = a+5```와 같이 되는 것이다.<br> 이와 같은 경우로 -= 는 **-** ,*= 는 **\***, /= 는 **/** <br> 이들 말고도 %=(나머지), &=(And). |= (OR) 와 같은 복합대입연산자도 있다.<br>
    ```let var1 = 5;```<br>
    ```var1 += 5;```<br>
    ```console.log(var1);```<br>
    **실행결과 : 10**

#### 6. 증감연산자
> 증감연산자는 ++, -- 기호를 통해 연산을 하며, 만약 변수 a에 5가 할당 되어있고, a++라고 하면 a의 값은 1의 증가 하게 된다. 이런 증감연산자의 경우 반복문으로 이용을 많이 한다. 하지만 ++, --와 같은 증감연산자를 변수 앞에다 붙이냐, 뒤에다 붙이냐에 따라 값이 달라질 수도 있다. 증감연산자를 변수 앞에 달게 되면 (++a, --a) 이 코드를 실행과 동시에 증감을 실행한다. 하지만 뒤에다 붙이게 되면 (a++, a--) 이 구문을 실행한 다음 코드부터 증감을 실행하게 된다. 예시를 통해 이 결과를 확인해보자.
<b>case 1: </b><br>
 ```let var1 = 5;```<br>
 ```console.log(var1++);``` <i> // 증감연산자를 뒤에 붙였다.  </i><br>
 <b>실행결과 : 5 </b><br><br>
 <b>case 2:</b><br>
 ```let var1 = 5;```<br>
 ```console.log(++var1)``` <i> // 증감연산즈를 앞에 붙였다 </i><br>
  <b>실행결과 : 6 </b><br><br>

#### 7. 자료형 검사
>typeof(대상) 를 통해 자료형을 검사할 수 있다. 바로 예제를 통해 알아보자.
**예시)**
>```console.log(typeof('안녕'));``` //string 출력<br>
>```console.log(typeof(5));``` // number 출력<br>
>```console.log(typeof(false));``` // boolean 출력<br>
>```console.log(typeof(false));``` // undefined 출력 (여기서 num은 선언되지 않은 변수이다.)<br>
>```console.log(typeof(new Date()));``` // object(객체) 출력<br>
이렇게 각각의 type 별로 그 type형을 출력해주는 것을 확인 할 수 있다.

#### 8. 강제 자료형 변환
>**기본적인 형변환**
> **Object()**, **Number()**, **String()**, **Boolean()**
>
>* 기타 형변환
> **String to Number** // "365" -> 365<br>
> ```let var = parseInt("333");``` *// var에는 Number형 정수 333이 들어간다.*<br>
> ```let var2 = parseFloat("3.14159");```*// var에는 Number형 실수 3.14159가 들어간다.*<br>
> ```let var3 = Nember("1.542");``` *// var에는 Number형 숫자 1.542 (아무 수나 넣어도 알아서 초기화)*<br>
**Number to String** // 365 -> "365"
>```let var4 = String(123);``` *// var에는 "123"이 들어가서, String형 변수가 된다.*
>
>**1. Number()**<br>
>Boolean 타입을 강제 형변환한다면, true 는 1, false 는 0으로 출력하게 된다.<br>
>```console.log(Number(true));``` *// 1 출력* ```console.log(Number(false));``` *// 0 
출력*<br>
>하지만 문자열이 들어있는 갑을 Number()를 통해 강제로 형변환을 한다면 Nan이 출력이 된다.<br>
**예시)**<br>
>```console.log(Number("하이루"));``` *// Nan 출력*<br>
>NaN(Not a Number)은 자료형은 '숫자형'이지만 값의 형태를 숫자가 아닌 것을 의미한다.<br>
>
> **2. Boolean()** <br>
>Boonlean 형으로 강제변환을 할 때에는 **0, Nan, ""(빈문자열), null, undefined**의 5개의 요소는 false를 반환한다.<br>

#### 9. 자동 형 변환
> 연산 시 자동으로 형이 변환이 된다.<br>
> 숫자와 문자열 사이에 '+' 기호를 붙이게 되면 자동으로 문자열 형태로 반환이 된다.<br>
> ```console.log(123 + "456");``` *// 문자열 123456으로 출력*
>
> **boolean형 자동변환**
> !!으로 Boolean() 과 같은 효과를 낼 수 있다.<br>
> ```console.log(!!0);``` *// false로 출력*<br>
> ```console.log(!!NaN);``` *// false로 출력*

#### 10. 일치 연산자 
> 자료형 검사 <br>
> **===** : **자료형이 같은지 비교**<br>
> **!==** : **자료형이 다른지 비교**<br>
> ```console.log(`52 == "52" : ${52 == "52"}`)``` *// true 출력*<br>
> ```console.log(`52 === "52" : ${52 === "52"}`)``` *// false 출력 (52는 Number, "52"는 String)*

#### 11. 상수
> **상수**는 항상 같은 수. 즉 **바뀌지 않는 변수**라는 의미이다. 상수의 키워드는 **const**인데<br>
> const 형으로 변수를 선언하고, 값을 할당하면 추후에 값을 바꿀 수 없다. 보통 변하지 않는 수에 적용을 한다.
>
>```const con = "안녕";``` <br>
>```con = "안녕하세요";``` *// 상수를 바꾸었다고 오류가 발생* <br>
>```console.log(con)``` 

#### 12. if문
> if문은 해당조건의 참/거짓의 따라 이하 내용을 실행할 지 말지를 결정하는 구문이다. <br>
>```let var1 = 0;```  <br>
>
>```if (var1 == 0) {``` <br>
   >``` console.log("var1은 0입니다.");``` <br>
>```} else {``` <br>
>   ``` console.log("var1은 0이 아닌 다른 값입니다.");```<br>
> 이런 식으로 var1이 0일 때에는 "var1은 0입니다." 라는 문자열을 출력하고 <br>
> 그 외의 모든 경우에는 "var1은 0이 아닌 다른 값입니다." 라고 출력한다. <br>
> 이 외에도 if문을 중첩하여 여러 조건에 맞는 실행코드를 작성할 수 있다. 
## [03월 16일]
> Javascript는 구글의 맵을 통해 그 활용도와 실용성이 알려졌다. 그 전까지는 오해를 많이 받은 언어였다.
> Javascript는 클라이언트와 서버 개발을 같이 할 수 있는 프로그래밍 언어이다.
> Node.js를 설치해 자바스크립트의 콘솔출력을 하는 방법을 배웠다.<br>
> JavaScript도 다른 프로그래밍 언어와 유사한 점이 많았고, 문자열 출력 또한 자바와 상당히 유사한 편이었다 <br>
> CMD > node 를 통해 node창으로 넘어 갈 수 있었고, 해당 터미널에서 자바 스크립트 코드를 작성할 수 있음과 동시에 결과도 볼 수 있었다. <br>
> .js 파일을 불러올 때에는 CMD에서 :node [파일명.js] 라고 명령어를 치면 해당 .js 파일을 불러와 안의 내용을 실행시켜주었다. <br>
> \" 를 통해 js에서 문자열을 명시하는 " "안에 ""를 쓸 수 있는 방법을 배웠다. ex) console.log("\"진승범\"") --> "진승범" 으로 출력. <br>
> 또한 alert("문자열"); 을 통해 웹페이지에서 문자열을 출력 할 수 있는 방법을 배웠다.asdasd