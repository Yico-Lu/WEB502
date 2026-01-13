var products = [
    { id: 1, name: "Sản phẩm A", price: 1000, inStock: true },
    { id: 2, name: "Sản phẩm B", price: 2000, inStock: false },
    { id: 3, name: "Sản phẩm C", price: 3000, inStock: true }
];
// Viết hàm showInfomation:
// Nhận vào products: Product[]
// In thông tin danh sách các sản phẩm
// STT: 1,Tên sản phẩm: Sản phẩm a, Giá bán: 1000 VNĐ, Trạng thái: Còn hàng 
// STT: 2,Tên sản phẩm: Sản phẩm b, Giá bán: 2000 VNĐ, Trạng thái: Hết hàng 
// ...
function showInfomation(products) {
    products.forEach(function (p, index) {
        console.log("STT: ".concat(index + 1, ", T\u00EAn s\u1EA3n ph\u1EA9m: ").concat(p.name, ", Gi\u00E1 b\u00E1n: ").concat(p.price, " VN\u0110, Tr\u1EA1ng th\u00E1i: ").concat(p.inStock ? "Còn hàng" : "Hết hàng"));
    });
}
showInfomation(products);
// Viết hàm getAvailableProducts:
// Nhận vào products: Product[]
// Trả về danh sách sản phẩm còn hàng (inStock === true)
function getAvailableProducts(products) {
    return products.filter(function (p) { return p.inStock === true; });
}
console.log("Còn hàng:", getAvailableProducts(products));
// Viết hàm calculateTotalPrice:
// Nhận vào products: Product[]
// Trả về tổng giá của tất cả sản phẩm
function calculateTotalPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        total += p.price;
    }
    return total;
}
console.log("Tổng tiền:", calculateTotalPrice(products));
// Khai báo mảng students kiểu IStudent[] và thêm ít nhất 4 học viên
var students = [
    { id: 1, name: "An", score: 8, graduationYear: 2025, level: "Excellent" },
    { id: 2, name: "Bình", score: 6, graduationYear: 2024, level: "Good" },
    { id: 3, name: "Chi", score: 4, graduationYear: 2025, level: "Average" },
    { id: 4, name: "Dũng", score: 9, graduationYear: 2026, level: "Excellent" }
];
// Viết hàm getPassedStudents
// Nhận vào students: IStudent[]
// Trả về danh sách học viên có score >= 5
function getPassedStudents(students) {
    return students.filter(function (s) { return s.score >= 5; });
}
console.log("Đậu:", getPassedStudents(students));
// Viết hàm getStudentNames:
// Nhận vào students: IStudent[]
// Trả về mảng tên học viên (string[])
function getStudentNames(students) {
    return students.map(function (s) { return s.name; });
}
console.log("Tên học viên:", getStudentNames(students));
// Viết hàm getExcellentStudents:
// Nhận vào students: IStudent[]
// Trả về danh sách học viên có level === "Excellent"
function getExcellentStudents(students) {
    return students.filter(function (s) { return s.level === "Excellent"; });
}
console.log("Xuất sắc:", getExcellentStudents(students));
