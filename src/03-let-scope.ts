/**
 * บทที่ 3: Variable Scope - let
 * เรียนรู้ let และข้อดีเหนือ var
 */

console.log("🎯 บทที่ 3: Variable Scope - let");
console.log("=" .repeat(50));

// ==========================================
// 1. Block Scope ของ let
// ==========================================
console.log("\n1️⃣ Block Scope ของ let");
console.log("-".repeat(40));

function letScopeExample() {
    let functionScoped = "ฉันอยู่ใน function scope";
    
    if (true) {
        let blockScoped = "ฉันอยู่ใน block scope";
        console.log("🔍 ใน if block:", blockScoped);
        console.log("🔍 ใน if block (function var):", functionScoped);
    }
    
    // ❌ blockScoped ใช้ไม่ได้นอก block
    console.log("🔍 นอก if block (function var):", functionScoped);
    
    try {
        // console.log("❌ นอก if block:", blockScoped); // ReferenceError
        console.log("❌ blockScoped ใช้ไม่ได้นอก block");
    } catch (error: any) {
        console.log("Error:", error.message);
    }
}

letScopeExample();

// ==========================================
// 2. Temporal Dead Zone ของ let
// ==========================================
console.log("\n2️⃣ Temporal Dead Zone ของ let");
console.log("-".repeat(40));

function temporalDeadZoneExample() {
    console.log("🚫 let มี Temporal Dead Zone");
    
    try {
        // console.log("ก่อน declare:", temporalVar); // ReferenceError
        console.log("❌ ไม่สามารถใช้ตัวแปรก่อน declare");
    } catch (error: any) {
        console.log("Error:", error.message);
    }
    
    let temporalVar = "ฉันถูก declare แล้ว";
    console.log("✅ หลัง declare:", temporalVar);
}

temporalDeadZoneExample();

// ==========================================
// 3. แก้ปัญหา Loop ด้วย let
// ==========================================
console.log("\n3️⃣ แก้ปัญหา Loop ด้วย let");
console.log("-".repeat(40));

console.log("✅ let แก้ปัญหา loop:");
const letFunctions: (() => string)[] = [];

for (let i = 0; i < 3; i++) {
    letFunctions.push(function() {
        return `let i = ${i}`;
    });
}

// ผลลัพธ์เป็นไปตามที่คาดหวัง
letFunctions.forEach((fn, index) => {
    console.log(`  Function ${index}:`, fn()); // แสดงค่าที่ถูกต้อง
});

console.log("\n💡 สาเหตุ: let i มี block scope");
console.log("   แต่ละรอบของ loop มี block scope แยกกัน");
console.log("   แต่ละ function อ้างอิงตัวแปร i ที่ต่างกัน");

// ==========================================
// 4. ไม่สามารถ Redeclare ได้
// ==========================================
console.log("\n4️⃣ ไม่สามารถ Redeclare ได้");
console.log("-".repeat(40));

let noDuplicateVar = "ค่าแรก";
console.log("🔒 ค่าแรก:", noDuplicateVar);

// ❌ let noDuplicateVar = "ค่าที่สอง"; // SyntaxError
console.log("❌ ไม่สามารถ declare ตัวแปรชื่อเดิมซ้ำได้");

// แต่สามารถ reassign ได้
noDuplicateVar = "ค่าใหม่";
console.log("✅ reassign ได้:", noDuplicateVar);

// ==========================================
// 5. ไม่สร้าง Global Properties
// ==========================================
console.log("\n5️⃣ ไม่สร้าง Global Properties");
console.log("-".repeat(40));

let globalLet = "ฉันไม่ได้สร้าง global property";
console.log("🌍 globalLet:", globalLet);
console.log("✅ let ไม่สร้าง property ใน global object");

// ==========================================
// 6. Block Scope ในกรณีต่างๆ
// ==========================================
console.log("\n6️⃣ Block Scope ในกรณีต่างๆ");
console.log("-".repeat(40));

// ใน for loop
console.log("🔄 ใน for loop:");
for (let loopVar = 1; loopVar <= 2; loopVar++) {
    console.log(`  รอบที่ ${loopVar}: loopVar = ${loopVar}`);
}
// console.log("❌ นอก loop:", loopVar); // Error

// ใน if statement
console.log("\n🔀 ใน if statement:");
if (true) {
    let ifVar = "ใน if block";
    console.log(`  ${ifVar}`);
}
// console.log("❌ นอก if:", ifVar); // Error

// ใน try-catch
console.log("\n🚨 ใน try-catch:");
try {
    let tryVar = "ใน try block";
    console.log(`  ${tryVar}`);
} catch (error) {
    let catchVar = "ใน catch block";
    console.log(`  ${catchVar}`);
}
// console.log("❌ นอก try-catch:", tryVar); // Error

// ใน switch case
console.log("\n🔀 ใน switch case:");
const switchValue = Math.random() > 0.5 ? 1 : 2;
switch (switchValue) {
    case 1: {
        let caseVar = "ใน case 1 block";
        console.log(`  ${caseVar}`);
        break;
    }
    case 2: {
        let caseVar = "ใน case 2 block"; // ชื่อเดียวกันได้เพราะ block ต่างกัน
        console.log(`  ${caseVar}`);
        break;
    }
}

// ==========================================
// 7. Event Listeners ด้วย let
// ==========================================
console.log("\n7️⃣ Event Listeners ด้วย let");
console.log("-".repeat(40));

console.log("✅ Event Listeners ทำงานถูกต้อง:");
const buttonNames = ["Button 1", "Button 2", "Button 3"];
const eventHandlers: (() => string)[] = [];

for (let k = 0; k < buttonNames.length; k++) {
    eventHandlers.push(function() {
        return `คลิก ${buttonNames[k]}`;
    });
}

eventHandlers.forEach((handler, index) => {
    console.log(`  Handler ${index}:`, handler());
});

// ==========================================
// 8. Nested Scopes
// ==========================================
console.log("\n8️⃣ Nested Scopes");
console.log("-".repeat(40));

function nestedScopeExample() {
    let outerVar = "outer scope";
    console.log("🔍 Outer scope:", outerVar);
    
    if (true) {
        let middleVar = "middle scope";
        console.log("🔍 Middle scope:", middleVar);
        console.log("🔍 Middle scope (outer):", outerVar);
        
        if (true) {
            let innerVar = "inner scope";
            console.log("🔍 Inner scope:", innerVar);
            console.log("🔍 Inner scope (middle):", middleVar);
            console.log("🔍 Inner scope (outer):", outerVar);
        }
        
        // console.log("❌ innerVar ใช้ไม่ได้:", innerVar); // Error
    }
    
    // console.log("❌ middleVar ใช้ไม่ได้:", middleVar); // Error
}

nestedScopeExample();

// ==========================================
// 9. Async/Await และ let
// ==========================================
console.log("\n9️⃣ Async/Await และ let");
console.log("-".repeat(40));

async function asyncLetExample() {
    console.log("🚀 Async operations ด้วย let:");
    
    const promises: Promise<string>[] = [];
    
    for (let i = 0; i < 3; i++) {
        promises.push(new Promise(resolve => {
            setTimeout(() => {
                resolve(`Async result ${i}`);
            }, 100 * (i + 1));
        }));
    }
    
    const results = await Promise.all(promises);
    results.forEach((result, index) => {
        console.log(`  ${index}: ${result}`);
    });
}

// รัน async function
asyncLetExample();

// ==========================================
// 10. Performance และ Memory
// ==========================================
console.log("\n🔟 Performance และ Memory");
console.log("-".repeat(40));

function memoryExample() {
    console.log("💾 Memory usage ของ let:");
    
    // let ใช้ memory อย่างมีประสิทธิภาพ
    for (let i = 0; i < 1000; i++) {
        // ตัวแปร i ใน block scope นี้จะถูก garbage collect
        // เมื่อออกจาก block
    }
    
    console.log("✅ ตัวแปร let ถูก garbage collect เมื่อออกจาก scope");
    console.log("✅ ช่วยประหยัด memory และเพิ่มประสิทธิภาพ");
}

memoryExample();

// ==========================================
// 11. Best Practices กับ let
// ==========================================
console.log("\n1️⃣1️⃣ Best Practices กับ let");
console.log("-".repeat(40));

console.log("📋 Best Practices สำหรับ let:");
console.log("✅ ใช้ let เมื่อต้องการ reassign ตัวแปร");
console.log("✅ ใช้ let ใน loop counters");
console.log("✅ ใช้ let เมื่อต้องการ block scope");
console.log("✅ ประกาศ let ใกล้กับที่ใช้งาน");
console.log("✅ ใช้ชื่อตัวแปรที่มีความหมาย");
console.log("❌ อย่าใช้ let เมื่อไม่ต้องการ reassign (ใช้ const แทน)");

// ตัวอย่าง Good Practices
function goodPracticesExample() {
    console.log("\n💡 ตัวอย่าง Good Practices:");
    
    // ดี: ใช้ let สำหรับ loop counter
    for (let index = 0; index < 3; index++) {
        console.log(`  Loop ${index}`);
    }
    
    // ดี: ใช้ let เมื่อต้อง reassign
    let currentStatus = "pending";
    console.log(`  Status: ${currentStatus}`);
    
    currentStatus = "completed";
    console.log(`  Updated Status: ${currentStatus}`);
    
    // ดี: Block scope สำหรับ temporary variables
    if (true) {
        let tempCalculation = 10 * 20;
        console.log(`  Calculation: ${tempCalculation}`);
    }
    // tempCalculation ไม่รั่วออกมา
}

goodPracticesExample();

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 3 - let:");
console.log("🎯 let มี block scope (ไม่ใช่ function scope เหมือน var)");
console.log("🎯 let มี Temporal Dead Zone (ไม่สามารถใช้ก่อน declare)");
console.log("🎯 let ไม่สามารถ redeclare ได้ (ป้องกัน bugs)");
console.log("🎯 let แก้ปัญหา loop และ async operations");
console.log("🎯 let ไม่สร้าง global properties");
console.log("🎯 let ใช้ memory อย่างมีประสิทธิภาพ");
console.log("🎯 แนะนำให้ใช้ let แทน var ทุกกรณี");

export { };
