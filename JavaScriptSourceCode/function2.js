
let fuc1 = function() {
    console.log("지금 시간은 "+(new Date().getHours()-12)+"시"
    +new Date().getMinutes()+"분 "+new Date().getSeconds()+"초 입니다.");
}

setInterval(fuc1,1000);
