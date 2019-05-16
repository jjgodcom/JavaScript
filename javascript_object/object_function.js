var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}

console.log("sum.call(kim) 의 값은",sum.call(kim, '=>'));
console.log("sum.call(lee) 의 값은",sum.call(lee, ':-'));

var kimSum = sum.bind(kim, '->');
console.log("kimSum() 의 값은",kimSum());




