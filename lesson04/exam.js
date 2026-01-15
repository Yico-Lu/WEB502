var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Viết hàm describePerson nhận một object như trên và in ra thông tin theo format:
// Tên: <name>, Tuổi: <age>, Là sinh viên: Có/Không
var describePerson = function (person) {
    return "T\u00EAn: ".concat(person.name, ", Tu\u1ED5i: ").concat(person.age, ", L\u00E0 sinh vi\u00EAn: ").concat(person.isStudent ? "có" : "không");
};
console.log(describePerson({ name: "dungtx", age: 24, isStudent: true }));
// Tạo một mảng products: Product[] gồm ít nhất 3 sản phẩm.
var products = [
    { id: 1, name: "Chuột", price: 200 },
    { id: 2, name: "Bàn phím", price: 500 },
    { id: 3, name: "Màn hình", price: 3000 },
];
// Viết hàm getTotalPrice(products: Product[]) để tính tổng giá.
var getTotalPrice = function (products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
};
console.log("Tổng giá:", getTotalPrice(products));
// Tạo mảng students: Student[].
var students = [
    { id: 1, name: "Ámh", score: 8 },
    { id: 2, name: "Nam", score: 4 },
    { id: 3, name: "Công", score: 9 },
    { id: 4, name: "Dũng", score: 6 }
];
// Viết các hàm sau:
// printStudents(students: Student[]): In danh sách sinh viên.
function printStudents(students) {
    students.forEach(function (student) {
        console.log("ID: ".concat(student.id, " - T\u00EAn: ").concat(student.name, " - \u0110i\u1EC3m: ").concat(student.score));
    });
}
printStudents(students);
// getPassedStudents(students: Student[]): Trả về danh sách sinh viên có điểm ≥ 5.
function getPassedStudents(students) {
    return students.filter(function (student) { return student.score >= 5; });
}
console.log("Sinh viên điểm lớn >=5:", getPassedStudents(students));
// findTopStudent(students: Student[]): Trả về sinh viên có điểm cao nhất.
function findTopStudent(students) {
    var top = students[0];
    for (var i = 1; i < students.length; i++) {
        if (students[i].score > top.score) {
            top = students[i];
        }
    }
    return top;
}
console.log("Sinh viên điểm cao nhất:", findTopStudent(students));
// Bài 4: Yêu cầu:
// Tạo class Person có thuộc tính name, age và phương thức introduce().
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.introduce = function () {
        return "T\u00EAn: ".concat(this.name, ", Tu\u1ED5i: ").concat(this.age);
    };
    return person;
}());
// Tạo class Employee kế thừa Person, thêm employeeId, position.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId, position) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        _this.position = position;
        return _this;
    }
    // Viết phương thức introduce() trong Employee.
    Employee.prototype.introduce = function () {
        return "T\u00EAn: ".concat(this.name, ", Tu\u1ED5i: ").concat(this.age, ", M\u00E3 NV: ").concat(this.employeeId, ", Ch\u1EE9c v\u1EE5: ").concat(this.position);
    };
    return Employee;
}(person));
// Tạo mảng employees: Employee[] và thêm 5 phần tử.
var employees = [
    new Employee("An", 22, 101, "Developer"),
    new Employee("Bình", 25, 102, "Tester"),
    new Employee("Chi", 23, 103, "Designer"),
    new Employee("Dũng", 26, 104, "Leader"),
    new Employee("Hà", 24, 105, "Marketing")
];
// Viết hàm printAllEmployees(employees: Employee[]) để gọi introduce() từng người.
function printAllEmployees(employees) {
    employees.forEach(function (e) {
        console.log(e.introduce());
    });
}
printAllEmployees(employees);
