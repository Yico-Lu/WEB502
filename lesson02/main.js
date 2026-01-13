//tuple
var myTuple;
myTuple = ['dung', 23, true];
var myRGB = [0, 0, 255];
myRGB = [1, 100, 255];
// enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["WARNING"] = "warn";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
var myStatus = Status.WARNING;
// console.log(myStatus);
//any 
var myName = 'dung';
myName = 24;
console.log(myName);
// unknow
var myAge = 'dung';
// myAge =24
if (typeof myAge == 'string') {
    console.log(myAge.toUpperCase());
}
// union
var myVar = 'dung';
myVar = true;
var myArray = ['a', 'b', 'c'];
myArray = [1, 2, 3];
var myArray1 = [1, 'a', 2];
// Literal
var myLiteral;
myLiteral = 'success';
// myLiteral = 'warn1';
console.log(myLiteral);
var person1 = {
    id: 1,
    name: "dung",
    gender: true
};
var person2 = {
    id: 2,
    name: "tran van a",
    // gender: false
};
var student1 = {
    id: 3,
    name: "tran thi b",
    gender: false,
    major: "marketing"
};
var person3 = {
    id: 4,
    name: "Tran manh A",
    gender: true
};
// let student3: IStudent = {
//   id: 5,
//   name: "Tran Xuan D",
//   gender: true,
//   major: 'WEB Programing',
//   GPA: 9.0
// }
// Generic
function identity(value) {
    return value;
}
identity(10);
identity("Hello");
