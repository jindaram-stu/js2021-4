let date = new Date();

console.log(date.getMonth()+1);

switch(date.getMonth()+2) {
    case 12:
    case 1: 
    case 2:
    case 3: {
        console.log("겨울입니다.");
        break;

    }

    case 4:
    case 5:
    case 6: {
        console.log("봄 입니다.");
        break;
    }
        
    case 7:
    case 8:
    case 9: {
        console.log("여름 입니다.");
        break;
    }
    
    case 10 :
    case 11 : {
        console.log("가을 입니다.")
        break;
    }
    
}