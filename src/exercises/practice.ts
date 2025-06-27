/**
 * แบบฝึกหัด TypeScript และ Variable Scope
 * ลองแก้ไขและทดลองโค้ดเหล่านี้
 */

console.log("🔧 แบบฝึกหัด TypeScript และ Variable Scope");
console.log("=" .repeat(50));

// ==========================================
// แบบฝึกหัดที่ 1: TypeScript Basic Types
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 1: ประกาศตัวแปรด้วย TypeScript");
console.log("-".repeat(40));

// TODO: ประกาศตัวแปรตามที่กำหนด
// 1. ประกาศตัวแปร studentName ชนิด string เก็บชื่อนักเรียน
// 2. ประกาศตัวแปร studentAge ชนิด number เก็บอายุ
// 3. ประกาศตัวแปร isGraduated ชนิด boolean เก็บสถานะจบการศึกษา
// 4. ประกาศ array subjects ชนิด string[] เก็บรายวิชาที่เรียน

// ✅ คำตอบ:
const studentName: string = "สมชาย";
const studentAge: number = 20;
const isGraduated: boolean = false;
const subjects: string[] = ["คณิตศาสตร์", "วิทยาศาสตร์", "ภาษาอังกฤษ"];

console.log(`นักเรียน: ${studentName}, อายุ: ${studentAge}, จบการศึกษาแล้ว: ${isGraduated}`);
console.log("วิชาที่เรียน:", subjects.join(", "));

// ==========================================
// แบบฝึกหัดที่ 2: Object และ Interface
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 2: สร้าง Interface และ Object");
console.log("-".repeat(40));

// TODO: สร้าง interface และ object
// 1. สร้าง interface Car ที่มี properties: brand, model, year, isElectric
// 2. สร้าง object myCar ที่ implement interface Car
// 3. สร้าง function describeCar ที่รับ parameter เป็น Car และ return string

// ✅ คำตอบ:
interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Prius",
    year: 2023,
    isElectric: true
};

function describeCar(car: Car): string {
    const electricText = car.isElectric ? "รถไฟฟ้า" : "รถเครื่องยนต์";
    return `${car.brand} ${car.model} ปี ${car.year} (${electricText})`;
}

console.log("รถของฉัน:", describeCar(myCar));

// ==========================================
// แบบฝึกหัดที่ 3: var vs let vs const
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 3: ทดลอง var vs let vs const");
console.log("-".repeat(40));

// TODO: วิเคราะห์และแก้ไขปัญหาต่อไปนี้

// 🔴 ปัญหาที่ 1: var ใน loop
console.log("🔴 ปัญหา var ใน loop:");
const varFunctions: (() => number)[] = [];

for (var i = 0; i < 3; i++) {
    varFunctions.push(function() {
        return i; // ปัญหา: i จะเป็น 3 ทุกตัว
    });
}

varFunctions.forEach((fn, index) => {
    console.log(`  Function ${index} returns:`, fn());
});

// ✅ แก้ไขด้วย let:
console.log("\n✅ แก้ไขด้วย let:");
const letFunctions: (() => number)[] = [];

for (let j = 0; j < 3; j++) {
    letFunctions.push(function() {
        return j; // ถูกต้อง: j มี block scope
    });
}

letFunctions.forEach((fn, index) => {
    console.log(`  Function ${index} returns:`, fn());
});

// ==========================================
// แบบฝึกหัดที่ 4: Destructuring
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 4: Destructuring");
console.log("-".repeat(40));

// TODO: ใช้ destructuring แทน dot notation

const userProfile = {
    personal: {
        name: "สมศรี",
        age: 25
    },
    contact: {
        email: "somsri@example.com",
        phone: "086-123-4567"
    },
    preferences: {
        language: "th",
        theme: "dark"
    }
};

// ❌ แบบเก่า:
// const name = userProfile.personal.name;
// const email = userProfile.contact.email;
// const language = userProfile.preferences.language;

// ✅ แบบใหม่ - Destructuring:
const { 
    personal: { name, age },
    contact: { email },
    preferences: { language }
} = userProfile;

console.log("ข้อมูลผู้ใช้:", { name, age, email, language });

// ==========================================
// แบบฝึกหัดที่ 5: Template Literals
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 5: Template Literals");
console.log("-".repeat(40));

// TODO: แปลงจาก string concatenation เป็น template literals

const productName = "Laptop";
const price = 25000;
const discountPercent = 10;
const discountAmount = price * (discountPercent / 100);
const finalPrice = price - discountAmount;

// ❌ แบบเก่า:
// const message = "สินค้า: " + productName + "\n" +
//                "ราคาเดิม: " + price + " บาท\n" +
//                "ส่วนลด: " + discountPercent + "% (-" + discountAmount + " บาท)\n" +
//                "ราคาสุดท้าย: " + finalPrice + " บาท";

// ✅ แบบใหม่ - Template Literals:
const message = `สินค้า: ${productName}
ราคาเดิม: ${price} บาท
ส่วนลด: ${discountPercent}% (-${discountAmount} บาท)
ราคาสุดท้าย: ${finalPrice} บาท`;

console.log("ใบเสนอราคา:");
console.log(message);

// ==========================================
// แบบฝึกหัดที่ 6: Functions
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 6: Functions");
console.log("-".repeat(40));

// TODO: สร้าง functions ตามข้อกำหนด

// 1. Function คำนวณ BMI
function calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
}

// 2. Function แปลผล BMI
function interpretBMI(bmi: number): string {
    if (bmi < 18.5) return "น้ำหนักน้อย";
    if (bmi < 25) return "น้ำหนักปกติ";
    if (bmi < 30) return "น้ำหนักเกิน";
    return "อ้วน";
}

// 3. Arrow function รวมการคำนวณและแปลผล
const getBMIResult = (weight: number, height: number): string => {
    const bmi = calculateBMI(weight, height);
    const interpretation = interpretBMI(bmi);
    return `BMI: ${bmi.toFixed(1)} (${interpretation})`;
};

// ทดสอบ functions
const testWeight = 65;
const testHeight = 1.70;

console.log("การคำนวณ BMI:");
console.log(`น้ำหนัก: ${testWeight} กก., ส่วนสูง: ${testHeight} ม.`);
console.log(`ผลลัพธ์: ${getBMIResult(testWeight, testHeight)}`);

// ==========================================
// แบบฝึกหัดที่ 7: Generic Functions
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 7: Generic Functions");
console.log("-".repeat(40));

// TODO: สร้าง generic functions

// 1. Generic function สำหรับหาค่าที่ไม่ซ้ำใน array
function getUniqueItems<T>(items: T[]): T[] {
    return [...new Set(items)];
}

// 2. Generic function สำหรับ filter ด้วย predicate
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

// 3. Generic function สำหรับ group by key
function groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> {
    return items.reduce((groups, item) => {
        const groupKey = String(item[key]);
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
    }, {} as Record<string, T[]>);
}

// ทดสอบ generic functions
const numbers = [1, 2, 2, 3, 3, 4, 5];
const uniqueNumbers = getUniqueItems(numbers);
console.log("เลขที่ไม่ซ้ำ:", uniqueNumbers);

const words = ["apple", "banana", "apricot", "blueberry"];
const wordsStartingWithA = filterItems(words, word => word.startsWith("a"));
console.log("คำที่ขึ้นต้นด้วย 'a':", wordsStartingWithA);

interface Person {
    name: string;
    age: number;
    city: string;
}

const people: Person[] = [
    { name: "สมชาย", age: 25, city: "กรุงเทพ" },
    { name: "สมหญิง", age: 30, city: "เชียงใหม่" },
    { name: "อารีย์", age: 25, city: "กรุงเทพ" }
];

const groupedByAge = groupBy(people, "age");
console.log("จัดกลุ่มตามอายุ:", groupedByAge);

// ==========================================
// แบบฝึกหัดที่ 8: Async/Await
// ==========================================
console.log("\n📝 แบบฝึกหัดที่ 8: Async/Await");
console.log("-".repeat(40));

// TODO: สร้าง async functions

// 1. Mock API function
function mockApiCall(data: string, delay: number = 1000): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(`API Response: ${data}`);
            } else {
                reject(new Error("No data provided"));
            }
        }, delay);
    });
}

// 2. Async function ที่เรียก API หลายครั้ง
async function fetchMultipleData(): Promise<void> {
    try {
        console.log("🚀 เริ่มเรียก API...");
        
        const results = await Promise.all([
            mockApiCall("User data", 500),
            mockApiCall("Product data", 300),
            mockApiCall("Order data", 700)
        ]);
        
        results.forEach((result, index) => {
            console.log(`📡 ผลลัพธ์ ${index + 1}:`, result);
        });
        
    } catch (error) {
        console.error("❌ Error:", error);
    }
}

// 3. Async function ที่เรียก API ตามลำดับ
async function fetchSequentialData(): Promise<void> {
    try {
        console.log("🔄 เรียก API ตามลำดับ...");
        
        const user = await mockApiCall("User", 200);
        console.log("👤", user);
        
        const profile = await mockApiCall("Profile", 200);
        console.log("📋", profile);
        
        const settings = await mockApiCall("Settings", 200);
        console.log("⚙️", settings);
        
    } catch (error) {
        console.error("❌ Error:", error);
    }
}

// รัน async functions
fetchMultipleData();

setTimeout(() => {
    fetchSequentialData();
}, 2000);

// ==========================================
// แบบฝึกหัดท้าทาย
// ==========================================
console.log("\n📝 แบบฝึกหัดท้าทาย: สร้าง Task Manager");
console.log("-".repeat(40));

// TODO: สร้าง Task Manager class พร้อม features ต่างๆ

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate?: Date;
}

class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    // เพิ่ม task ใหม่
    addTask(title: string, description: string, priority: Task["priority"] = "medium", dueDate?: Date): Task {
        const task: Task = {
            id: this.nextId++,
            title,
            description,
            completed: false,
            priority,
            dueDate
        };
        this.tasks.push(task);
        return task;
    }

    // ทำ task เสร็จ
    completeTask(id: number): boolean {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    // ลบ task
    deleteTask(id: number): boolean {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    // แสดง tasks ทั้งหมด
    getAllTasks(): Task[] {
        return [...this.tasks];
    }

    // กรอง tasks ตามสถานะ
    getTasksByStatus(completed: boolean): Task[] {
        return this.tasks.filter(task => task.completed === completed);
    }

    // กรอง tasks ตาม priority
    getTasksByPriority(priority: Task["priority"]): Task[] {
        return this.tasks.filter(task => task.priority === priority);
    }

    // สถิติ tasks
    getStats(): { total: number; completed: number; pending: number } {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        return { total, completed, pending };
    }
}

// ทดสอบ TaskManager
const taskManager = new TaskManager();

// เพิ่ม tasks
taskManager.addTask("เรียน TypeScript", "ศึกษา TypeScript basics และ variable scope", "high");
taskManager.addTask("ทำแบบฝึกหัด", "ทำแบบฝึกหัดทั้งหมดให้เสร็จ", "medium");
taskManager.addTask("Review code", "ตรวจสอบโค้ดที่เขียน", "low");

// แสดงสถิติ
console.log("📊 สถิติ tasks:", taskManager.getStats());

// ทำ task เสร็จ
taskManager.completeTask(1);

// แสดง tasks ที่ยังไม่เสร็จ
const pendingTasks = taskManager.getTasksByStatus(false);
console.log("📋 Tasks ที่ยังไม่เสร็จ:");
pendingTasks.forEach(task => {
    console.log(`  ${task.id}. ${task.title} (${task.priority})`);
});

// แสดงสถิติสุดท้าย
console.log("📊 สถิติสุดท้าย:", taskManager.getStats());

// ==========================================
// สรุปแบบฝึกหัด
// ==========================================
setTimeout(() => {
    console.log("\n🎉 สรุปแบบฝึกหัด:");
    console.log("✅ TypeScript Basic Types - การประกาศตัวแปรด้วย type annotations");
    console.log("✅ Object และ Interface - การสร้างและใช้งาน interfaces");
    console.log("✅ var vs let vs const - ความแตกต่างและปัญหาของ var");
    console.log("✅ Destructuring - การแยกค่าจาก objects และ arrays");
    console.log("✅ Template Literals - การสร้าง strings แบบใหม่");
    console.log("✅ Functions - การสร้างและใช้งาน functions");
    console.log("✅ Generic Functions - การสร้าง reusable functions");
    console.log("✅ Async/Await - การจัดการ asynchronous operations");
    console.log("✅ Class และ Advanced Patterns - การประยุกต์ใช้ความรู้");
    
    console.log("\n💡 ข้อแนะนำสำหรับการพัฒนาต่อ:");
    console.log("1. ฝึกเขียน TypeScript แบบ strict mode");
    console.log("2. ใช้ ESLint และ Prettier ในโปรเจค");
    console.log("3. เรียนรู้ design patterns และ SOLID principles");
    console.log("4. ฝึกเขียน unit tests ด้วย Jest หรือ Vitest");
    console.log("5. ศึกษา advanced TypeScript features เช่น mapped types, conditional types");
}, 3000);

export { };

// TODO: ทำนายผลลัพธ์ก่อนรันโค้ด แล้วลบ comment เพื่อดูผลจริง

// ตัวอย่างที่ 1: var ใน loop
/*
console.log("ตัวอย่างที่ 1 - var ใน loop:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(`var: ${i}`), 10);
}
*/

// ตัวอย่างที่ 2: let ใน loop
/*
console.log("ตัวอย่างที่ 2 - let ใน loop:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(`let: ${j}`), 50);
}
*/

// ตัวอย่างที่ 3: const กับ object
/*
console.log("ตัวอย่างที่ 3 - const กับ object:");
const person = { name: "สมชาย", age: 25 };
person.age = 26; // จะเกิดอะไรขึ้น?
// person = { name: "สมหญิง", age: 30 }; // จะเกิดอะไรขึ้น?
console.log(person);
*/

// แบบฝึกหัดที่ 4: แก้ไขโค้ดที่มีปัญหา
console.log("\n📝 แบบฝึกหัดที่ 4: แก้ไขโค้ดให้ถูกต้อง");
console.log("-".repeat(30));

// TODO: แก้ไขโค้ดด้านล่างให้ทำงานถูกต้อง
// ปัญหา: ใช้ var ทำให้เกิดปัญหาใน closure

/*
function createCounters() {
    const counters = [];
    
    for (var i = 0; i < 3; i++) {
        counters.push(function() {
            return i; // ปัญหา: i จะเป็น 3 เสมอ
        });
    }
    
    return counters;
}

const counters = createCounters();
console.log("ผลลัพธ์ปัจจุบัน:");
counters.forEach((counter, index) => {
    console.log(`Counter ${index}: ${counter()}`);
});
*/

// TODO: แก้ไขโดยเปลี่ยนจาก var เป็น let
// หรือใช้วิธีอื่นๆ เช่น IIFE, bind, etc.

// แบบฝึกหัดที่ 5: Best Practices
console.log("\n📝 แบบฝึกหัดที่ 5: ปรับปรุงโค้ดให้เป็น Best Practices");
console.log("-".repeat(30));

// TODO: ปรับปรุงโค้ดด้านล่างให้เป็น best practices
// 1. เปลี่ยนจาก var เป็น let/const
// 2. เพิ่ม type annotations
// 3. ใช้ interface สำหรับ objects

/*
// โค้ดเดิม (ไม่ดี)
var userName = "สมชาย";
var userAge = 25;
var userEmail = "somchai@email.com";
var userAddress = {
    street: "123 ถนนสุขุมวิท",
    city: "กรุงเทพ",
    zipCode: "10110"
};

function displayUser() {
    var message = "ข้อมูลผู้ใช้: " + userName + ", อายุ: " + userAge;
    return message;
}

// TODO: ปรับปรุงเป็น best practices
*/

// แบบฝึกหัดที่ 6: สร้าง Mini Project
console.log("\n📝 แบบฝึกหัดที่ 6: Mini Project - ระบบจัดการนักเรียน");
console.log("-".repeat(30));

// TODO: สร้าง mini project ระบบจัดการนักเรียน
// 1. สร้าง interface Student
// 2. สร้าง class StudentManager
// 3. สร้าง methods: addStudent, removeStudent, getStudent, getAllStudents
// 4. ใช้ const/let อย่างเหมาะสม
// 5. เพิ่ม type safety

/*
// ตัวอย่างโครงสร้าง:
interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
    subjects: string[];
}

class StudentManager {
    // TODO: implement
}

// Usage example:
const manager = new StudentManager();
manager.addStudent({
    id: 1,
    name: "สมชาย",
    age: 16,
    grade: "ม.4",
    subjects: ["คณิตศาสตร์", "ฟิสิกส์", "เคมี"]
});
*/

console.log("\n💡 เคล็ดลับในการทำแบบฝึกหัด:");
console.log("1. ลองทำนายผลลัพธ์ก่อนรันโค้ด");
console.log("2. ใช้ console.log เพื่อดู intermediate results");
console.log("3. ทดลองเปลี่ยนแปลงโค้ดและดูผลลัพธ์");
console.log("4. ใช้ TypeScript compiler เพื่อตรวจสอบ errors");
console.log("5. อ่าน error messages อย่างละเอียด");

export { };
