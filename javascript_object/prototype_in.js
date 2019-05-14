var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;
console.log('subObj.subVal 의 값은',subObj.subVal);
console.log('subObj.superVal 의 값은',subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal 의 값은', superObj.superVal);


// __proto__ 를 사용하면 객체를 다른객체의 자식으로 만들어버릴수 있다.