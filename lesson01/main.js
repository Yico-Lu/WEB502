var myName = "dung";
console.log(myName);
//number
var myAge = 10;
var score = 20;
//boolen
var isActive = true;
// array
var numbers = [1, 2, 3];
console.log("phan tu thu nhat la " + numbers[0]);
//object
var student = {
    id: 1,
    name: "dung",
    age: 10,
    address: "nam dinh",
    phone: 12345678,
    gender: true
};
console.log("ten ".concat(student.name, " , gioi tinh ").concat(student.gender ? 'nam' : 'nu', " , toi ").concat(student.age, " tuoi "));
// function 
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
