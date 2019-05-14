var superObj = {superVal:'super'}
var subObj = Object.create(superObj);
subObj.subVal = 'sub'
console.log('subObj.subVal 의 값은',subObj.subVal);
console.log('subObj.superVal 의 값은',subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal 의 값은', superObj.superVal);

var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 20;
lee.avg = function(){
    return(this.first+this.second)/2;
}

// var lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

console.log('kim.sum() 의 값은'+ kim.sum());
console.log('lee.sum() 의 값은'+ lee.avg());