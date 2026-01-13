// Viết hàm toUpperCaseName:
// Nhận vào name: string
// Trả về tên viết hoa
function toUpperCaseName(name: string): string {
    return name.toUpperCase();
}
console.log(toUpperCaseName("dung"));
// Viết hàm calculateSquare:
// Nhận vào n: number
// Trả về bình phương của n
function calculateSquare(n: number): number {
    return n * n;
}
console.log(calculateSquare(5));
// Viết hàm isEven:
// Nhận vào n: number
// Trả về true nếu là số chẵn, ngược lại false
function isEven(n: number): boolean {
    return n % 2 === 0;
}
console.log(isEven(8));
// Viết hàm sumArray:
// Nhận vào numbers: number[]
// Trả về tổng các phần tử
function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

// Viết hàm getStudentName:
// Nhận vào student: {name: string, age: number, gender: boolean}
// Trả về thông tin sinh viên dạng chuỗi
function getStudentName(student: { name: string; age: number; gender: boolean }): string {
    const genderText = student.gender ? "Nam" : "Nữ";
    return `Tên: ${student.name} | Tuổi: ${student.age} | Giới tính: ${genderText}`;
}
console.log(getStudentName({name:"Dung", age:23, gender:true}));

