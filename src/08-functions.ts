/**
 * บทที่ 8: Functions แบบครบถ้วน
 * เรียนรู้ Functions, Overloading, Generics, Async และ Higher-order functions
 */

console.log("🎯 บทที่ 8: Functions แบบครบถ้วน");
console.log("=" .repeat(50));

// ==========================================
// 1. Function Declarations และ Expressions
// ==========================================
console.log("\n1️⃣ Function Declarations และ Expressions");
console.log("-".repeat(40));

// Function Declaration (Hoisted)
function greet(name: string): string {
    return `สวัสดี ${name}`;
}

// Function Expression (Not Hoisted)
const greetExpression = function(name: string): string {
    return `สวัสดี ${name} จาก expression`;
};

// Arrow Function
const greetArrow = (name: string): string => {
    return `สวัสดี ${name} จาก arrow function`;
};

// Concise Arrow Function
const greetConcise = (name: string): string => `สวัสดี ${name} แบบ concise`;

console.log("🔧 Function declaration:", greet("สมชาย"));
console.log("🔧 Function expression:", greetExpression("สมหญิง"));
console.log("🔧 Arrow function:", greetArrow("อารีย์"));
console.log("🔧 Concise arrow:", greetConcise("สมศรี"));

// ==========================================
// 2. Optional และ Default Parameters
// ==========================================
console.log("\n2️⃣ Optional และ Default Parameters");
console.log("-".repeat(40));

// Optional parameters
function createUser(name: string, age?: number, email?: string): string {
    const ageText = age ? ` อายุ ${age}` : "";
    const emailText = email ? ` (${email})` : "";
    return `ผู้ใช้: ${name}${ageText}${emailText}`;
}

// Default parameters
function calculatePrice(price: number, tax: number = 0.07, discount: number = 0): number {
    return price * (1 + tax) * (1 - discount);
}

console.log("👤 User 1:", createUser("สมชาย"));
console.log("👤 User 2:", createUser("สมหญิง", 25));
console.log("👤 User 3:", createUser("อารีย์", 28, "aree@example.com"));

console.log("💰 Price 1:", calculatePrice(100));
console.log("💰 Price 2:", calculatePrice(100, 0.1));
console.log("💰 Price 3:", calculatePrice(100, 0.1, 0.2));

// ==========================================
// 3. Rest Parameters และ Spread
// ==========================================
console.log("\n3️⃣ Rest Parameters และ Spread");
console.log("-".repeat(40));

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

function logMessages(mainMessage: string, ...additionalMessages: string[]): void {
    console.log("📝 Main:", mainMessage);
    additionalMessages.forEach((msg, index) => {
        console.log(`📝 Additional ${index + 1}:`, msg);
    });
}

console.log("➕ Sum of numbers:", sum(1, 2, 3, 4, 5));
console.log("➕ Sum of more numbers:", sum(10, 20, 30));

logMessages("ข้อความหลัก", "ข้อความเพิ่ม 1", "ข้อความเพิ่ม 2");

// Spread syntax
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];

console.log("📦 Spread arrays:", allNumbers);
console.log("➕ Sum with spread:", sum(...allNumbers));

// ==========================================
// 4. Function Overloading
// ==========================================
console.log("\n4️⃣ Function Overloading");
console.log("-".repeat(40));

// Function overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string[], b: string[]): string[];
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b];
    }
    throw new Error("Invalid arguments");
}

console.log("🔗 Combine strings:", combine("Hello", " World"));
console.log("🔗 Combine numbers:", combine(10, 20));
console.log("🔗 Combine arrays:", combine(["a", "b"], ["c", "d"]));

// Generic alternative to overloading
function genericCombine<T>(a: T, b: T, combiner: (a: T, b: T) => T): T {
    return combiner(a, b);
}

console.log("🧬 Generic combine strings:", genericCombine("Hello", " World", (a, b) => a + b));
console.log("🧬 Generic combine numbers:", genericCombine(15, 25, (a, b) => a + b));

// ==========================================
// 5. Generic Functions
// ==========================================
console.log("\n5️⃣ Generic Functions");
console.log("-".repeat(40));

// Basic generic function
function identity<T>(value: T): T {
    return value;
}

// Generic function with multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Generic function with constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): T {
    console.log(`📏 Length: ${item.length}`);
    return item;
}

// Generic function with default type
function createArray<T = string>(item: T, count: number): T[] {
    return new Array(count).fill(item);
}

console.log("🆔 Identity string:", identity("TypeScript"));
console.log("🆔 Identity number:", identity(42));
console.log("👫 Pair:", pair("name", 25));
console.log("👫 Pair different types:", pair(true, "active"));

logLength("Hello World"); // string has length
logLength([1, 2, 3, 4]); // array has length

console.log("📚 Create array:", createArray("item", 3));
console.log("📚 Create number array:", createArray(42, 3));

// ==========================================
// 6. Higher-Order Functions
// ==========================================
console.log("\n6️⃣ Higher-Order Functions");
console.log("-".repeat(40));

// Functions that take functions as parameters
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

console.log("➕ Apply add:", applyOperation(5, 3, add));
console.log("✖️ Apply multiply:", applyOperation(5, 3, multiply));

// Functions that return functions
function createMultiplier(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("2️⃣ Double 5:", double(5));
console.log("3️⃣ Triple 5:", triple(5));

// Currying
function curriedAdd(a: number): (b: number) => (c: number) => number {
    return (b: number) => (c: number) => a + b + c;
}

const addFive = curriedAdd(5);
const addFiveTen = addFive(10);
const result = addFiveTen(15); // 5 + 10 + 15 = 30

console.log("🍛 Curried add:", result);

// Function composition
function compose<T, U, V>(f: (x: U) => V, g: (x: T) => U): (x: T) => V {
    return (x: T) => f(g(x));
}

const addOne = (x: number): number => x + 1;
const multiplyByTwo = (x: number): number => x * 2;

const addOneThenMultiply = compose(multiplyByTwo, addOne);
console.log("🔗 Compose functions:", addOneThenMultiply(5)); // (5 + 1) * 2 = 12

// ==========================================
// 7. Async Functions
// ==========================================
console.log("\n7️⃣ Async Functions");
console.log("-".repeat(40));

// Promise-based function
function fetchData(id: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data for ID: ${id}`);
        }, 100);
    });
}

// Async/await function
async function fetchMultipleData(ids: number[]): Promise<string[]> {
    const promises = ids.map(id => fetchData(id));
    return Promise.all(promises);
}

// Async function with error handling
async function safelyFetchData(id: number): Promise<{ data?: string; error?: string }> {
    try {
        const data = await fetchData(id);
        return { data };
    } catch (error) {
        return { error: error instanceof Error ? error.message : "Unknown error" };
    }
}

// Using async functions
async function demonstrateAsync() {
    console.log("🚀 Starting async operations...");
    
    const singleData = await fetchData(1);
    console.log("📡 Single data:", singleData);
    
    const multipleData = await fetchMultipleData([1, 2, 3]);
    console.log("📡 Multiple data:", multipleData);
    
    const safeData = await safelyFetchData(4);
    console.log("🛡️ Safe data:", safeData);
}

// Run async demonstration
demonstrateAsync();

// ==========================================
// 8. Function Types และ Interfaces
// ==========================================
console.log("\n8️⃣ Function Types และ Interfaces");
console.log("-".repeat(40));

// Function type aliases
type MathOperation = (a: number, b: number) => number;
type StringProcessor = (input: string) => string;

const mathAdd: MathOperation = (a, b) => a + b;
const mathSubtract: MathOperation = (a, b) => a - b;

const uppercase: StringProcessor = (input) => input.toUpperCase();
const reverse: StringProcessor = (input) => input.split("").reverse().join("");

console.log("🧮 Math add:", mathAdd(10, 5));
console.log("🧮 Math subtract:", mathSubtract(10, 5));
console.log("🔤 Uppercase:", uppercase("hello"));
console.log("🔤 Reverse:", reverse("hello"));

// Interface with function signatures
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 0
};

console.log("🧮 Calculator add:", calculator.add(20, 10));
console.log("🧮 Calculator divide:", calculator.divide(20, 4));

// Callable interface
interface Greeter {
    (name: string): string;
    language: string;
}

function createGreeter(lang: string): Greeter {
    const greeter = ((name: string) => {
        return lang === "th" ? `สวัสดี ${name}` : `Hello ${name}`;
    }) as Greeter;
    
    greeter.language = lang;
    return greeter;
}

const thaiGreeter = createGreeter("th");
const englishGreeter = createGreeter("en");

console.log("🇹🇭 Thai greeter:", thaiGreeter("สมชาย"));
console.log("🇺🇸 English greeter:", englishGreeter("John"));
console.log("🇹🇭 Language:", thaiGreeter.language);

// ==========================================
// 9. Decorator Pattern (Functions)
// ==========================================
console.log("\n9️⃣ Decorator Pattern");
console.log("-".repeat(40));

// Function decorator for logging
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
    return ((...args: any[]) => {
        console.log(`🔍 Calling ${fn.name} with args:`, args);
        const result = fn(...args);
        console.log(`🔍 ${fn.name} returned:`, result);
        return result;
    }) as T;
}

// Function decorator for timing
function withTiming<T extends (...args: any[]) => any>(fn: T): T {
    return ((...args: any[]) => {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        console.log(`⏱️ ${fn.name} took ${(end - start).toFixed(2)}ms`);
        return result;
    }) as T;
}

// Original function
function slowCalculation(n: number): number {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    return result;
}

// Decorated functions
const loggedCalculation = withLogging(slowCalculation);
const timedCalculation = withTiming(slowCalculation);

console.log("📝 Logged calculation:");
loggedCalculation(100);

console.log("\n⏱️ Timed calculation:");
timedCalculation(1000);

// ==========================================
// 10. Function Best Practices
// ==========================================
console.log("\n🔟 Function Best Practices");
console.log("-".repeat(40));

console.log("📋 Function Best Practices:");

// ✅ ดี: Pure functions
function pure(a: number, b: number): number {
    return a + b; // ไม่มี side effects, output เดียวกันสำหรับ input เดียวกัน
}

// ✅ ดี: Single responsibility
function validateEmail(email: string): boolean {
    return email.includes("@") && email.includes(".");
}

function sendEmail(to: string, subject: string, body: string): Promise<boolean> {
    // ส่ง email จริง
    return Promise.resolve(true);
}

// ✅ ดี: Descriptive names
function calculateMonthlyPayment(principal: number, rate: number, years: number): number {
    const monthlyRate = rate / 12;
    const numberOfPayments = years * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
}

// ✅ ดี: Error handling
function safeDivide(a: number, b: number): number | never {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// ✅ ดี: Type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: unknown): string {
    if (isString(value)) {
        return value.toUpperCase(); // TypeScript รู้ว่า value เป็น string
    }
    return String(value);
}

console.log("✅ Pure function:", pure(5, 3));
console.log("✅ Email validation:", validateEmail("test@example.com"));
console.log("✅ Monthly payment:", calculateMonthlyPayment(100000, 0.05, 30).toFixed(2));
console.log("✅ Safe divide:", safeDivide(10, 2));
console.log("✅ Process value:", processValue("hello"));
console.log("✅ Process value (number):", processValue(123));

// ==========================================
// 11. Performance Optimization
// ==========================================
console.log("\n1️⃣1️⃣ Performance Optimization");
console.log("-".repeat(40));

// Memoization
function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map();
    
    return ((...args: any[]) => {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log("📋 Cache hit for:", key);
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        console.log("💾 Cached result for:", key);
        return result;
    }) as T;
}

// Expensive function
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log("🐌 First call:", memoizedFibonacci(10));
console.log("⚡ Second call:", memoizedFibonacci(10)); // จาก cache

// Debouncing
function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
    let timeoutId: NodeJS.Timeout;
    
    return ((...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    }) as T;
}

const expensiveOperation = (query: string) => {
    console.log("🔍 Searching for:", query);
};

const debouncedSearch = debounce(expensiveOperation, 300);

// จะเรียกครั้งเดียวหลังจาก 300ms
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");

// ==========================================
// สรุปบทเรียน
// ==========================================
setTimeout(() => {
    console.log("\n📚 สรุปบทที่ 8 - Functions:");
    console.log("🎯 Function declarations, expressions, และ arrow functions");
    console.log("🎯 Optional parameters, default values, และ rest parameters");
    console.log("🎯 Function overloading และ generic functions");
    console.log("🎯 Higher-order functions และ function composition");
    console.log("🎯 Async/await functions และ Promise handling");
    console.log("🎯 Function types, interfaces, และ callable objects");
    console.log("🎯 Decorator pattern และ function enhancement");
    console.log("🎯 Best practices: pure functions, single responsibility, error handling");
    console.log("🎯 Performance: memoization, debouncing, และ optimization techniques");
}, 500);

export { };
