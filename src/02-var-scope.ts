/**
 * บทที่ 2: Variable Scope - var
 * เรียนรู้ var และปัญหาต่างๆ ที่เกิดขึ้น
 */

console.log("🎯 บทที่ 2: Variable Scope - var");
console.log("=" .repeat(50));

// ==========================================
// 1. Function Scope ของ var
// ==========================================
console.log("\n1️⃣ Function Scope ของ var");
console.log("-".repeat(40));

function varScopeExample() {
    var functionScoped = "ฉันอยู่ใน function scope";
    
    if (true) {
        var alsoFunctionScoped = "ฉันก็อยู่ใน function scope เหมือนกัน";
        console.log("🔍 ใน if block:", alsoFunctionScoped);
    }
    
    // var ไม่มี block scope จึงใช้งานได้นอก if block
    console.log("🔍 นอก if block:", alsoFunctionScoped);
    console.log("🔍 function variable:", functionScoped);
}

varScopeExample();

// ==========================================
// 2. Hoisting ของ var
// ==========================================
console.log("\n2️⃣ Hoisting ของ var");
console.log("-".repeat(40));

// eslint-disable-next-line @typescript-eslint/no-use-before-define
console.log("🚀 ก่อน declare var hoistedVar:", typeof hoistedVar); // undefined
var hoistedVar = "ฉันถูก hoist แล้ว!";
console.log("🚀 หลัง declare var hoistedVar:", hoistedVar);

// สิ่งที่เกิดขึ้นจริงคือ:
// var hoistedVar; // ถูก hoist ขึ้นมาด้านบน (undefined)
// console.log(...); // แสดง undefined
// hoistedVar = "..."; // กำหนดค่า
// console.log(...); // แสดงค่าจริง

// ==========================================
// 3. ปัญหา var ใน Loop
// ==========================================
console.log("\n3️⃣ ปัญหา var ใน Loop");
console.log("-".repeat(40));

console.log("❌ ปัญหา var ใน loop:");
var varFunctions = [];

for (var i = 0; i < 3; i++) {
    varFunctions.push(function() {
        return `var i = ${i}`;
    });
}

// ผลลัพธ์ไม่เป็นไปตามที่คาดหวัง
varFunctions.forEach((fn, index) => {
    console.log(`  Function ${index}:`, fn()); // ทุกตัวแสดง "var i = 3"
});

console.log("\n💡 สาเหตุ: var i มี function scope");
console.log("   ตัวแปร i เปลี่ยนเป็น 3 เมื่อ loop จบ");
console.log("   ทุก function อ้างอิงตัวแปร i ตัวเดียวกัน");

// ==========================================
// 4. การแก้ปัญหาด้วย IIFE (Immediately Invoked Function Expression)
// ==========================================
console.log("\n4️⃣ แก้ปัญหาด้วย IIFE");
console.log("-".repeat(40));

console.log("✅ แก้ปัญหาด้วย IIFE:");
var iifeFunctions = [];

for (var j = 0; j < 3; j++) {
    iifeFunctions.push((function(index) {
        return function() {
            return `IIFE j = ${index}`;
        };
    })(j));
}

iifeFunctions.forEach((fn, index) => {
    console.log(`  Function ${index}:`, fn()); // แสดงค่าที่ถูกต้อง
});

// ==========================================
// 5. ปัญหา Redeclaration
// ==========================================
console.log("\n5️⃣ ปัญหา Redeclaration");
console.log("-".repeat(40));

var redeclaredVar = "ค่าแรก";
console.log("🔄 ค่าแรก:", redeclaredVar);

var redeclaredVar = "ค่าที่สอง"; // ไม่มี error แต่อันตราย
console.log("🔄 ค่าที่สอง:", redeclaredVar);

// ==========================================
// 6. Global Object Pollution
// ==========================================
console.log("\n6️⃣ Global Object Pollution");
console.log("-".repeat(40));

var globalVar = "ฉันเป็น global variable";
console.log("🌍 globalVar:", globalVar);

// ใน browser จะเป็น window.globalVar
// ใน Node.js จะเป็น global.globalVar
console.log("⚠️ var สร้าง property ใน global object");

// ==========================================
// 7. Temporal Dead Zone - var ไม่มี
// ==========================================
console.log("\n7️⃣ var ไม่มี Temporal Dead Zone");
console.log("-".repeat(40));

function temporalDeadZoneVar() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    console.log("🔍 ก่อน declare:", typeof beforeDeclareVar); // undefined (ไม่ error)
    
    var beforeDeclareVar = "ค่าของ var";
    
    console.log("🔍 หลัง declare:", beforeDeclareVar);
}

temporalDeadZoneVar();

// ==========================================
// 8. Best Practices กับ var
// ==========================================
console.log("\n8️⃣ Best Practices");
console.log("-".repeat(40));

console.log("📋 ข้อแนะนำเกี่ยวกับ var:");
console.log("❌ หลีกเลี่ยงการใช้ var ในโค้ดใหม่");
console.log("❌ var ทำให้เกิดปัญหา hoisting");
console.log("❌ var ไม่มี block scope");
console.log("❌ var อนุญาตให้ redeclare");
console.log("❌ var สร้าง global properties");
console.log("✅ ใช้ let หรือ const แทน var");

// ==========================================
// 9. ตัวอย่างปัญหาจริงที่เจอบ่อย
// ==========================================
console.log("\n9️⃣ ตัวอย่างปัญหาจริง");
console.log("-".repeat(40));

// ปัญหา: Event listeners ใน loop
console.log("❌ ปัญหา Event Listeners:");
var buttons = ["Button 1", "Button 2", "Button 3"];
var clickHandlers = [];

for (var k = 0; k < buttons.length; k++) {
    clickHandlers.push(function() {
        return `คลิก ${buttons[k]}`; // k จะเป็น 3 เสมอ
    });
}

clickHandlers.forEach((handler, index) => {
    try {
        console.log(`  Handler ${index}:`, handler());
    } catch (error: any) {
        console.log(`  Handler ${index}: Error - ${error.message}`);
    }
});

// ==========================================
// 10. การ Debug ปัญหา var
// ==========================================
console.log("\n🔟 การ Debug ปัญหา var");
console.log("-".repeat(40));

function debugVarScope() {
    console.log("🐛 Debug var scope:");
    
    if (true) {
        var innerVar = "ฉันควรจะอยู่ใน block";
        console.log("  ใน if:", innerVar);
    }
    
    console.log("  นอก if:", innerVar); // ยังใช้ได้!
    console.log("  🚨 นี่คือปัญหา! innerVar รั่วออกมานอก block");
}

debugVarScope();

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 2 - var:");
console.log("🎯 var มี function scope ไม่ใช่ block scope");
console.log("🎯 var มี hoisting (ยก declaration ขึ้นด้านบน)");
console.log("🎯 var สามารถ redeclare ได้ (อันตราย)");
console.log("🎯 var สร้างปัญหาใน loop และ async operations");
console.log("🎯 var สร้าง properties ใน global object");
console.log("🎯 ไม่แนะนำให้ใช้ var ในโค้ดยุคใหม่");

export { };
