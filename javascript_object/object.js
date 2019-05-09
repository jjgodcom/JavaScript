//배열 선언
memberArray = ['jjgodcom', 'flvns', 'psh'];
console.log("memberArray[1] 의 값은",memberArray[1]); // flvns

//객체 선언
var memberObject = {
    manager:'jjgodcom',
    developer:'flvns',
    designer:'psh'
}
console.log("memberObject.designer 의 값은",memberObject.designer); // psh
console.log("memberObject['manager'] 의 값은",memberObject['manager']); // jjgodcom

//객체 의값 업데이트하기
memberObject.designer = 'psh2';
console.log("memberObject.designer 의 값은",memberObject.designer); // psh2

//객체값 삭제하기
delete memberObject.manager;
console.log("memberObject.manager 의 값은",memberObject.manager); //undefined
