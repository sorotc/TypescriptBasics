/**
 * บทที่ 4: Variable Scope - const
 * เรียนรู้ const และการใช้งานอย่างถูกต้อง
 */

console.log("🎯 บทที่ 4: Variable Scope - const");
console.log("=" .repeat(50));

// ==========================================
// 1. Block Scope ของ const
// ==========================================
console.log("\n1️⃣ Block Scope ของ const");
console.log("-".repeat(40));

function constScopeExample() {
    const functionScoped = "ฉันอยู่ใน function scope";
    
    if (true) {
        const blockScoped = "ฉันอยู่ใน block scope";
        console.log("🔍 ใน if block:", blockScoped);
        console.log("🔍 ใน if block (function var):", functionScoped);
    }
    
    // ❌ blockScoped ใช้ไม่ได้นอก block
    console.log("🔍 นอก if block (function var):", functionScoped);
    console.log("❌ blockScoped ใช้ไม่ได้นอก block (เหมือน let)");
}

constScopeExample();

// ==========================================
// 2. ต้องมีค่าเริ่มต้น (Initialization Required)
// ==========================================
console.log("\n2️⃣ ต้องมีค่าเริ่มต้น");
console.log("-".repeat(40));

// ✅ ถูกต้อง - มีค่าเริ่มต้น
const validConst = "ฉันมีค่าเริ่มต้น";
console.log("✅ const ที่ถูกต้อง:", validConst);

// ❌ ผิด - ไม่มีค่าเริ่มต้น
// const invalidConst; // SyntaxError: Missing initializer in const declaration
console.log("❌ const ต้องมีค่าเริ่มต้นเสมอ");

// ==========================================
// 3. ไม่สามารถ Reassign ได้
// ==========================================
console.log("\n3️⃣ ไม่สามารถ Reassign ได้");
console.log("-".repeat(40));

const constantValue = "ค่าคงที่";
console.log("🔒 ค่าเริ่มต้น:", constantValue);

// ❌ ไม่สามารถ reassign ได้
// constantValue = "ค่าใหม่"; // TypeError: Assignment to constant variable
console.log("❌ ไม่สามารถ reassign const ได้");

// ==========================================
// 4. Object และ Array ที่เป็น const
// ==========================================
console.log("\n4️⃣ Object และ Array ที่เป็น const");
console.log("-".repeat(40));

// const กับ Object
const constObject: { name: string; age: number; hobbies: string[]; city?: string } = {
    name: "สมชาย",
    age: 25,
    hobbies: ["อ่านหนังสือ", "เขียนโค้ด"]
};

console.log("🏗️ Object เริ่มต้น:", constObject);

// ✅ สามารถเปลี่ยน properties ได้
constObject.age = 26;
constObject.city = "กรุงเทพฯ";
console.log("✅ เปลี่ยน properties ได้:", constObject);

// ✅ สามารถเปลี่ยน array elements ได้
constObject.hobbies.push("เล่นกีตาร์");
console.log("✅ เปลี่ยน array elements ได้:", constObject);

// ❌ ไม่สามารถ reassign object ได้
// constObject = {}; // TypeError

// const กับ Array
const constArray = [1, 2, 3];
console.log("\n📊 Array เริ่มต้น:", constArray);

// ✅ สามารถเปลี่ยน elements ได้
constArray.push(4);
constArray[0] = 10;
console.log("✅ เปลี่ยน elements ได้:", constArray);

// ❌ ไม่สามารถ reassign array ได้
// constArray = []; // TypeError

// ==========================================
// 5. Immutability เต็มรูปแบบ
// ==========================================
console.log("\n5️⃣ Immutability เต็มรูปแบบ");
console.log("-".repeat(40));

// Object.freeze() สำหรับ shallow immutability
const frozenObject = Object.freeze({
    name: "ไม่เปลี่ยนแปลง",
    count: 42
});

console.log("🧊 Frozen object:", frozenObject);

// ❌ ไม่สามารถเปลี่ยน properties ได้
try {
    // frozenObject.name = "เปลี่ยนไม่ได้"; // Error ใน strict mode
    // frozenObject.newProp = "ใหม่"; // Error ใน strict mode
    console.log("❌ Object.freeze() ป้องกันการเปลี่ยนแปลง properties");
} catch (error: any) {
    console.log("Error:", error.message);
}

// Deep freeze function
function deepFreeze<T>(obj: T): T {
    Object.getOwnPropertyNames(obj).forEach(function(prop) {
        if ((obj as any)[prop] !== null && typeof (obj as any)[prop] === "object") {
            deepFreeze((obj as any)[prop]);
        }
    });
    return Object.freeze(obj);
}

const deepFrozenObject = deepFreeze({
    user: {
        name: "ผู้ใช้",
        preferences: {
            theme: "dark",
            language: "th"
        }
    }
});

console.log("🧊 Deep frozen object:", deepFrozenObject);

// ==========================================
// 6. const ใน Loop
// ==========================================
console.log("\n6️⃣ const ใน Loop");
console.log("-".repeat(40));

// ✅ const ใน for...of loop
const items = ["item1", "item2", "item3"];
console.log("🔄 const ใน for...of:");
for (const item of items) {
    console.log(`  ${item}`);
    // const item จะถูกสร้างใหม่ในแต่ละรอบ
}

// ✅ const ใน forEach
console.log("\n🔄 const ใน forEach:");
items.forEach((item, index) => {
    const processedItem = `[${index}] ${item.toUpperCase()}`;
    console.log(`  ${processedItem}`);
});

// ❌ const ใน traditional for loop (ไม่เหมาะ)
console.log("\n❌ const ไม่เหมาะกับ traditional for loop:");
console.log("   เพราะ counter ต้อง reassign");

// ใช้ let แทน
for (let i = 0; i < 3; i++) {
    const message = `รอบที่ ${i + 1}`;
    console.log(`  ${message}`);
}

// ==========================================
// 7. Function Declarations และ const
// ==========================================
console.log("\n7️⃣ Function Declarations และ const");
console.log("-".repeat(40));

// const กับ arrow functions
const constArrowFunction = (name: string) => {
    return `สวัสดี ${name} จาก const arrow function`;
};

// const กับ function expressions
const constFunctionExpression = function(name: string) {
    return `สวัสดี ${name} จาก const function expression`;
};

console.log("🔧", constArrowFunction("สมชาย"));
console.log("🔧", constFunctionExpression("สมหญิง"));

// ❌ ไม่สามารถ reassign functions ได้
// constArrowFunction = () => {}; // TypeError

// ==========================================
// 8. const กับ Module Exports
// ==========================================
console.log("\n8️⃣ const กับ Module Exports");
console.log("-".repeat(40));

// Configuration objects
const CONFIG = {
    API_URL: "https://api.example.com",
    TIMEOUT: 5000,
    DEBUG: true
} as const; // as const สำหรับ type-level immutability

console.log("⚙️ Configuration:", CONFIG);

// Constants
const HTTP_STATUS = {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
} as const;

console.log("📊 HTTP Status codes:", HTTP_STATUS);

// ==========================================
// 9. Temporal Dead Zone ของ const
// ==========================================
console.log("\n9️⃣ Temporal Dead Zone ของ const");
console.log("-".repeat(40));

function constTemporalDeadZone() {
    console.log("🚫 const มี Temporal Dead Zone เหมือน let");
    
    try {
        // console.log("ก่อน declare:", temporalConst); // ReferenceError
        console.log("❌ ไม่สามารถใช้ const ก่อน declare");
    } catch (error: any) {
        console.log("Error: ไม่สามารถเข้าถึงตัวแปรก่อน declare");
    }
    
    const temporalConst = "ฉันถูก declare แล้ว";
    console.log("✅ หลัง declare:", temporalConst);
}

constTemporalDeadZone();

// ==========================================
// 10. Performance Benefits
// ==========================================
console.log("\n🔟 Performance Benefits");
console.log("-".repeat(40));

function performanceExample() {
    console.log("⚡ Performance benefits ของ const:");
    
    // JavaScript engine สามารถ optimize ได้ดีกว่า
    const MULTIPLIER = 10;
    const results: number[] = [];
    
    for (let i = 0; i < 5; i++) {
        // Engine รู้ว่า MULTIPLIER ไม่เปลี่ยน
        results.push(i * MULTIPLIER);
    }
    
    console.log("  ผลลัพธ์:", results);
    console.log("✅ Engine optimize const ได้ดีกว่า let/var");
    console.log("✅ ลด memory allocation");
    console.log("✅ เพิ่มความเร็วในการ execute");
}

performanceExample();

// ==========================================
// 11. Best Practices กับ const
// ==========================================
console.log("\n1️⃣1️⃣ Best Practices กับ const");
console.log("-".repeat(40));

console.log("📋 Best Practices สำหรับ const:");
console.log("✅ ใช้ const เป็นค่าเริ่มต้นเสมอ");
console.log("✅ เปลี่ยนเป็น let เมื่อต้องการ reassign");
console.log("✅ ใช้ UPPER_CASE สำหรับ constants ที่เป็น primitive");
console.log("✅ ใช้ Object.freeze() เมื่อต้องการ immutability");
console.log("✅ ใช้ as const สำหรับ type-level immutability");
console.log("✅ ใช้ const กับ functions และ objects");

// ตัวอย่าง Best Practices
function bestPracticesExample() {
    console.log("\n💡 ตัวอย่าง Best Practices:");
    
    // ดี: ใช้ const สำหรับค่าที่ไม่เปลี่ยน
    const PI = 3.14159;
    const APP_NAME = "My Application";
    
    // ดี: ใช้ const กับ objects
    const user = {
        id: 1,
        name: "ผู้ใช้"
    };
    
    // ดี: ใช้ const กับ arrays
    const colors = ["แดง", "เขียว", "น้ำเงิน"];
    
    // ดี: ใช้ const กับ functions
    const calculateArea = (radius: number) => PI * radius * radius;
    
    console.log(`  ${APP_NAME}`);
    console.log(`  Area: ${calculateArea(5)}`);
    console.log(`  User: ${user.name}`);
    console.log(`  Colors: ${colors.join(", ")}`);
    
    // ดี: เปลี่ยน properties ได้แต่ไม่ reassign
    user.name = "ผู้ใช้ใหม่";
    colors.push("เหลือง");
    
    console.log(`  Updated User: ${user.name}`);
    console.log(`  Updated Colors: ${colors.join(", ")}`);
}

bestPracticesExample();

// ==========================================
// 12. Common Mistakes
// ==========================================
console.log("\n1️⃣2️⃣ Common Mistakes");
console.log("-".repeat(40));

console.log("⚠️ ข้อผิดพลาดที่พบบ่อยกับ const:");

// ผิด: คิดว่า const object เป็น immutable
console.log("❌ ผิด: คิดว่า const object ไม่เปลี่ยนแปลง");
const mutableObject = { count: 0 };
mutableObject.count++; // เปลี่ยนได้!
console.log("  Object ยังเปลี่ยนได้:", mutableObject);

// ผิด: ไม่ใส่ค่าเริ่มต้น
console.log("❌ ผิด: ไม่ใส่ค่าเริ่มต้น");
console.log("  const mustHaveValue; // SyntaxError");

// ผิด: พยายาม reassign
console.log("❌ ผิด: พยายาม reassign");
console.log("  constVariable = newValue; // TypeError");

// ถูก: ใช้ const อย่างถูกต้อง
console.log("✅ ถูก: ใช้ const อย่างถูกต้อง");
const correctUsage = "ค่าคงที่";
console.log("  const correctUsage = 'ค่าคงที่';");

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 4 - const:");
console.log("🎯 const มี block scope เหมือน let");
console.log("🎯 const ต้องมีค่าเริ่มต้นเสมอ");
console.log("🎯 const ไม่สามารถ reassign ได้");
console.log("🎯 const object/array สามารถเปลี่ยน properties/elements ได้");
console.log("🎯 const มี Temporal Dead Zone เหมือน let");
console.log("🎯 const ช่วยเพิ่มประสิทธิภาพและความปลอดภัย");
console.log("🎯 แนะนำให้ใช้ const เป็นค่าเริ่มต้น, เปลี่ยนเป็น let เมื่อจำเป็น");

export { };
