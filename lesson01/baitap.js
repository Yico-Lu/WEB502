// Viết hàm toUpperCaseName:
// Nhận vào name: string
// Trả về tên viết hoa
function toUpperCaseName(name) {
    return name.toUpperCase();
}
console.log(toUpperCaseName("dung"));
// Viết hàm calculateSquare:
// Nhận vào n: number
// Trả về bình phương của n
function calculateSquare(n) {
    return n * n;
}
console.log(calculateSquare(5));
// Viết hàm isEven:
// Nhận vào n: number
// Trả về true nếu là số chẵn, ngược lại false
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(8));
// Viết hàm sumArray:
// Nhận vào numbers: number[]
// Trả về tổng các phần tử
function sumArray(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        sum += n;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));
// Viết hàm getStudentName:
// Nhận vào student: {name: string, age: number, gender: boolean}
// Trả về thông tin sinh viên dạng chuỗi
function getStudentName(student) {
    var genderText = student.gender ? "Nam" : "Nữ";
    return "T\u00EAn: ".concat(student.name, " | Tu\u1ED5i: ").concat(student.age, " | Gi\u1EDBi t\u00EDnh: ").concat(genderText);
}
console.log(getStudentName({ name: "Dung", age: 23, gender: true }));
