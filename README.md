# 진승범 [201840230]
## <b>[05월 11일]</b>
### 1. Date 객체
> 날짜와 관련된 객체이다. <br>
> <b> Date 객체 </b>
> - new Date() : 현재 시간을 기준으로 Date 객체를 생성합니다.
> - new Date(유닉스 타임) | 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)으로 Date 객체를 생성합니다.
> - new Date(<시 간 문자열>) | 문자열로 Date 객체를 생성합니다.
> - new Date(<년>, <월-1>, <일>, <시간>, <분>, <초>, <밀리초>) | 시간 요소(년,월-1,일,시간,분,초,밀리초)를 기반으로 Date 객체를 생성합니다.
<pre><code>
let dateA = new Date(); // 현재시간 기준
console.log(dateA);

let dateB = new Date(1600000000000); // 유닉스타임 기준
console.log(dateB);

let dateC = new Date('1999-12-04'); // 문자열 기준
console.log(dateC);

let dateD = new Date(2021,12-1,4,0,0,0,0); // 시간요소 기준
console.log(dateD);
</code></pre>
> Date 객체를 비롯한 많은 객체들은 get 메소드와 set 메소드를 가지고 있다. get 메소드는 값을 얻는 내용의 메소드이고, set 메소드는 값을 초기화하는 메소드이다.
<br>

> <b> get 메소드</b> <br>
>> - getFullYear() : <년> 값을 얻습니다.
>> - getMonth() : <월> 값을 얻습니다.
>> - getDate() : <일> 값을 얻습니다.
>> - getHours() : <시간> 값을 얻습니다.
>> - getMinutes() : <분> 값을 얻습니다.
>> - getSeconds() : <초> 값을 얻습니다.
>> - getMilliseconds() : <`ms`>값을 얻습니다.
>> - getTime() : 유닉스 타임 기준의 <`ms`> 값을 얻습니다.

> <b> set 메소드</b>
>> - setFullYear() : <년> 값을 설정합니다.
>> - setMonth() : <월> 값을 설정합니다.
>> - setDate() : <일> 값을 설정합니다.
>> - setHours() : <시간> 값을 설정합니다.
>> - setMinutes() : <분> 값을 설정합니다.
>> - setSeconds() : <초> 값을 설정합니다.
>> - setMilliseconds() : <`ms`>값을 설정합니다.
>> - setTime() : 유닉스 타임 기준의 <`ms`> 값을 설정합니다.

### 1-2. Date 객체 (두 날짜 사이의 차이 구하기)
> Date 객체로 날짜 간의 차이를 구할 수 있다.
> 유닉스 타임을 기준으로 날짜 간의 ms 차이를 이용해 두 날짜 사이의 차이를 구할 수 있다.
<pre><code>let new = new Date();
let before = new Date('December 9, 1991');

let interval = now.getTime() = before.getTime();
console.log(interval);

interval = Math.floor(interval / (1000*60*60*24));
console.log(interval);
// 해당 ms를 1000으로 나눠 초로 바꾸고 그 <초>를 60으로 나눠 분으로 변경하고, 그 <분>을 60 나눠 시간으로 변경하고, 그 <시간>을 24로 나누어 <일>로 변경해주었다.

출력결과 :
928493023985 => 91년 12월 9일 부터 현재 사이의 ms 차이
10746 : 91년 12월 9일부터 현재 까지의 일 수 차이
</code></pre>

### 2. Array 객체
> Array 객체는 배열가 관련된 객체이다 <br>
> Array 객체의 메소드
> - concat() : 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열로 만들어 리턴
> - join() : 배열 안의 모든 요소를 문자열로 만들어 리턴
> - pop() : 배열의 마지막 요소를 제거하고 리턴 
> - push() : 배열의 마지막 부분에 새로운 요소 추가
> - reverse() : 배열의 요소 순서를 뒤집음
> - slice() : 배열 요소의 지정한 부분 리턴
> - sort() : 배열의 요소를 정렬
> - splice() : 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴

> - forEach() : 배열의 요소를 하나씩 뽑아 반복을 돌립니다.
> - map() : 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듭니다.
> - filter() : 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴합니다.

### 3. 프로토 타입에 메소드 추가하기
> 프로토 타입에 메소드를 추가하면 해당 자료형을 가지고 있는 변수 전체에 메소드를 추가 할 수 있다.
<pre><code>String.prototype.contains = function(input) {
    return this.indexOf(input) >= 1;
}
 // true 출력
console.log('안녕하세요'.contains('안녕'));
// false 출력
console.log('안녕하세요',contains('데굴데굴')); 
</code></pre>
### 4. underscore 라이브러리 사용
> underscore 라이브러리를 사용하면 쉽게 정렬을 더욱 더 쉽게 할 수 있다. 

\<script src = "http://underscrorejs.org/underscore.js">\</script>

> 해당 구문을 통해 underscore 라이브러리의 메소드들을 사용할 수 있게 된다.


```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>    
    <script src="https://underscorejs.org/underscore-umd.js"></script>
</head>
<body>
    <script>
        const foo = [
        {
            name : '고구마',
            price : 1000
        },
        {
            name : '감자',
            price : 1500
        },
        {
            name : '바나나',
            price : 500
        },
        {
            name : '사과',
            price : 2500
        }];
        const outputA = _.sortBy(foo, (item) => item.name); // 이름순으로 오름차순
        console.log(outputA);
        const outputB = _.sortBy(foo, (item) => item.price); // 가격순으로 오름차순
        console.log(outputB);
    </script>   
</body>
</html>
```

>해당 웹 페이지를 열고 검사를 통해 console 창을 확인해보면, foo 객체 배열이 각각 정렬된 것을 확인 할 수 있다.

### 5. JSON
> JSON은 자바스크립트 객체를 사용한 데이터 표현 방법이다. 기본 형태를 아래와 같다.
```
[ 
    {
        "name":"고구마",
        "price":"1500"
    
    },
    {
        "name":"감자",
        "price":"1000"
    
    },
    {
        "name":"바나나",
        "price":"3500"
    
    }
]
```
> 제약사향으로는
> + 문자열은 큰 따옴표로 만듬 ex) "감자"
> + 모든 키는 큰따옴표로 써야함 ex) "name"
> + 숫자, 문자열, Bool 자료형만 사용가능

> <b>JSON 객체의 메소드</b>
> + JSON.stringify(<객체>,<변환 함수>,<공백 개수>)
> + :자바스크립트 객체를 문자열로 만듭니다.
> + JSON.parse(<문자열>)
> + :문자열을 자바스크립트 객체로 파싱합니다.

### 6. 예외처리
> <b>예외란?</b><br>
> : 실행에 문제가 발생하면 자동 중단됨. 이렇게 발생한 오류<br>
> <b>예외처리란?</b> <br>
> : 오류에 대처할 수 이게 하는것

> 기본 예외 처리 방법 <br>
> 예외가 발생가능한 지점에 if문을 이용해서 오류가 발생 가능한 상황에 대해서는 실행을 하지 않도록 코딩한다.
```
function callTenTimes(callback) {
    if (callback) {
        for (let i = 0; i<10; i++) {
            callback();
        } 
    } else {
        console.log("callback이 지정되지 않았습니다.);
    }
}

callTenTimes(function() {
    console.log("안녕하세요");
});

callTenTime();

출력결과 :
안녕하세요
안녕하세요
안녕하세요
... (10번 반복)
callback이 지정되지 않았습니다.
```

> <b> 고급예외처리 방법 </b> <br>
> try catch finally 구문을 사룡하여 예외처리를 한다.
> <br> <b>try</b> : 예외가 발생 가능한 코드를 적는다.
> <br> <b>catch</b> : 예외 발생 시 실행할 코드를 적는다. (예외가 발생한 시점에서 바로 실행된다.)
> <br> <b>finally</b> : 예외 발생과 상관없이 무조건 실행되는 코드이다.

```
// Range Error : 배열 생성 시 음수로 크기를 지정하면 생기는 예외
try {
    const array = new Array[-1000]
} catch {
    console.log("예외발생");
} finally {
    console.log("finally 구문 실행");
}

출력결과 :
예외발생
finally 구문 실행
```
>  <b>예외 객체</b> <br>
> 예외가 발생하면 어떤 예외가 발생했는지 전달한다. 
```
try {
    // 강제 예외 발생
    error.error.error;
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

출력결과 :
Reference Error
error is not defined
```

> <b>예외 강제 발생</b> <br>
> throw 키워드를 사용해서 예외를 강제적으로 발생 시킬 수 있다.  throw 키워드 뒤에느 문자열이나 Error 객체를 입력한다.

> throw '강제 예외'

> 또한 자세한 예외 출력은 Error 객체를 통해 가능하다.

```
const error = new Error('메시지');
error.name = '내 마음대로 오류';
error.message = '오류의 메시지';

throw error;

출력결과 :
내 마음대로 오류 : 오류의 메시지
... 오류내용 ...
```


## <b>[05월 04일]</b>
### 1. 생성자 함수
> 생성자 함수는 객체를 만드는 함수로써, 함수의 이름의 첫번째 문자가 대문자로 쓰여진다.
<pre><code>
function Product (name, price) { // 첫글자 대문자
    this.name = name;
    this.price = price;
}
let product1 = new Product('사과','1500');
let product2 = new Product('바나나','2000');
console.log(product1);
console.log(product2.name);
console.log(product2.price);

출력결과 :
Product { name: '사과', price: '1500' }
바나나
2000
</code></pre>
> 위 코드처럼 Product 생성자 함수를 이용해서 객체를 생성할 수 있다.
즉, name과 price 항목이 있는 객체가 2개 만들어진 것이다. 그리고 값까지 출력하는 것을 확인 할 수 있다.

### 2. 프로토 타입
> 생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지정해서 모든 객체가 공유 하도록 한다. 해당 함수를 생성자 함수로 사용했을 때만 의미가 있다.
<pre><code>
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// case 1 :
// 변수에 객체 이름을 지정해 원하는 객체를 정할 수 있다.
Product.prototype.print_product = function() { 
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}

// case 2:
// 모든 객체가 공유하는 메소드를 만들 수 있다.
Product.prototype .print_all = function() {
    console.log(`${this.price}원의 가격을 가지고 있는 과일은 ${this.name} 입니다.`);
}

let product = new Product("복숭아",3000);
let product2 = new Product("자두",1000);


product.print_product();
product.print_all();
product2.print_all();
</code></pre>
> 위 코드처럼 프로토타입을 이용해 객체가 공유하는 메소드를 생성할 수 있다.

### 3. null
> 'null'은 값이 없는 상태를 의미한다.
<pre><code>let zeroNumber = 0;
let falseBoolean = '';
let emptyString = '';
let undefinedValue;
let nullValue = null;

if (zeroNumber == null) {
    console.log('0은 존재하지 않는 값입니다.');
} if (falseBoolean == null) {
    console.log('false는 존재하지 않는 값입니다.');
} if (emptyString == null) {
    console.log('빈 문자열은 존재하지 않는 값입니다.');
} if (undefinedValue == null) {
    console.log("undefined는 존재하지 않는 값입니다.');
} if (nullValue == null) {
    console.log('null은 존재하지 않는 값입니다.');
}

출력 결과 :
undefined는 존재하지 않는 값입니다.
null은 존재하지 않는 값입니다.
</code></pre>
> zeroNumber, falseBoolean, emptyString는 0,'',''의 경우 javascript에선 false 값이 있는 것으로 판단하기 때문에 null 값은 해당하지 않는다. 그렇기 때문에 undeifendValue와 null값이 직접적으로 들어가 있는 nullValue에 대해서만 null이라고 판단한다.


### 4. 기본 자료형과 객체 자료형
> 자바스크립트의 기본자료형에는 String, Number, Boolean 등이 있다.
그리고 이런 값들에 대해서 객체를 만들 수 있는 객체 자료형들도 존재한다. 
<pre><code>let number = 15; // type은 Number이다.
let str = "안녕"; // type은 String이다.
let torf = ture; // type은 Boolean이다.

let number2 = new Number(15); // type은 Object이다.
let str2 = new String("안녕"); // type은 Object이다.
let torf2 = new Boolean(true); // type은 Object이다.
</code></pre>
> 기본자료형은 속성과 메소드를 사용할 때, 자동으로 객체 자료형으로 변환되어 속성과 메소드를 사용한다. 아래의 코드를 참고하면 된다.
<pre><code>let str1 = '과자|1500';
console.log(str1.split('|'));

// split은 String 객체의 메소드이지만, 기본자료형이 자동으로 객체자료형으로 변환되어 사용된다.
</code></pre>

> 기본 자료형과 객체 자료형의 차이점으로는 바로 메소드를 추가 할 수 없고이다. 기본 자료형은 prototype을 이용해 메소드를 추가할 수 없는 반면, 객체 자료형으로 선언된 변수는 prototype을 이용해 메소드를 추가 할 수 있다. 이것이 가능한 것은 바로 '객체'이기 때문이다.

<pre><code>let primitiveNumber = 15;

primitiveNumber.method = function () {
    return 'Primitive Method';
}

console.log(primitiveNumber.method);

출력 결과 
[ 오류 출력 ]
</code></pre>
<pre><code>
let primitiveNumber = 200;

Number.prototype.method = function() {
    return 'Primitive Method';
}

console.log(primitiveNumber.method);

// 프로토타입 함수를 이용해 기본 타입에 메소드를 추가시킨 모습이다.
</code></pre>

> 위와 같이 프로토타입을 이용하면 기본 자료형에도 메소드를 추가시킬 수 있다.

### 5. Number 객체
> new Number(typeof_Number); 와 같은 형식으로 객체 생성 <br>

> <b>Number 객체의 메소드</b> <br>
> - toExponential() : 숫자를 지수 표시로 표현한 문자열 리턴
>- toFixed() : 숫자를 고정소수점으로 표현한 문자열 리턴
> - toPrecision() : 숫자 길이에 따라 지수 표시 또는 고정소수점 표시된 문자열 리턴

><b>Number 생성자 함수의 속성 </b>
> - MAX_VALUE : JS가 나타낼 수 있는 최대 숫자
> - MIN_VALUE : JS가 나타낼 수 있는 최소 숫자 
> - NaN : JS로 나타낼 수 없는 숫자
> - POSITIVE_INFINITY : 양의 무한대 숫자
> - NEGATIVE_INFINITY : 음의 무한대 숫자

### 5. String 객체
> new String(typeof_String); 와 같은 형식으로 객체 생성 <br>

> <b>String 객체의 메소드</b> <br>
> - charAt(position) : position 순서의 문자를 리턴 
>- charCodeAt(position) : position 순서의 문자의 유니코드를 리턴
> - indexOf(searchString, position) : 앞에서부터 일치한 문자열의 위치를 리턴
> - lastIndexOf(searchString, position) : 뒤에서부터 일치한 문자열의 위치를 리턴
> - match(a) : 문자열 안에 a가 있는지 확인
> - replace(a, b) : 문자열 안의 a를 b로 바꾼 뒤에 리턴
> - search(a) : a와 일치하는 문자열의 위치를 리턴 
> - slice(start, end) : 특정 위치의 문자열을 추출해 리턴 
> - split(separator, limit) : separator로 문자열을 잘라, 리턴
> - substr(start, count) : start 부터 count까지 문자열을 잘라 리턴
> - substring(startm end) : start부터 end 까지 문자열을 잘라 리턴
> - toLowerCase() : 문자열을 소문자로 바꾸어 리턴
> - toUpperCase() : 문자열을 대문자로 바꾸어 리턴


><b>String 생성자 함수의 속성 </b>
> - length : 문자열의 길이를 나타낸다.





## [04월 27일]
### 1. 타이머 함수
> setInterval() : 일정시간마다 함수를 반복 실행<br>
> setTimeout() : 일정시간 후에 해당 함수를 실행<br>
>clearInterval() : 특정시간마다 반복하는 함수를 종료<br>
<pre><code>
let foo = setInterval( () => {
    console.log("출력합니다.");
}, 1000);

setTimeout(function() {
    clearInterval(foo);
},5000);
</code></pre>
> 해당 코드는 "출력합니다" 라는 문자열을 1초 마다 반복실행 하고, setTimeout 함수 안에 clearInterval 함수를 넣어서 foo 함수를 5초 후에 실행중지 시키는 코드이다.<br> 출력결과를 확인하면
<pre><code>출력합니다.
출력합니다.
출력합니다.
출력합니다.
</code></pre>
> 이런식으로 4번만 반복 되는 것을 확인할 수 있다. 이 경우에는 setTimeout() 함수가 5000ms가 되자마자, clearInterval() 함수를 실행시켜, "출력합니다." 라는 구문을 출력하는 setInterval() 함수가 실행되기 전에 clearInterval() 함수가 작동하는 것을 확인할 수 있다. 문자열을 5번 출력하고 싶으면 setTimeout() 함수의 시간에 여유값을 주면 원하는 만큼 출력시킬 수 있다. <br> ex) 5050, 5100 (5001 같이 차이가 너무 작은 값은 효과가 없다.)
### 2. 선언적 함수와 익명함수 호출 순서
> 선언적 함수와 익명함수의 이름을 동일하게 지정하고, 함수를 호출하면 익명함수의 내용이 실행된다. 그 이유는 무엇일까?
<pre><code>
foo = () => {
    console.log("첫번째 함수");
}

function foo () {
    console.log("두번째 함수");
}

foo();
</code></pre>
> 위 코드의 출력결과는 "첫번째 함수" 이다 <br>
> 분명 선언적 함수를 익명 함수보다 아래에 선언했는데도 불구하고, 먼저 선언한 익명함수가 실행이 되었다.<br> 이는 우리가 사전에 알고 있는 변수의 초기화 개념이랑 다르다.
> <br> 자바스크립트는 코드를 컴파일 할 때, 먼저 선언적 함수를 읽는다. 즉 순차적으로 코드를 분석하는 것이 아닌, 선언적 함수를 미리, 먼저 읽는다는 것이다. 그래서 익명함수가 선언되기 전에 먼저 선언적 함수 foo가 읽힌 것이다. 그 뒤에 익명함수 foo가 선언되었기에 선언적 함수의 내용을 덮어쓰는 것이다.
### 3. 익명함수와 화살표 함수의 차이 (this 키워드)
> 익명함수에서는 this 키워드는 자신을 호출한 객체를 가리키고,
> 화살표 함수에서의 this 키워드는 상위 스코프를 가리킨다. 또한 익명함수의 this는 동적바인딩 즉, 익명함수를 호출한 위치에 따라 this가 달라지고, 화살표 함수의 this는 정적바인딩 함수가 선언된 기준으로 this가 가리키는 객체가 정해진다.
### 4. 객체
> 배열은 index 로 값을 구분하지만 객체는 key 값으로 값을 구분한다.
<pre>
<code>let product = {
    제품명: '신라면',
    제조사: '농심'.
    가격: 900,
    칼로리 : '500kcal'
}
</code></pre>
> 이런식으로 객체를 구성할 수 있다. 앞에 [제품명, 제조사, 가격, 칼로리]가 key 값이 되는 것이다. 이를 출력하려면<br> console.log(product[key]) 의 형태로 출력할 수 있다.
<pre>
<code>console.log(product[제품명]);
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
> print 함수에서 ket값의 앞에 this 키워드를 쓰지 않으면, object 스코프 밖의 name 변수와 price 변수를 찾기 때문에 정의되지 않았다고 오류가 뜬다. 또한 메소드를 화살표 함수로 선언했을 때 this 키워드를 쓴다면 this는 최상위 객체 window를 가르키기 때문에 객체 안에 있는 키 값들을 인식하지 못한다. 그렇기 때문에 메소드를 선언할 때, 화살표 함수를 쓰는 것은 피해야 한다.

### 5. 객체 배열 
> 객체에서 배열을 사용 할 수 있다.
<pre><code>
let object = [
    {name: '사과', price: 1300},
    {name: '바나나', price: 1500},
    {name: '배', price: 1200}
]

let objfunc = function(fruit) {
    console.log(`${fruit.name}의 가격은 ${fruit.price}입니다.`);
}

for (let obj of object) {
    objfunc(obj);
}

출력결과:
사과의 가격은 1300입니다.
바나나의 가격은 1500입니다.
배의 가격은 1200입니다.
</code></pre>
> 위의 코드는 object 라는 변수 안에 3개의 객체가 존재하고 있는 것을 확인할 수 있다. object[0]은 가격이 1300원인 사과이고, object[1]은 1500원의 바나나이고, object[2]는 1200원인 배인 것이다. for of 반복문으로 배열을 차례대로 출력해준 모습이다.
### 6. 생성자 함수
> 생성자 함수는 객체를 생성하는 함수이다. 대문자로 시작하는 이름을 사용한다. 

<pre><code>function Product(name, price) {
    this.name = name;
    this.price = price;
}

let product = new Product('사과',1500);

console.log(product)
</code></pre>
> Product 라는 생성자 함수를 만들고, name과 price를 매개변수로 받는다. 그리고 객체의 인스턴스 변수들을 매개 값들로 초기화한다.
그 후에 product 라는 변수에 Product 객체를 집어넣고 출력한다.

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