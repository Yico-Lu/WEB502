//  bài 1Tạo một object person gồm các thuộc tính:
// name: string
// age: number
// isStudent: boolean
type Person = {
   name: string;
   age: number;
   isStudent: boolean;
}
// Viết hàm describePerson nhận một object như trên và in ra thông tin theo format:
// Tên: <name>, Tuổi: <age>, Là sinh viên: Có/Không
let describePerson = (person: Person) => {
    return `Tên: ${person.name}, Tuổi: ${person.age}, Là sinh viên: ${person.isStudent ? "có" : "không"}`
}
console.log(describePerson({name: "dungtx", age: 24, isStudent: true}));
// Bài 2. Yêu cầu:
// Tạo type tên là Product gồm: id: number, name: string, price: number.
type Product = {
    id: number;
    name: string;
    price: number;
}
// Tạo một mảng products: Product[] gồm ít nhất 3 sản phẩm.
const products: Product[] = [
 { id: 1, name: "Chuột", price: 200 },
 { id: 2, name: "Bàn phím", price: 500 },
 { id: 3, name: "Màn hình", price: 3000 },
]
// Viết hàm getTotalPrice(products: Product[]) để tính tổng giá.
const getTotalPrice = (products: Product[]) => {
    let total = 0;
    for(let i = 0; i < products.length; i ++ ){
         total += products[i].price;
    }
    return total;
}
console.log("Tổng giá:", getTotalPrice(products));


// Bài 3. Yêu cầu:
// Tạo interface Student gồm: id: number, name: string, score: number.
interface Student{
    id: number;
    name: string;
    score: number;
}
// Tạo mảng students: Student[].
const students: Student[] = [
  { id: 1, name: "Ámh", score: 8 },
  { id: 2, name: "Nam", score: 4 },
  { id: 3, name: "Công", score: 9 },
  { id: 4, name: "Dũng", score: 6 }
];
// Viết các hàm sau:
// printStudents(students: Student[]): In danh sách sinh viên.
function printStudents(students: Student[]): void {
  students.forEach(student => {
    console.log(`ID: ${student.id} - Tên: ${student.name} - Điểm: ${student.score}`);
  });
}
printStudents(students);
// getPassedStudents(students: Student[]): Trả về danh sách sinh viên có điểm ≥ 5.
function getPassedStudents(students: Student[]): Student[] {
  return students.filter(student => student.score >= 5);
}
console.log("Sinh viên điểm lớn >=5:", getPassedStudents(students));
// findTopStudent(students: Student[]): Trả về sinh viên có điểm cao nhất.
function findTopStudent(students: Student[]): Student {
   let top = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > top.score) {
      top = students[i];
    }
  }
  return top;
}
console.log("Sinh viên điểm cao nhất:", findTopStudent(students));


// Bài 4: Yêu cầu:
// Tạo class Person có thuộc tính name, age và phương thức introduce().
class person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Tên: ${this.name}, Tuổi: ${this.age}`;
  }
}
// Tạo class Employee kế thừa Person, thêm employeeId, position.
class Employee extends person {
  employeeId: number;
  position: string;

  constructor(name: string, age: number, employeeId: number, position: string) {
    super(name, age);
    this.employeeId = employeeId;
    this.position = position;
  }

  // Viết phương thức introduce() trong Employee.
  introduce(): string {
    return `Tên: ${this.name}, Tuổi: ${this.age}, Mã NV: ${this.employeeId}, Chức vụ: ${this.position}`;
  }
}
// Tạo mảng employees: Employee[] và thêm 5 phần tử.
const employees: Employee[] = [
  new Employee("An", 22, 101, "Developer"),
  new Employee("Bình", 25, 102, "Tester"),
  new Employee("Chi", 23, 103, "Designer"),
  new Employee("Dũng", 26, 104, "Leader"),
  new Employee("Hà", 24, 105, "Marketing")
];
// Viết hàm printAllEmployees(employees: Employee[]) để gọi introduce() từng người.
function printAllEmployees(employees: Employee[]): void {
  employees.forEach(e => {
    console.log(e.introduce());
  });
}
printAllEmployees(employees);
