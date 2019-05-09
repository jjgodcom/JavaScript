var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}

// this는 매소드가 자신이 속해있는 객체를 가르키는 특수한 키워드는 이다.
console.log("kim.sum() 의 값은",kim.sum()); 

