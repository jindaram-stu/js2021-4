let array = ['사과','감자','포도','딸기','수박'];

for (let i in array) {
    console.log(`${i}번째의 음식은 ${array[i]}입니다.`);
}

for (let a of array) {
    console.log(`${a}`);
}