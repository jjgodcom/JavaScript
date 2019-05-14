class person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return (this.first+this.second);
    }

}

class personPlus extends person{
    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new personPlus('kim',10,20);
console.log('kim.sum() 값은',kim.sum());
console.log('kim.avg() 값은',kim.avg());

// 상속에 대해서 알아보자
// 여러곳에서 쓸수도 있으니 코드를 수정하지않고 class를 하나더 만들면 된다.
// 중복되는 코드가 있을경우 extends 를 사용하면 된다. 