function person(name, first, second, third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}

var kim = new person('kim',10,20,30);
var lee = new person('lee',10,10,10);

console.log("kim.sum() 의 값은",kim.sum()); // 60
console.log("lee.sum() 의 값은",lee.sum()); // 30

console.log("person() 의 값은",person()); //함수를 그냥 호출

//생성자 함수라고 부른다
console.log("new person() 의 값은",new person()); // new를 붙이면 person이라는 객체가 만들어 진다.
