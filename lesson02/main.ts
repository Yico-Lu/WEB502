//tuple
let myTuple: [string, number, boolean];
myTuple = ['dung', 23, true];
let myRGB: [number,number, number] = [0,0,255];
myRGB = [1,100,255];

// enum
enum Status {
  SUCCESS = 'success',
  WARNING = 'warn',
  ERROR = 'error'
}

let myStatus: Status = Status.WARNING
// console.log(myStatus);

//any 
let myName: any = 'dung';
myName = 24;
console.log(myName);

// unknow
let myAge: unknown = 'dung';
// myAge =24

if(typeof myAge == 'string'){
  console.log(myAge.toUpperCase());
}
// union
let myVar: string|number|boolean = 'dung';
myVar = true
let myArray: string[]|number[] = ['a', 'b', 'c']
myArray = [1, 2, 3]

let myArray1: (string|number)[] = [1, 'a', 2]

// Literal
let myLiteral: 'success'|'warn'|'error';
myLiteral = 'success';
// myLiteral = 'warn1';
console.log(myLiteral);


// type
type Person = {
  id: number,
  name: string,
  gender?: boolean
}

let person1: Person = {
  id: 1,
  name: "dung",
  gender: true
}

let person2: Person = {
  id: 2,
  name: "tran van a",
  // gender: false
}

type Student = Person & {
  major: string
}

let student1: Student = {
  id: 3,
  name: "tran thi b",
  gender: false,
  major: "marketing"
}

// interface

interface IPerson {
  id: number,
  name: string,
  gender?: boolean
}

let person3: IPerson = {
  id: 4,
  name: "Tran manh A",
  gender: true
}

// IStudent kế thừa IPerson
interface IStudent1 extends IPerson {
  major: string,
  GPA: number
}

// let student3: IStudent = {
//   id: 5,
//   name: "Tran Xuan D",
//   gender: true,
//   major: 'WEB Programing',
//   GPA: 9.0
// }
// Generic
function identity<T>(value: T): T {
  return value
}

identity<number>(10)
identity<string>("Hello")