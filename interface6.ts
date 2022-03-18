interface IPerson2{
  name: string;
  age?: number;
}

interface IKorean extends IPerson2{
  city: string;
}

const k: IKorean ={
  name: "Mark",
  city: "서울",
};

console.log(`${k.name}, ${k.city}, ${k.age}`);