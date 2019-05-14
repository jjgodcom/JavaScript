class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
 
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

// super 라는 키워드에 대해서
// super는 부모클래스를 불러서 부모클래스한테 일을 시키고 부모가하지 못하는일을 내가 처리하는것
// super 뒤에 ()가 붙을 경우에는 부모클래스의 생성자이다.
// syper 뒤에 .가 있을 경우에는 부모클래스이다.
