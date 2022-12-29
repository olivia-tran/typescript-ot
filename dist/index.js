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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
console.log(merge({ name: "olivia" }, { languages: ["python", "javascript"] }));
var inputElement = document.querySelector("#username");
console.dir(inputElement);
inputElement.value = "Hello";
console.log(inputElement === null || inputElement === void 0 ? void 0 : inputElement.value);
var btn = document.getElementById("btn"); //Type assertion
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
var todos = readTodos();
todos.forEach(createTodo);
// Load todos from local storage
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// Save todos to local storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    var newLI = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert("You Clicked Me!");
//   alert(input.value);
// });
// form?.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });
var Player = /** @class */ (function () {
    function Player(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    Player.prototype.secretMethod = function () {
        console.log("SECRET METHOD!!");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("Score cannot be negative!");
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 99999999;
    };
    return SuperPlayer;
}(Player));
var elton = new Player("Elton", "Steele", 100);
elton.fullName;
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand, " jacket"));
    };
    return Jacket;
}());
var bike1 = new Bike("red");
var jacket1 = new Jacket("Prada", "black");
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("HELLO!");
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
var bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
