interface HelloPerson{
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string){
  console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson('Mark', 39); 
//helloPerson에 없는 age를 써도 에러가 안뜨는 것은 interface와 바로 연결 되어있어서 이다.