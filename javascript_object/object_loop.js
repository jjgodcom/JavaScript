//배열 선언
memberArray = ['jjgodcom', 'flvns', 'psh'];
console.group('allay loop'); //console.group() 을 쓰면 소단위로 묶임
var i = 0;
while(i < memberArray.length){
    console.log(i,memberArray[i]);
    i += 1;
}
console.groupEnd('allay loop'); //console.groupEnd() 을 쓰면 소단위 끝을 맺음

//객체 선언
var memberObject = {
    manager:'jjgodcom',
    developer:'flvns',
    designer:'psh'
}
console.group('object loop'); //console.group() 을 쓰면 소단위로 묶임
for(var name in memberObject){
    console.log(name); // 앞에
    console.log(memberObject[name]); //뒤에
}
console.groupEnd('object loop'); //console.group() 을 쓰면 소단위로 묶임

