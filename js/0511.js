// 1. 날짜 객체 생성

/* let dateA = new Date();
console.log(dateA);

let dateB = new Date(1600000000000);
console.log(dateB);

let dateC = new Date('1999-12-04');
console.log(dateC);

let dateD = new Date(2021,12-1,4,0,0,0,0);
console.log(dateD); */

// 2. 날짜 간의 차이 구하기

/* let now = new Date();
let before = new Date('December 9, 1991');

let interval = now.getTime() - before.getTime();
console.log(interval);

interval = Math.floor(interval / (1000*60*60*24));
console.log(interval); */

let foo = [
    {
        name : '고구마',
        price : 1000
    },
    {
        name : '감자',
        price : 500
    },
    {
        name : '바나나',
        price : 1500
    }
]

let fruit = ['포도','사과','수박','파인애플'];

console.log(foo[1]);
let foo2 = foo.concat({name : '배추',price : 3500});
console.log(foo2); // concat
console.log(fruit.join('/')); // join
let banana = foo.pop(); // pop
console.log(banana.name);
foo.push(banana); // push
console.log(foo);
console.log(foo.reverse()); // reverse
console.log(foo.slice(0,2)); // slice
console.log(foo.sort((a,b) => {
    return b.price - a.price; // 오름차순
}))
console.log(foo.sort((a,b)=>{
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
}))
