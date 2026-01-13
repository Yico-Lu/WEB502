let myName: string = "dung"
console.log(myName); 

//number
let myAge: number =10;
let score: number =20;

//boolen

let isActive: boolean = true;

// array
let numbers: number[] = [1, 2, 3];
console.log("phan tu thu nhat la " + numbers[0]);

//object
let student: {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: number;
    gender: boolean
} = {
    id : 1,
    name: "dung",
    age: 10,
    address: "nam dinh",
    phone: 12345678,
    gender: true
};
console.log(`ten ${student.name} , gioi tinh ${student.gender ? 'nam' : 'nu'} , toi ${student.age} tuoi `);

// function 
function sum(a: number, b: number): number{
    return a+b;
}
console.log(sum(10 ,20));

