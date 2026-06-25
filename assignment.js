//array_forEach - 1
let normal_user = [200,300,250,120,400]
let premium_user =[100,400,550,100,400]
let golden_user =[300,370,350,130,450]

let normal_user_discountedprice =[];
let premium_user_discountedprice =[];
let golden_user_discountedprice =[];


normal_user.forEach(function(price) {

    let discountedPrice = price - (price * 5 / 100);

    normal_user_discountedprice.push(discountedPrice);

});

premium_user.forEach(function(price) {

    let discountedPrice = price - (price * 15 / 100);

    premium_user_discountedprice.push(discountedPrice);

});

golden_user.forEach(function(price) {

    let discountedPrice = price - (price * 20 / 100);

    golden_user_discountedprice.push(discountedPrice);

});

console.log(normal_user_discountedprice);
console.log(premium_user_discountedprice);
console.log(golden_user_discountedprice);

//array_Spread -2

cities =["Newyork", "LosAngeles","Houston"]
let cities_2 = cities.push("Ahmedabad","Surat")
console.log(cities)
let cities_3 =cities.unshift("Delhi","Chennai")
let cities_4 =cities.push("Kolkata")
console.log(cities)
cities.pop()
cities.pop()
console.log(cities)
console.log(cities.length)
console.log(cities)
arr1= ["Hello", "World"]
arr2 =[1,3,9,5,4,9,6]
arr3 =[...arr1,...arr2]
arr4 =['a','j','t','r','f']
arr5 =[...arr3,...arr4]
let cities_5 = [
    ...cities,
    ...arr1,
    ...arr2,
    ...arr3,
    ...arr4,
    ...arr5
];
console.log(arr3);
console.log(arr5);
console.log(cities_5);

//async_await_promise_predict_output -3

function after5s(x) {
    return new Promise(res => {
        setTimeout(() => {
            res(x);
        }, 5000);
    });
}

async function mult(input) {
    const f = await after5s(3);
    const g = await after5s(4);
    return input * f * g;
}

mult(2).then(value => {
    console.log(value);
});

async function second_mult(input) {
    const f = after5s(3);
    const g = after5s(4);
    return input * await f * await g;
}

second_mult(2).then(value => {
    console.log(value);
});

// async_await_promise
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("You are learning");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Javascript");
});

const promise4 = new Promise((resolve, reject) => {
    reject("Bye");
});

// Question 1
async function printOutput() {
    promise3
        .then(result => {
            console.log(result);
            return promise1;
        })
        .then(result => {
            console.log(result);
            return promise2;
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
}

printOutput();

// Question 2(a)
function doCodePromise2() {
    try {
        promise2
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                console.log("This will always execute");
            });
    }
    catch(error) {
        console.log(error);
    }
}

doCodePromise2();

// Question 2(b)
function doCodePromise4() {
    try {
        promise4
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log("Error:", error);
            })
            .finally(() => {
                console.log("This will always be executed");
            });
    }
    catch(error) {
        console.log(error);
    }
}

doCodePromise4();

//Callback_function
function multiple(num1, num2) {
    console.log("Multiplying the two numbers:", num1 * num2);
}

function add(num1, num2, callback) {
    console.log("Adding the two numbers:", num1 + num2);

    callback(num1, num2);
}

function area(length, width, callback) {
    setTimeout(() => {
        console.log("Area of rectangle:", length * width);

        callback(length, width, multiple);
    }, 3000);
}

area(10, 20, add);

//class_getter_setter
class SI {
    constructor(principal, roi, time) {
        this._principal = principal;
        this._roi = roi;
        this._time = time;
    }

    calculate() {
        return (this._principal * this._roi * this._time) / 100;
    }

    // Getter
    get roi() {
        return this._roi;
    }

    get time() {
        return this._time;
    }

    // Setter
    set roi(value) {
        this._roi = value;
    }

    set time(value) {
        this._time = value;
    }
}

// 1. Create object
let object_1 = new SI(10000, 5, 2);

console.log("Initial SI =", object_1.calculate());

// 2. Change ROI and Time
object_1.roi = 3;
object_1.time = 3;

// 3. Recalculate SI
console.log("Updated SI =", object_1.calculate());


// Constructor Function
function Student(student_name, student_age, student_gender) {
    this.student_name = student_name;
    this.student_age = student_age;
    this.student_gender = student_gender;

    // Additional Properties
    this.branch = "IT";
    this.college = "Engineering";

    // Method
    this.display = function () {
        console.log("Name :", this.student_name);
        console.log("Age :", this.student_age);
        console.log("Gender :", this.student_gender);
        console.log("Branch :", this.branch);
        console.log("College :", this.college);
        console.log("----------------------------");
    };
}

// Creating Objects
let obj1 = new Student("Datta", 20, "Male");
let obj2 = new Student("Sai", 15, "Female");
let obj3 = new Student("Gayatri", 10, "Male");

// Calling Method
obj1.display();
obj2.display();
obj3.display();

//Default Parameters
  function area() {
    return 50;
}

function perimeter() {
    return 30;
}

function calculate(
    a,
    b = 20,
    c = b * area(),
    d = c + perimeter()
) {
    return a + b + c + d;
}

// Function Calls
console.log(calculate(20));
console.log(calculate(40, 50, 70, 60));
console.log(calculate(40, 50));   

//Destructing Variables
let fruits = [
    "Apple",
    "Orange",
    "Pear",
    "Kiwi",
    "Banana",
    "Melon",
    "Strawberry",
    "Mango",
    "Chiku",
    "Grapes",
    "Small-grapes"
];

// Destructuring
let [
    first,      // Apple (index 0)
    second,     // Orange (index 1)
    third,      // Pear (index 2)
    fourth,     // Kiwi (index 3)
    fifth,      // Banana (index 4)
    sixth,      // Melon (index 5)
    seventh,    // Strawberry (index 6)
    eighth,     // Mango (index 7)
    ninth,      // Chiku (index 8)
    tenth,      // Grapes (index 9)
    last        // Small-grapes (index 10)
] = fruits;

// 1. Even Index Fruits (0,2,4,6,8,10)
console.log("Even Index Fruits:");
console.log(first);
console.log(third);
console.log(fifth);
console.log(seventh);
console.log(ninth);
console.log(last);

console.log("------------------");

// 2. Odd Index Fruits (1,3,5,7,9)
console.log("Odd Index Fruits:");
console.log(second);
console.log(fourth);
console.log(sixth);
console.log(eighth);
console.log(tenth);

console.log("------------------");

// 3. Multiple of 3 Index Fruits (0,3,6,9)
console.log("Multiple of 3 Index Fruits:");
console.log(first);
console.log(fourth);
console.log(seventh);
console.log(tenth);

console.log("------------------");

// 4. 1st, 6th and Last Fruits
console.log("1st, 6th and Last Fruits:");
console.log(first);
console.log(sixth);
console.log(last);

// Event_handling - html

//Exception Handling
let number = 45;

try {

    if (number > 10 && number <= 20) {
        console.log("The number is smaller");
    }
    else if (number > 21 && number <= 40) {
        console.log("The number is little bigger");
    }
    else if (number > 41) {
        throw "Your number is more than 41";
    }

}
catch(error) {
    console.log("Error :", error);
}
finally {
    console.log("this will always execute");
}

// for_in_for_of_loop

let products = [
    {
        name: "HyperV Projector",
        cost: 2500,
        shipping: 50
    },
    {
        name: "Vision Cable",
        cost: 10,
        shipping: 0
    },
    {
        name: "LED Screen",
        cost: 5000,
        shipping: 10
    }
];

// Output 1
for (let product of products) {

    console.log(
        `This ${product.name} is costing you $${product.cost} with shipping charges extra as ${product.shipping}`
    );

    console.log("--------------------------------");
}

// Output 2
console.log("Short Details:");

for (let product of products) {

    console.log(
        `${product.name} --> ${product.cost + product.shipping}`
    );
}
// for loop
let evenSum = 0;
let oddSum = 0;

for(let i = 1; i <= 50; i++) {

    if(i % 2 === 0) {
        evenSum = evenSum + i;
    }
    else {
        oddSum = oddSum + i;
    }
}

console.log("Sum of Even Numbers =", evenSum);
console.log("Sum of Odd Numbers =", oddSum);

// High_order_function_filter
let arr = [34, 78, 12, 11, 67, 55, 42, 89, 60];

// Filter even numbers and multiply by 2
let even_arr = arr
    .filter(num => num % 2 === 0)
    .map(num => num * 2);     // return new array

// Filter odd numbers and multiply by 3
let odd_arr = arr
    .filter(num => num % 2 !== 0)
    .map(num => num * 3);

console.log("Even Array:", even_arr);
console.log("Odd Array:", odd_arr);

// if_else
function checkAge(age) {
    if (age > 20 && age < 30) {
        console.log(age + " : you are still younger");
    }
    else if (age > 30 && age < 50) {
        console.log(age + " : you are becoming older");
    }
    else if (age > 50 && age < 80) {
        console.log(age + " : you are very old");
    }
    else if (age > 81) {
        console.log(age + " : you are not a valid user");
    }
}

checkAge(78);
checkAge(82);

// Inhertance Big

class Product {
    constructor(prod_name, price, discount) {
        this.prod_name = prod_name;
        this.price = price;
        this.discount = discount;
    }

    discountedPrice() {
        let discountAmount = (this.price * this.discount) / 100;
        let newPrice = this.price - discountAmount;

        console.log(
            `${this.prod_name} Discounted Price = ${newPrice}`
        );
    }
}

class ProductBrand extends Product {
    constructor(prod_name, price, discount, brand) {
        super(prod_name, price, discount);

        this.brand = brand;
    }

    details() {
        return `Product: ${this.prod_name}, Price: ${this.price}, Brand: ${this.brand}`;
    }
}

// Object 1
let obj5 = new ProductBrand("Watch", 5000, 10, "Titan");

// Object 2
let obj6 = new ProductBrand("LED TV", 10000, 20, "Samsung");

// Object 3
let obj7 = new ProductBrand("Oven", 20000, 30, "LG");

// Object 4
let obj8 = new ProductBrand("Shoes", 8000, 5, "Nike");

// Calling details()
console.log(obj5.details());
console.log(obj6.details());
console.log(obj7.details());
console.log(obj8.details());

console.log("----------------");

// Calling discountedPrice()
obj5.discountedPrice();
obj6.discountedPrice();
obj7.discountedPrice();
obj8.discountedPrice();

// Inheritance
class Vehicle {
    #capacity;

    constructor(name, capacity) {
        this.name = name;
        this.#capacity = capacity;
    }

    startEngine() {
        console.log(
            `${this.name} can start and has capacity of ${this.#capacity}`
        );
    }

    stopEngine() {
        console.log(
            `${this.name} can stop and has capacity of ${this.#capacity}`
        );
    }

    run() {
        console.log(
            `${this.name} can run on manual mode`
        );
    }

    static brake() {
        console.log("We are calling static method");
    }

    callCapacity() {
        console.log(
            `${this.name} has this much ${this.#capacity} capacity`
        );
    }
}

class TwoWheeler extends Vehicle {
    constructor(name, capacity, type, engine) {
        super(name, capacity);

        this.type = type;
        this.engine = engine;
    }

    details() {
        console.log(
            `Name: ${this.name}, Type: ${this.type}, Engine: ${this.engine}`
        );
    }
}

class ThreeWheeler extends Vehicle {
    constructor(name, capacity, type, engine) {
        super(name, capacity);

        this.type = type;
        this.engine = engine;
    }

    details() {
        console.log(
            `Name: ${this.name}, Type: ${this.type}, Engine: ${this.engine}`
        );
    }
}

// Object of 2-Wheeler
let bike = new TwoWheeler(
    "Bike",
    "4000W",
    2,
    "3000cc"
);

// Object of 3-Wheeler
let auto = new ThreeWheeler(
    "Auto",
    "4000W",
    3,
    "6000cc"
);

console.log("===== TWO WHEELER =====");

bike.details();
bike.startEngine();
bike.stopEngine();
bike.run();
bike.callCapacity();

console.log("\n===== THREE WHEELER =====");

auto.details();
auto.startEngine();
auto.stopEngine();
auto.run();
auto.callCapacity();

console.log("\n===== STATIC METHOD =====");

Vehicle.brake();

// Maps
// 1. Create a map of 6 employees
let employees = new Map([
    [1, "Sony"],
    [2, "Jaya"],
    [3, "Lakshmi"],
    [4, "Harish"],
    [5, "Nani"],
    [6, "Dinesh"]
]);

console.log("Initial Map:");
console.log(employees);

// 2. Delete 5th employee
employees.delete(5);

console.log("After deleting Employee 5:");
console.log(employees);

// 3. Add two more employees
employees.set(7, "Lakshman");
employees.set(8, "Krishna");

console.log("After adding Employee 7 and 8:");
console.log(employees);

// 4. Check whether 4th employee is there or not
console.log("Employee 4 exists:", employees.has(4));

// 5. Check whether 11th employee is there or not
console.log("Employee 11 exists:", employees.has(11));

// 6. Fetch and print all employee IDs
console.log("Employee IDs:");
for (let id of employees.keys()) {
    console.log(id);
}

// 7. Fetch and print all employee names
console.log("Employee Names:");
for (let name of employees.values()) {
    console.log(name);
}

// 8. Fetch and print the 8th and 3rd employee from the map
console.log("Employee 8:", employees.get(8));
console.log("Employee 3:", employees.get(3));

// 9. Delete all data from the map
employees.clear();

console.log("After clearing the map:");
console.log(employees);

// function
// 1. Normal Function
function calculateSI(P, ROI, T) {
    return (P * ROI * T) / 100;
}

console.log("Using Normal Function:");
console.log("Simple Interest =", calculateSI(10000, 5, 2));

// 2. Function Expression
const calculateSIExpression = function(P, ROI, T) {
    return (P * ROI * T) / 100;
};

console.log("\nUsing Function Expression:");
console.log("Simple Interest =", calculateSIExpression(10000, 5, 2));

// 3. Arrow Function
const calculateSIArrow = (P, ROI, T) => (P * ROI * T) / 100;

console.log("\nUsing Arrow Function:");
console.log("Simple Interest =", calculateSIArrow(10000, 5, 2));

//Object_Adding_Composing
const book1 = {
    name: "Tomorrow Land",
    id: "B01",
    price: 56.50
};

const author = {
    auth_name: "John",
    auth_id: "AU01",
    age: 56
};

const distribution = {
    id: "D01",
    copies: 100
};

// 1. Merge all objects into library
const library = {
    ...book1,
    ...author,
    ...distribution
};

console.log("Library after merge:");
console.log(library);

// 2. Add location and city
library.location = "Central Library";
library.city = "Hyderabad";

// 3. Add pages to book1 and gender to author
book1.pages = 500;
author.gender = "Male";

// Update library with new properties
library.pages = book1.pages;
library.gender = author.gender;

// 4. Print library again
console.log("Library after adding new properties:");
console.log(library);

// Promise_reject_resolve
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            if (num % 2 === 0) {
                resolve(`${num} is Positive and Even`);
            } else {
                resolve(`${num} is Positive and Odd`);
            }
        } else {
            reject(`${num} is Negative`);
        }
    });
}

// Test Case 1
checkNumber(-56)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Bye"));

// Test Case 2
checkNumber(45)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Bye"));

// Test Case 3
checkNumber(22)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Bye"));

//Promises_race_all
// Promise Definitions
const p1 = new Promise((resolve) =>
    setTimeout(() => resolve(10), 4000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve(20), 2000)
);

const p3 = new Promise((resolve) =>
    setTimeout(() => resolve(30), 3000)
);

const p4 = new Promise((_, reject) =>
    setTimeout(() => reject(40), 6000)
);

const p5 = new Promise((resolve) =>
    setTimeout(() => resolve(50), 1000)
);

const p6 = new Promise((_, reject) =>
    setTimeout(() => reject(60), 5000)
);

// --------------------
// 1. Promise.all()
// --------------------
Promise.all([p5, p2, p3, p1, p6, p4])
    .then((result) => {
        console.log("ALL Result:", result);
    })
    .catch((error) => {
        console.log("ALL Error:", error);
    });

// --------------------
// 2. Promise.race()
// --------------------
Promise.race([p5, p2, p3, p1, p6, p4])
    .then((result) => {
        console.log("RACE Result:", result);
    })
    .catch((error) => {
        console.log("RACE Error:", error);
    });

// --------------------
// 3. Promise.any()
// --------------------
Promise.any([p5, p2, p3, p1, p6, p4])
    .then((result) => {
        console.log("ANY Result:", result);
    })
    .catch((error) => {
        console.log("ANY Error:", error);
    });

// --------------------
// 4. Promise.all() with catch
// --------------------
Promise.all([p1, p2, p3, p4, p5, p6])
    .then((result) => {
        console.log("ALL Success:", result);
    })
    .catch((error) => {
        console.log("ALL Rejected:", error);
    })
    .finally(() => {
        console.log("Execution Completed");
    });

//Set Interval- HTML
// Shallow Copy Vs Deep Copy
const ecommerce = {
    pid: "W01",
    pname: "Titan Watch",
    price: 45,

    availability: {
        online: ["Flipkart", "Amazon"]
    },

    configuration: {
        Bluetooth: "yes",
        Wifi: "yes",
        Alarm: "yes",
        Timer: "yes",
        country: "India",
        favColors: ["Red", "Black"],

        loc: {
            lat: 61.2039,
            long: 34.2019
        }
    }
};

console.log("Original Object:");
console.log(ecommerce);

// ===================================
// 1. Shallow Clone
// ===================================
const shallowClone = { ...ecommerce };

console.log("\nShallow Clone:");
console.log(shallowClone);

// ===================================
// 2. Deep Clone
// ===================================
const deepClone = structuredClone(ecommerce);

// Changes required in Deep Clone
deepClone.configuration.country = "Australia";
deepClone.configuration.loc.long = 39.55;
deepClone.configuration.Timer = "no";

console.log("\nDeep Clone After Changes:");
console.log(deepClone);

console.log("\nOriginal Object After Deep Clone Changes:");
console.log(ecommerce);

// String Replace
let str = "Java Is open source language and Javascript is scripting language. java Is very user-friendly and easy to use";

console.log("Original String:");
console.log(str);

// 1. Replace only first occurrence of "Java" with "Python"
let result1 = str.replace("Java", "Python");
console.log("\n1. First Java replaced:");
console.log(result1);

// 2. Replace all words starting with "java" (Java, java, Javascript)
let result2 = str.replaceAll(/java\w*/gi, "python");
console.log("\n2. All words starting with java replaced:");
console.log(result2);

// 3. Replace all occurrences of "Java" (case-insensitive) with "Hello"
let result3 = str.replaceAll(/java/gi, "Hello");
console.log("\n3. All Java replaced with Hello:");
console.log(result3);

// 4. Replace case-insensitive "is" with "are"
let result4 = str.replaceAll(/is/gi, "are");
console.log("\n4. All is replaced with are:");
console.log(result4);
// Working with Objects
const product = {
    productName: "Titan Watch",
    price: 45,
    colors: ["black", "white"],
    brandName: "Titan",
    licenseNo: "LIC01AB",
    discount: 10,

    distributor: [
        {
            name: "ABC",
            code: 100
        },
        {
            name: "ABC1",
            code: 101
        },
        {
            name: "ABC2",
            code: 102
        }
    ],

    platforms: ["Amazon", "Flipkart", "eBay"],
    country: "India"
};

// 1. Product name, price and colors separately
const { productName, price, colors } = product;

console.log("Product Name:", productName);
console.log("Price:", price);
console.log("Colors:", colors);

// 2. Distributor details with license number
const { licenseNo, distributor } = product;

distributor.forEach((dist) => {
    console.log(
        `${dist.name} with code ${dist.code} is having the license number ${licenseNo}`
    );
});

// 3. Product name with platform, color and price
const [firstColor] = colors;

product.platforms.forEach((platform) => {
    console.log(
        `${productName} is promoted on ${platform} with color ${firstColor} and price $${price}`
    );
});

// 4. Rest operator
const { distributor: d, platforms, ...restDetails } = product;

console.log("Rest Details:");
console.log(restDetails);

//working_with_objects
const product = {
    productName: "Laptop",
    price: 50000,
    colors: ["black", "white"],
    brandName: "Dell",
    licenseNo: "LIC01AB",
    discount: 10,

    distributor: [
        { name: "ABC", code: 100 },
        { name: "ABC1", code: 101 },
        { name: "ABC2", code: 102 }
    ],

    platforms: ["Amazon", "Flipkart", "eBay"],
    country: "India"
};

// 1. Product name, price, and colors
const { productName, price, colors, distributor, licenseNo, platforms, ...restDetails } = product;
console.log("Product:", productName, "Price:", price, "Colors:", colors);

// 2. Distributor details with license number (3 log statements)
distributor.forEach(({ name, code }) =>
    console.log("Distributor:", name, "Code:", code, "License:", licenseNo)
);

// 3. Product name with platform, color, and price
platforms.forEach(platform =>
    console.log("Product:", productName, "Platform:", platform, "Colors:", colors, "Price:", price)
);

// 4. Remaining details using rest operator
console.log("Rest Details:", restDetails);

//pageselector-html


