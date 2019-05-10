function person(name, first, second, third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third
}

// person 이라는 생성자 함수 안에 sum이 없기때문에 한번만 정의되고 메모리 절약이 된다
person.prototype.sum=function(){
    return ':::::' +(this.first+this.second+this.third);
}

var kim = new person('kim',10,20,30);
kim.sum= function(){
    return 'this :' +(this.first+this.second+this.third);
}
var lee = new person('lee',10,10,10);
console.log("kim.sum() 의 값은",kim.sum()); // 60
console.log("lee.sum() 의 값은",lee.sum()); // 30


