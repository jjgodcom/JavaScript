var kim = {
    name:'kim',
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first+this.second+this.third;
    }
}

var lee = {
    name:'kim',
    first:10,
    second:10,
    third:10,
    sum:function(){
        return this.first+this.second+this.third;
    }
}

console.log("kim.sum() 의 값은",kim.sum()); 
console.log("lee.sum() 의 값은",lee.sum()); 

var d1 = new Date('2109-4-10');
console.log("d1.getFullYear() 의 값은",d1.getFullYear()); //연도
console.log("d1.getMonth() 의 값은",d1.getMonth()); //월 (월은 0부터 카운팅됨)

