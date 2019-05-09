//math라는 객체에  PI,random,floor를 정리가 되어 잇음
console.log("Math.PI 의 값은", Math.PI); //3.14~~~ 
console.log("Math.random() 의 값은",Math.random()); //랜덤
console.log("Math.floor(3.9) 의 값은",Math.floor(3.9)) //소수점을 정수로

//객체에 소속되어있으면 매소드(함수)라고 함
var myMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("myMath.PI 의 값은", myMath.PI);
console.log("myMath.random()의 값은", myMath.random());
console.log("myMath.floor(3.9)의 값은", myMath.floor(3.9));