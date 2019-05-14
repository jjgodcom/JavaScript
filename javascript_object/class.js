class person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return ':::::' +(this.first+this.second);
    }
}

var kim = new person('kim',10,20);
console.log('kim의 값은',kim);

var kim = new person('kim',10,20,30);
kim.sum= function(){
    return 'this :' +(this.first+this.second);
}
var lee = new person('lee',10,10,10);
console.log("kim.sum() 의 값은",kim.sum()); 
console.log("lee.sum() 의 값은",lee.sum()); 
