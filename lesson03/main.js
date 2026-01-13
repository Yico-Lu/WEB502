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
var Person = /** @class */ (function () {
    function Person(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    Person.prototype.showInfo = function () {
        return "Id: ".concat(this.id, ",H\u1ECD v\u00E0 t\u00EAn: ").concat(this.name, ", Gi\u1EDBi t\u00EDnh: ").concat(this.gender ? 'Nam' : 'Nữ');
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (id) {
        if (id > 0) {
            this.id = id;
        }
    };
    return Person;
}());
var person1 = new Person(1, 'dungtx', true);
// person1.name = 'new chinhpd5'; // lỗi vì name: readonly
// console.log(person1.name);
// console.log(person1.id); lỗi vì id: private
// console.log(person1.showInfo());
// tính đóng gói: private, protected
person1.setId(-10);
console.log(person1.getId());
// kế thừa
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, gender, major, GPA) {
        var _this = _super.call(this, id, name, gender) || this;
        _this.major = major;
        _this.GPA = GPA;
        return _this;
    }
    return Student;
}(Person));
var student1 = new Student(2, 'dungtx', false, 'Công nghệ thông tin', 8.5);
// console.log(student1.GPA);
// console.log(student1.showInfo());
// tính trừu tượng
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.r * this.r;
    };
    return Circle;
}(Shape));
var circle1 = new Circle(10);
console.log(circle1.area());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(d) {
        var _this = _super.call(this) || this;
        _this.d = d;
        return _this;
    }
    Square.prototype.area = function () {
        return this.d * this.d;
    };
    return Square;
}(Shape));
var square1 = new Square(10);
console.log(square1.area());
