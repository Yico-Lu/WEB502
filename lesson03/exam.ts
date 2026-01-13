// Câu 1: Tạo class Product gồm các thuộc tính:
// id: number
// name: string
// price: number
// inStock: boolean
// Yêu cầu:
// Viết constructor để khởi tạo các thuộc tính.
// const product1 = new Product(1, "Áo thun", 120000, true);
// console.log(product1);
// Câu 2: Trong class Product, viết phương thức:
// getInfo(): string
// Yêu cầu:
// Trả về chuỗi thông tin sản phẩm:
// ID: 1 - Tên: Laptop - Giá: 15000000 - Còn hàng: Có
// (Nếu inStock == false hiển thị "Không")
// Câu 3: Trong class Product, viết phương thức:
// updatePrice(newPrice: number): void Yêu cầu:
// Cập nhật lại giá sản phẩm.
// Không cho phép giá ≤ 0.
// Câu 4: Trong class Product, viết phương thức:
// toggleStock(): void Yêu cầu:
// Đổi trạng thái inStock từ true → false hoặc ngược lại.
// Câu 5: Trong class Product, viết phương thức: isExpensive(threshold: number): boolean Yêu cầu:
// Trả về true nếu price ≥ threshold, ngược lại false.
// Câu 6: Tạo mảng sản phẩm:
// const products: Product[] Yêu cầu:
// Tạo ít nhất 3 đối tượng Product. Gọi các phương thức:
// Lặp mảng products và sử dụng getInfo()
// Sử dụng updatePrice() để cập nhật giá cho sản phẩm đầu tiên trong products
// Sử dụng toggleStock() để đổi trạng thái sản phẩm thứ 2
// Sử dụng vòng lặp để kiểm tra các sản phẩm có isExpensive(1000000)

class Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    constructor(id: number, name: string, price: number, inStock: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    getInfo(): string {
        return `ID: ${this.id} - Tên: ${this.name} - Giá: ${this.price} - Còn hàng: ${this.inStock ? "Có" : "Không"}`;
    }
    updatePrice(newPrice: number): void {
        if (newPrice > 0) {
            this.price = newPrice;
        } else {
            console.log("Giá không hợp lệ!");
        }
    }
    toggleStock(): void {
        this.inStock = !this.inStock;
    }
    isExpensive(threshold: number): boolean {
        return this.price >= threshold;
    }
}

//6
const products: Product[] = [
    new Product(1, "Laptop", 15000000, true),
    new Product(2, "Chuột", 200000, true),
    new Product(3, "Bàn phím", 800000, false)
];
for (let product of products) {
    console.log(product.getInfo());
}
products[0].updatePrice(14000000);
products[1].toggleStock();
for (let product of products) {
    if (product.isExpensive(1000000)) {
        console.log("Sản phẩm đắt:", product.getInfo());
    }
}


