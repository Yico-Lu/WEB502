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
var Product = /** @class */ (function () {
    function Product(id, name, price, inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    Product.prototype.getInfo = function () {
        return "ID: ".concat(this.id, " - T\u00EAn: ").concat(this.name, " - Gi\u00E1: ").concat(this.price, " - C\u00F2n h\u00E0ng: ").concat(this.inStock ? "Có" : "Không");
    };
    Product.prototype.updatePrice = function (newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        }
        else {
            console.log("Giá không hợp lệ!");
        }
    };
    Product.prototype.toggleStock = function () {
        this.inStock = !this.inStock;
    };
    Product.prototype.isExpensive = function (threshold) {
        return this.price >= threshold;
    };
    return Product;
}());
//6
var products = [
    new Product(1, "Laptop", 15000000, true),
    new Product(2, "Chuột", 200000, true),
    new Product(3, "Bàn phím", 800000, false)
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log(product.getInfo());
}
products[0].updatePrice(14000000);
products[1].toggleStock();
for (var _a = 0, products_2 = products; _a < products_2.length; _a++) {
    var product = products_2[_a];
    if (product.isExpensive(1000000)) {
        console.log("Sản phẩm đắt:", product.getInfo());
    }
}
