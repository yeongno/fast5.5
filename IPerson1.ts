interface IPerson1{
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1{
  name: string;
  age?: number | undefined;

  constructor(name: string , age?: number){
    this.name = name;
    this.age = age;
  }
  hello(): void {
    console.log(`안녕하세요 ${this.name} ${this.age}살 입니다.`);
  }
}

const person : IPerson1= new Person('Mark',12);

person.hello();