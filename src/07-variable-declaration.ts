/**
 * บทที่ 7: Variable Declaration แบบละเอียด
 * เรียนรู้ Destructuring, Type Assertions, และ Scope Patterns
 */

console.log("🎯 บทที่ 7: Variable Declaration แบบละเอียด");
console.log("=" .repeat(50));

// ==========================================
// 1. Object Destructuring
// ==========================================
console.log("\n1️⃣ Object Destructuring");
console.log("-".repeat(40));

// Basic object destructuring
const person = {
    name: "สมชาย",
    age: 28,
    city: "กรุงเทพฯ",
    job: "Developer"
};

// แบบเก่า
const nameOld = person.name;
const ageOld = person.age;
console.log("📝 แบบเก่า:", nameOld, ageOld);

// แบบใหม่ - Destructuring
const { name, age } = person;
console.log("✨ Destructuring:", name, age);

// Destructuring พร้อม rename
const { name: personName, age: personAge } = person;
console.log("🔄 Rename:", personName, personAge);

// Destructuring พร้อม default values
const { name: userName, age: userAge, country = "ไทย" } = { ...person, country: undefined };
console.log("🔧 Default values:", userName, userAge, country);

// Nested object destructuring
const employee = {
    personal: {
        firstName: "สมหญิง",
        lastName: "ใจดี"
    },
    work: {
        position: "Senior Developer",
        department: "IT",
        salary: 50000
    }
};

const { 
    personal: { firstName, lastName },
    work: { position, salary }
} = employee;

console.log("🏗️ Nested destructuring:", firstName, lastName, position, salary);

// ==========================================
// 2. Array Destructuring
// ==========================================
console.log("\n2️⃣ Array Destructuring");
console.log("-".repeat(40));

// Basic array destructuring
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม", "มะม่วง"];

// แบบเก่า
const firstFruitOld = fruits[0];
const secondFruitOld = fruits[1];
console.log("📝 แบบเก่า:", firstFruitOld, secondFruitOld);

// แบบใหม่ - Destructuring
const [firstFruit, secondFruit] = fruits;
console.log("✨ Array destructuring:", firstFruit, secondFruit);

// Skip elements
const [first, , third] = fruits;
console.log("⏭️ Skip elements:", first, third);

// Rest operator
const [head, ...rest] = fruits;
console.log("📦 Rest operator:", head, rest);

// Default values
const [a, b, c, d, e = "ไม่มี"] = fruits;
console.log("🔧 Default values:", a, b, c, d, e);

// Swapping variables
let x = 10;
let y = 20;
console.log("🔄 ก่อน swap:", { x, y });

[x, y] = [y, x];
console.log("🔄 หลัง swap:", { x, y });

// ==========================================
// 3. Function Parameter Destructuring
// ==========================================
console.log("\n3️⃣ Function Parameter Destructuring");
console.log("-".repeat(40));

// Object parameter destructuring
interface UserProfile {
    name: string;
    email: string;
    age?: number;
    isActive?: boolean;
}

function displayUser({ name, email, age = 0, isActive = true }: UserProfile): string {
    return `ผู้ใช้: ${name} (${email}) อายุ ${age} สถานะ: ${isActive ? "ใช้งาน" : "ปิด"}`;
}

const user1 = {
    name: "อารีย์",
    email: "aree@example.com",
    age: 25,
    isActive: true
};

console.log("👤 User profile:", displayUser(user1));

// Array parameter destructuring
function calculateSum([a, b, c = 0]: [number, number, number?]): number {
    return a + b + c;
}

console.log("➕ Sum:", calculateSum([10, 20]));
console.log("➕ Sum with default:", calculateSum([10, 20, 30]));

// Mixed destructuring
interface Config {
    database: {
        host: string;
        port: number;
    };
    features: string[];
}

function setupApp({ 
    database: { host, port },
    features: [mainFeature, ...otherFeatures]
}: Config): void {
    console.log(`🔧 Database: ${host}:${port}`);
    console.log(`🎯 Main feature: ${mainFeature}`);
    console.log(`🎯 Other features: ${otherFeatures.join(", ")}`);
}

const appConfig: Config = {
    database: {
        host: "localhost",
        port: 5432
    },
    features: ["authentication", "logging", "caching", "monitoring"]
};

setupApp(appConfig);

// ==========================================
// 4. Type Assertions
// ==========================================
console.log("\n4️⃣ Type Assertions");
console.log("-".repeat(40));

// Basic type assertion
let someValue: unknown = "Hello TypeScript";

// Angle bracket syntax (หลีกเลี่ยงใน JSX)
let strLength1: number = (<string>someValue).length;

// As syntax (แนะนำ)
let strLength2: number = (someValue as string).length;

console.log("📏 String length:", strLength1, strLength2);

// DOM type assertions
// const inputElement = document.getElementById("myInput") as HTMLInputElement;
// inputElement.value = "New value";

// Type assertion กับ arrays
interface Product {
    id: number;
    name: string;
    price: number;
}

const apiResponse: unknown = [
    { id: 1, name: "สินค้า A", price: 100 },
    { id: 2, name: "สินค้า B", price: 200 }
];

const products = apiResponse as Product[];
console.log("🛍️ Products:", products);

// Non-null assertion
let maybeString: string | null = "Hello";
let definitelyString: string = maybeString!; // บอกว่าแน่ใจว่าไม่ใช่ null
console.log("✅ Non-null assertion:", definitelyString);

// ==========================================
// 5. Variable Scope Patterns
// ==========================================
console.log("\n5️⃣ Variable Scope Patterns");
console.log("-".repeat(40));

// Module Pattern
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("🔢 Counter 1:", counter1.increment()); // 1
console.log("🔢 Counter 1:", counter1.increment()); // 2
console.log("🔢 Counter 2:", counter2.increment()); // 1 (แยกจาก counter1)

// IIFE Pattern (Immediately Invoked Function Expression)
const result = (() => {
    const privateVar = "ไม่สามารถเข้าถึงจากภายนอก";
    const calculate = (a: number, b: number): number => a * b;
    
    return {
        publicMethod: () => calculate(5, 10),
        publicVar: "เข้าถึงได้"
    };
})();

console.log("🔒 IIFE result:", result.publicMethod());
console.log("🔒 IIFE public:", result.publicVar);

// Namespace Pattern
namespace Calculator {
    const PI = 3.14159;
    
    export function calculateCircleArea(radius: number): number {
        return PI * radius * radius;
    }
    
    export function calculateRectangleArea(width: number, height: number): number {
        return width * height;
    }
}

console.log("📐 Circle area:", Calculator.calculateCircleArea(5));
console.log("📐 Rectangle area:", Calculator.calculateRectangleArea(4, 6));

// ==========================================
// 6. Temporal Dead Zone Patterns
// ==========================================
console.log("\n6️⃣ Temporal Dead Zone Patterns");
console.log("-".repeat(40));

function temporalDeadZoneExample() {
    console.log("🚫 Temporal Dead Zone Demo:");
    
    // ❌ ใช้ไม่ได้ก่อน declare
    try {
        // console.log(letVariable); // ReferenceError
        console.log("  let ก่อน declare: ❌ (Temporal Dead Zone)");
    } catch (error: any) {
        console.log("  Error:", error.name);
    }
    
    let letVariable = "let value";
    console.log("  let หลัง declare:", letVariable);
    
    // Function hoisting vs let/const
    console.log("  Function call ก่อน declare:", hoistedFunction()); // ✅ ได้
    
    function hoistedFunction(): string {
        return "Function hoisted!";
    }
    
    // ❌ Function expression ไม่ hoist
    try {
        // console.log(notHoisted()); // ReferenceError
        console.log("  Function expression ก่อน declare: ❌");
    } catch (error: any) {
        console.log("  Error:", error.name);
    }
    
    const notHoisted = () => "Not hoisted!";
    console.log("  Function expression หลัง declare:", notHoisted());
}

temporalDeadZoneExample();

// ==========================================
// 7. Advanced Destructuring Patterns
// ==========================================
console.log("\n7️⃣ Advanced Destructuring Patterns");
console.log("-".repeat(40));

// Destructuring with computed property names
const key = "dynamicKey";
const obj = { dynamicKey: "dynamic value", staticKey: "static value" };

const { [key]: dynamicValue, staticKey } = obj;
console.log("🔑 Computed property:", dynamicValue, staticKey);

// Destructuring in loops
const users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    { id: 3, name: "User 3", email: "user3@example.com" }
];

console.log("🔄 Destructuring in loops:");
for (const { id, name } of users) {
    console.log(`  ID: ${id}, Name: ${name}`);
}

// Destructuring with type guards
function processData(data: { type: "user"; name: string } | { type: "product"; title: string }): void {
    if (data.type === "user") {
        const { name } = data;
        console.log("👤 Processing user:", name);
    } else {
        const { title } = data;
        console.log("🛍️ Processing product:", title);
    }
}

processData({ type: "user", name: "สมชาย" });
processData({ type: "product", title: "สินค้า A" });

// ==========================================
// 8. Error Handling in Destructuring
// ==========================================
console.log("\n8️⃣ Error Handling in Destructuring");
console.log("-".repeat(40));

function safeDestructuring() {
    console.log("🛡️ Safe Destructuring:");
    
    // Null/undefined safety
    const nullableObj: { name?: string; age?: number } | null = null;
    
    // ❌ อันตราย
    try {
        // const { name } = nullableObj; // TypeError
        console.log("  Destructuring null: ❌ (TypeError)");
    } catch (error: any) {
        console.log("  Error:", error.name);
    }
    
    // ✅ ปลอดภัย
    const { name = "ไม่ระบุ", age = 0 } = nullableObj || {};
    console.log(`  Safe destructuring: name=${name}, age=${age}`);
    
    // Optional chaining กับ destructuring
    const deepObj: { user?: { profile?: { name?: string } } } = {};
    const userName = deepObj.user?.profile?.name ?? "ไม่ระบุ";
    console.log("  Optional chaining:", userName);
}

safeDestructuring();

// ==========================================
// 9. Performance Considerations
// ==========================================
console.log("\n9️⃣ Performance Considerations");
console.log("-".repeat(40));

function performanceTest() {
    const iterations = 1000000;
    const testObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    
    // Traditional property access
    const traditionalStart = performance.now();
    for (let i = 0; i < iterations; i++) {
        const a = testObj.a;
        const b = testObj.b;
        const c = testObj.c;
    }
    const traditionalEnd = performance.now();
    
    // Destructuring
    const destructuringStart = performance.now();
    for (let i = 0; i < iterations; i++) {
        const { a, b, c } = testObj;
    }
    const destructuringEnd = performance.now();
    
    console.log(`⚡ Traditional access: ${(traditionalEnd - traditionalStart).toFixed(2)}ms`);
    console.log(`⚡ Destructuring: ${(destructuringEnd - destructuringStart).toFixed(2)}ms`);
    console.log("📝 Destructuring มักจะช้ากว่าเล็กน้อยแต่อ่านง่ายกว่า");
}

performanceTest();

// ==========================================
// 10. Best Practices
// ==========================================
console.log("\n🔟 Best Practices");
console.log("-".repeat(40));

console.log("📋 Best Practices สำหรับ Variable Declaration:");

// ✅ ดี: ใช้ destructuring เมื่อต้องการหลายค่า
function goodExample1() {
    const config = { host: "localhost", port: 3000, debug: true };
    const { host, port } = config; // ดีกว่า config.host, config.port
    console.log("✅ Destructuring multiple values:", host, port);
}

// ✅ ดี: ใช้ default values
function goodExample2() {
    const settings: { theme: string; language?: string } = { theme: "dark" };
    const { theme, language = "th" } = settings;
    console.log("✅ Default values:", theme, language);
}

// ✅ ดี: ใช้ type assertions อย่างระมัดระวัง
function goodExample3() {
    const apiData: unknown = { message: "success" };
    
    // Type guard ดีกว่า type assertion
    if (typeof apiData === "object" && apiData !== null && "message" in apiData) {
        console.log("✅ Type guard:", (apiData as any).message);
    }
}

// ❌ หลีกเลี่ยง: Destructuring ที่ซับซ้อนเกินไป
function badExample1() {
    const complexObj = {
        level1: {
            level2: {
                level3: {
                    level4: {
                        value: "too deep"
                    }
                }
            }
        }
    };
    
    // ไม่ดี: ซับซ้อนเกินไป
    // const { level1: { level2: { level3: { level4: { value } } } } } = complexObj;
    
    // ดีกว่า: แยกเป็นขั้นตอน
    const { level1 } = complexObj;
    const { level2 } = level1;
    const { level3 } = level2;
    const { value } = level3.level4;
    
    console.log("⚠️ หลีกเลี่ยง destructuring ที่ซับซ้อน:", value);
}

goodExample1();
goodExample2();
goodExample3();
badExample1();

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 7 - Variable Declaration:");
console.log("🎯 Object destructuring: { name, age } = person");
console.log("🎯 Array destructuring: [first, second] = array");
console.log("🎯 Default values: { name = 'default' } = obj");
console.log("🎯 Rest operator: [head, ...rest] = array");
console.log("🎯 Type assertions: value as Type หรือ <Type>value");
console.log("🎯 Temporal Dead Zone: let/const ไม่ใช้ได้ก่อน declare");
console.log("🎯 Scope patterns: Module, IIFE, Namespace");
console.log("🎯 ใช้ destructuring เพื่อความอ่านง่าย แต่ไม่ซับซ้อนเกินไป");

export { };
