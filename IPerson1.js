"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`안녕하세요 ${this.name} ${this.age}살 입니다.`);
    }
}
const person = new Person('Mark', 12);
person.hello();
