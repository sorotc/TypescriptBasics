/**
 * บทที่ 1: TypeScript Basics
 * พื้นฐาน TypeScript สำหรับมือใหม่
 */

console.log("🎯 บทที่ 1: TypeScript Basics");
console.log("=" .repeat(50));

// ==========================================
// 1. Basic Types ประเภทข้อมูลพื้นฐาน
// ==========================================
console.log("\n1️⃣ Basic Types (ประเภทข้อมูลพื้นฐาน)");
console.log("-".repeat(40));

// String
const studentName: string = "สมชาย";
const greeting: string = `สวัสดี ${studentName}`;
console.log("📝 String:", greeting);

// Number
const age: number = 25;
const pi: number = 3.14159;
const hexValue: number = 0xff;
console.log("🔢 Number:", { age, pi, hexValue });

// Boolean
const isStudent: boolean = true;
const hasGraduated: boolean = false;
console.log("✅ Boolean:", { isStudent, hasGraduated });

// ==========================================
// 2. Arrays อาร์เรย์
// ==========================================
console.log("\n2️⃣ Arrays (อาร์เรย์)");
console.log("-".repeat(40));

// Array ลักษณะที่ 1
const fruits: string[] = ["แอปเปิ้ล", "กล้วย", "ส้ม"];
console.log("🍎 fruits:", fruits);

// Array ลักษณะที่ 2
const numbers: Array<number> = [1, 2, 3, 4, 5];
console.log("📊 numbers:", numbers);

// Mixed array with union types
const mixedData: (string | number)[] = ["John", 25, "Thailand", 2024];
console.log("🔀 mixedData:", mixedData);

// ==========================================
// 3. Objects วัตถุ
// ==========================================
console.log("\n3️⃣ Objects (วัตถุ)");
console.log("-".repeat(40));

// Object literal
const person: { name: string; age: number; isEmployed: boolean } = {
    name: "สมศรี",
    age: 28,
    isEmployed: true
};
console.log("👤 person:", person);

// Interface (แนะนำให้ใช้สำหรับ objects ที่ซับซ้อน)
interface Student {
    id: number;
    name: string;
    major: string;
    gpa?: number; // Optional property
}

const student1: Student = {
    id: 1,
    name: "นางสาวมาลี",
    major: "Computer Science",
    gpa: 3.75
};
console.log("🎓 student1:", student1);

// ==========================================
// 4. Functions ฟังก์ชัน
// ==========================================
console.log("\n4️⃣ Functions (ฟังก์ชัน)");
console.log("-".repeat(40));

// Function declaration
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Arrow function
const multiplyNumbers = (a: number, b: number): number => a * b;

// Function with optional parameter
function greetPerson(name: string, title?: string): string {
    return title ? `สวัสดี ${title}${name}` : `สวัสดี ${name}`;
}

// Function with default parameter
function calculateTotal(price: number, tax: number = 0.07): number {
    return price + (price * tax);
}

console.log("➕ addNumbers(5, 3):", addNumbers(5, 3));
console.log("✖️ multiplyNumbers(4, 6):", multiplyNumbers(4, 6));
console.log("👋 greetPerson('สมชาย'):", greetPerson("สมชาย"));
console.log("👋 greetPerson('สมชาย', 'คุณ'):", greetPerson("สมชาย", "คุณ"));
console.log("💰 calculateTotal(100):", calculateTotal(100));
console.log("💰 calculateTotal(100, 0.1):", calculateTotal(100, 0.1));

// ==========================================
// 5. Type Annotations และ Type Inference
// ==========================================
console.log("\n5️⃣ Type Annotations vs Type Inference");
console.log("-".repeat(40));

// Type Annotation (ระบุ type เอง)
const explicitNumber: number = 42;
const explicitString: string = "Hello TypeScript";

// Type Inference (TypeScript หา type ให้เอง)
const inferredNumber = 42; // TypeScript รู้ว่าเป็น number
const inferredString = "Hello TypeScript"; // TypeScript รู้ว่าเป็น string

console.log("📝 Type annotations ช่วยให้โค้ดชัดเจนขึ้น");
console.log("🤖 Type inference ทำให้เขียนโค้ดได้รวดเร็วขึ้น");

// ==========================================
// 6. Union Types และ Literal Types
// ==========================================
console.log("\n6️⃣ Union Types และ Literal Types");
console.log("-".repeat(40));

// Union types
let id: string | number;
id = "ABC123";
console.log("🆔 id as string:", id);
id = 12345;
console.log("🆔 id as number:", id);

// Literal types
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";
console.log("📋 orderStatus:", orderStatus);

// ==========================================
// 7. Any, Unknown, และ Never
// ==========================================
console.log("\n7️⃣ Any, Unknown, และ Never");
console.log("-".repeat(40));

// any - หลีกเลี่ยงการใช้เว้นแต่จำเป็น
let anyValue: any = "อะไรก็ได้";
anyValue = 123;
anyValue = true;
console.log("⚠️ any type (ไม่แนะนำ):", anyValue);

// unknown - ปลอดภัยกว่า any
let unknownValue: unknown = "ไม่รู้ type";
if (typeof unknownValue === "string") {
    console.log("✅ unknown type (ปลอดภัย):", unknownValue.toUpperCase());
}

// never - สำหรับฟังก์ชันที่ไม่เคย return
function throwError(message: string): never {
    throw new Error(message);
}

// ==========================================
// 8. Type Assertions
// ==========================================
console.log("\n8️⃣ Type Assertions");
console.log("-".repeat(40));

let someValue: unknown = "Hello TypeScript";

// Type assertion แบบที่ 1
let strLength1: number = (someValue as string).length;

// Type assertion แบบที่ 2 (ไม่แนะนำใน JSX)
let strLength2: number = (<string>someValue).length;

console.log("📏 String length:", strLength1);

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 1:");
console.log("✅ เรียนรู้ประเภทข้อมูลพื้นฐาน (string, number, boolean)");
console.log("✅ เรียนรู้ Arrays และ Objects");
console.log("✅ เรียนรู้การประกาศ Functions");
console.log("✅ เรียนรู้ Type Annotations และ Type Inference");
console.log("✅ เรียนรู้ Union Types และ Literal Types");
console.log("✅ เรียนรู้ Any, Unknown, Never และ Type Assertions");

export { };
