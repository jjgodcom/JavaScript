var superObj = {superVal:'super'}
var subObj = Object.create(superObj);
subObj.subVal = 'sub'
console.log('subObj.subVal 의 값은',subObj.subVal);
console.log('subObj.superVal 의 값은',subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal 의 값은', superObj.superVal);


// __proto__ 를 대체 create() 에 대해서 설명함