// 
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}

console.log("sum.call(kim) 의 값은",sum.call(kim, '=>'));
console.log("sum.call(lee) 의 값은",sum.call(lee, ':-'));

// call이라는 함수를 사용할때는 
// 첫번째인자는 그 함수의 내부의 this값 
// 두번째인자부터는 파라미터 값을 넣는다
