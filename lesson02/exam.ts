
// Tạo type Product gồm các thuộc tính:
// id: number
// name: string
// price: number
// inStock: boolean
// Khai báo một mảng products kiểu Product[] và thêm ít nhất 3 sản phẩm.
type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

const products: Product[] = [
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
function showInfomation(products: Product[]): void {
    products.forEach((p, index) => {
        console.log(
            `STT: ${index + 1}, Tên sản phẩm: ${p.name}, Giá bán: ${p.price} VNĐ, Trạng thái: ${p.inStock ? "Còn hàng" : "Hết hàng"}`
        );
    });
}
showInfomation(products);
// Viết hàm getAvailableProducts:
// Nhận vào products: Product[]
// Trả về danh sách sản phẩm còn hàng (inStock === true)
function getAvailableProducts(products: Product[]): Product[] {
    return products.filter(p => p.inStock === true);
}
console.log("Còn hàng:", getAvailableProducts(products));
// Viết hàm calculateTotalPrice:
// Nhận vào products: Product[]
// Trả về tổng giá của tất cả sản phẩm
function calculateTotalPrice(products: Product[]): number {
    let total = 0;
    for (let p of products) {
        total += p.price;
    }
    return total;
}
console.log("Tổng tiền:", calculateTotalPrice(products));
// Bài 2:
// Tạo interface ILearner gồm các thuộc tính:
// id: number
// name: string
// score: number
// Tạo interface IStudent kế thừa từ ILearner, bổ sung:
// graduationYear: number
// level: "Excellent" | "Good" | "Average"
interface ILearner {
    id: number;
    name: string;
    score: number;
}
interface IStudent extends ILearner {
    graduationYear: number;
    level: "Excellent" | "Good" | "Average";
}

// Khai báo mảng students kiểu IStudent[] và thêm ít nhất 4 học viên
const students: IStudent[] = [
    { id: 1, name: "An", score: 8, graduationYear: 2025, level: "Excellent" },
    { id: 2, name: "Bình", score: 6, graduationYear: 2024, level: "Good" },
    { id: 3, name: "Chi", score: 4, graduationYear: 2025, level: "Average" },
    { id: 4, name: "Dũng", score: 9, graduationYear: 2026, level: "Excellent" }
];

// Viết hàm getPassedStudents
// Nhận vào students: IStudent[]
// Trả về danh sách học viên có score >= 5
function getPassedStudents(students: IStudent[]): IStudent[] {
    return students.filter(s => s.score >= 5);
}
console.log("Đậu:", getPassedStudents(students));
// Viết hàm getStudentNames:
// Nhận vào students: IStudent[]
// Trả về mảng tên học viên (string[])
function getStudentNames(students: IStudent[]): string[] {
    return students.map(s => s.name);
}
console.log("Tên học viên:", getStudentNames(students));
// Viết hàm getExcellentStudents:
// Nhận vào students: IStudent[]
// Trả về danh sách học viên có level === "Excellent"
function getExcellentStudents(students: IStudent[]): IStudent[] {
    return students.filter(s => s.level === "Excellent");
}
console.log("Xuất sắc:", getExcellentStudents(students));


