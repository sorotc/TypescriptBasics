/**
 * บทที่ 5: เปรียบเทียบ var, let, const และ Best Practices
 * สรุปความแตกต่างและแนวทางการใช้งานที่ดี
 */

console.log("🎯 บทที่ 5: เปรียบเทียบ var, let, const");
console.log("=" .repeat(50));

// ==========================================
// 1. ตารางเปรียบเทียบ
// ==========================================
console.log("\n1️⃣ ตารางเปรียบเทียบ");
console.log("-".repeat(40));

console.log("📊 ตารางเปรียบเทียบ var, let, const:");
console.log("┌─────────────────────┬─────────┬─────────┬─────────┐");
console.log("│ คุณสมบัติ            │   var   │   let   │  const  │");
console.log("├─────────────────────┼─────────┼─────────┼─────────┤");
console.log("│ Scope               │Function │ Block   │ Block   │");
console.log("│ Hoisting            │   ✅    │   ❌    │   ❌    │");
console.log("│ Temporal Dead Zone  │   ❌    │   ✅    │   ✅    │");
console.log("│ Redeclaration       │   ✅    │   ❌    │   ❌    │");
console.log("│ Reassignment        │   ✅    │   ✅    │   ❌    │");
console.log("│ Initialization      │Optional │Optional │Required │");
console.log("│ Global Property     │   ✅    │   ❌    │   ❌    │");
console.log("└─────────────────────┴─────────┴─────────┴─────────┘");

// ==========================================
// 2. Scope Comparison
// ==========================================
console.log("\n2️⃣ Scope Comparison");
console.log("-".repeat(40));

function scopeComparison() {
    console.log("🔍 Scope Comparison:");
    
    // Function scope (var)
    if (true) {
        var varScoped = "var: function scope";
        let letScoped = "let: block scope";
        const constScoped = "const: block scope";
        
        console.log("  ใน block:");
        console.log(`    var: ${varScoped}`);
        console.log(`    let: ${letScoped}`);
        console.log(`    const: ${constScoped}`);
    }
    
    // นอก block
    console.log("  นอก block:");
    console.log(`    var: ${varScoped} ✅ (ใช้ได้)`);
    
    try {
        // console.log(`    let: ${letScoped}`); // ReferenceError
        console.log("    let: ❌ (ใช้ไม่ได้)");
    } catch (error: any) {
        console.log("    let: ❌ (ReferenceError)");
    }
    
    try {
        // console.log(`    const: ${constScoped}`); // ReferenceError
        console.log("    const: ❌ (ใช้ไม่ได้)");
    } catch (error: any) {
        console.log("    const: ❌ (ReferenceError)");
    }
}

scopeComparison();

// ==========================================
// 3. Hoisting Comparison
// ==========================================
console.log("\n3️⃣ Hoisting Comparison");
console.log("-".repeat(40));

function hoistingComparison() {
    console.log("🚀 Hoisting Comparison:");
    
    // var hoisting
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    console.log("  var ก่อน declare:", typeof varHoisted); // undefined
    var varHoisted = "var value";
    console.log("  var หลัง declare:", varHoisted);
    
    // let/const hoisting (Temporal Dead Zone)
    try {
        // console.log("  let ก่อน declare:", letHoisted); // ReferenceError
        console.log("  let ก่อน declare: ❌ (Temporal Dead Zone)");
    } catch (error: any) {
        console.log("  let ก่อน declare: ❌ (ReferenceError)");
    }
    
    let letHoisted = "let value";
    console.log("  let หลัง declare:", letHoisted);
    
    const constHoisted = "const value";
    console.log("  const หลัง declare:", constHoisted);
}

hoistingComparison();

// ==========================================
// 4. Loop Behavior Comparison
// ==========================================
console.log("\n4️⃣ Loop Behavior Comparison");
console.log("-".repeat(40));

function loopComparison() {
    console.log("🔄 Loop Behavior Comparison:");
    
    // var problem
    console.log("  var ใน loop (ปัญหา):");
    const varFunctions: (() => string)[] = [];
    
    for (var i = 0; i < 3; i++) {
        varFunctions.push(function() {
            return `var i = ${i}`;
        });
    }
    
    varFunctions.forEach((fn, index) => {
        console.log(`    Function ${index}: ${fn()}`); // ทุกตัวเป็น 3
    });
    
    // let solution
    console.log("  let ใน loop (แก้ปัญหา):");
    const letFunctions: (() => string)[] = [];
    
    for (let j = 0; j < 3; j++) {
        letFunctions.push(function() {
            return `let j = ${j}`;
        });
    }
    
    letFunctions.forEach((fn, index) => {
        console.log(`    Function ${index}: ${fn()}`); // แต่ละตัวต่างกัน
    });
    
    // const in for...of
    console.log("  const ใน for...of:");
    const items = ["A", "B", "C"];
    for (const item of items) {
        console.log(`    const item: ${item}`);
    }
}

loopComparison();

// ==========================================
// 5. Redeclaration และ Reassignment
// ==========================================
console.log("\n5️⃣ Redeclaration และ Reassignment");
console.log("-".repeat(40));

function declarationComparison() {
    console.log("🔄 Declaration และ Assignment Comparison:");
    
    // var: redeclaration ได้, reassignment ได้
    var varVariable = "var เริ่มต้น";
    console.log("  var เริ่มต้น:", varVariable);
    
    var varVariable = "var redeclare"; // ✅ ได้
    varVariable = "var reassign"; // ✅ ได้
    console.log("  var หลัง redeclare และ reassign:", varVariable);
    
    // let: redeclaration ไม่ได้, reassignment ได้
    let letVariable = "let เริ่มต้น";
    console.log("  let เริ่มต้น:", letVariable);
    
    // let letVariable = "let redeclare"; // ❌ SyntaxError
    letVariable = "let reassign"; // ✅ ได้
    console.log("  let หลัง reassign:", letVariable);
    console.log("  let redeclaration: ❌ (SyntaxError)");
    
    // const: redeclaration ไม่ได้, reassignment ไม่ได้
    const constVariable = "const เริ่มต้น";
    console.log("  const เริ่มต้น:", constVariable);
    
    // const constVariable = "const redeclare"; // ❌ SyntaxError
    // constVariable = "const reassign"; // ❌ TypeError
    console.log("  const redeclaration: ❌ (SyntaxError)");
    console.log("  const reassignment: ❌ (TypeError)");
}

declarationComparison();

// ==========================================
// 6. Performance Comparison
// ==========================================
console.log("\n6️⃣ Performance Comparison");
console.log("-".repeat(40));

function performanceComparison() {
    console.log("⚡ Performance Comparison:");
    
    const iterations = 1000000;
    
    // Measure var performance
    const varStart = performance.now();
    for (var i = 0; i < iterations; i++) {
        var varTemp = i * 2;
    }
    const varEnd = performance.now();
    
    // Measure let performance
    const letStart = performance.now();
    for (let j = 0; j < iterations; j++) {
        let letTemp = j * 2;
    }
    const letEnd = performance.now();
    
    // Measure const performance
    const constStart = performance.now();
    const MULTIPLIER = 2;
    for (let k = 0; k < iterations; k++) {
        const constTemp = k * MULTIPLIER;
    }
    const constEnd = performance.now();
    
    console.log(`  var time: ${(varEnd - varStart).toFixed(2)}ms`);
    console.log(`  let time: ${(letEnd - letStart).toFixed(2)}ms`);
    console.log(`  const time: ${(constEnd - constStart).toFixed(2)}ms`);
    console.log("  📝 const มักจะเร็วที่สุดเพราะ engine optimize ได้ดี");
}

performanceComparison();

// ==========================================
// 7. Memory Usage Comparison
// ==========================================
console.log("\n7️⃣ Memory Usage Comparison");
console.log("-".repeat(40));

function memoryComparison() {
    console.log("💾 Memory Usage Comparison:");
    
    // var: Function scoped - รอ function จบถึงจะ cleanup
    function varMemoryTest() {
        for (var i = 0; i < 1000; i++) {
            var varData = new Array(1000).fill(i);
            // varData ยังไม่ถูก cleanup จนกว่า function จะจบ
        }
        // ตรงนี้ varData ทุกตัวยังอยู่ใน memory
        console.log("  var: ตัวแปรทั้งหมดยังอยู่ใน memory จนกว่า function จะจบ");
    }
    
    // let/const: Block scoped - cleanup ทันทีเมื่อออกจาก block
    function letConstMemoryTest() {
        for (let i = 0; i < 1000; i++) {
            let letData = new Array(1000).fill(i);
            const constData = new Array(1000).fill(i);
            // letData และ constData ถูก cleanup เมื่อจบแต่ละรอบ loop
        }
        console.log("  let/const: ตัวแปรถูก cleanup ทันทีเมื่อออกจาก block");
    }
    
    varMemoryTest();
    letConstMemoryTest();
    
    console.log("  📝 let/const ใช้ memory อย่างมีประสิทธิภาพมากกว่า var");
}

memoryComparison();

// ==========================================
// 8. Best Practices Decision Tree
// ==========================================
console.log("\n8️⃣ Best Practices Decision Tree");
console.log("-".repeat(40));

console.log("🌳 Decision Tree สำหรับเลือกใช้ var/let/const:");
console.log("├─ ต้องการ reassign ไหม?");
console.log("│  ├─ ไม่ → ใช้ const ✅");
console.log("│  └─ ใช่ → ต้องการ block scope ไหม?");
console.log("│      ├─ ใช่ → ใช้ let ✅");
console.log("│      └─ ไม่ → ยังคงแนะนำ let (หลีกเลี่ยง var) ⚠️");
console.log("└─ กฎทั่วไป: const > let > var");

function bestPracticesExamples() {
    console.log("\n💡 ตัวอย่าง Best Practices:");
    
    // ✅ ดี: ใช้ const สำหรับค่าที่ไม่เปลี่ยน
    const API_URL = "https://api.example.com";
    const config = { timeout: 5000, retries: 3 };
    const users = ["Alice", "Bob", "Charlie"];
    
    console.log("  ✅ const สำหรับค่าคงที่และ references");
    
    // ✅ ดี: ใช้ let สำหรับตัวแปรที่ต้อง reassign
    let currentUser = users[0];
    let attempts = 0;
    
    for (let i = 0; i < users.length; i++) {
        currentUser = users[i];
        attempts++;
    }
    
    console.log("  ✅ let สำหรับตัวแปรที่ต้อง reassign");
    console.log(`    Current user: ${currentUser}, Attempts: ${attempts}`);
    
    // ❌ หลีกเลี่ยง: var
    console.log("  ❌ หลีกเลี่ยง var ในโค้ดใหม่");
}

bestPracticesExamples();

// ==========================================
// 9. Migration Guide จาก var เป็น let/const
// ==========================================
console.log("\n9️⃣ Migration Guide");
console.log("-".repeat(40));

console.log("🔄 Migration Guide จาก var เป็น let/const:");
console.log("1. เริ่มจากการแทนที่ var ด้วย let");
console.log("2. เปลี่ยน let เป็น const หากไม่มี reassignment");
console.log("3. ตรวจสอบ scope ที่เปลี่ยนไป");
console.log("4. แก้ไข hoisting issues");
console.log("5. ทดสอบ functionality ให้ครบถ้วน");

function migrationExample() {
    console.log("\n🔧 ตัวอย่าง Migration:");
    
    console.log("  ก่อน (var):");
    console.log("    var name = 'John';");
    console.log("    var age = 25;");
    console.log("    for (var i = 0; i < 3; i++) { ... }");
    
    console.log("  หลัง (let/const):");
    console.log("    const name = 'John';");
    console.log("    let age = 25;");
    console.log("    for (let i = 0; i < 3; i++) { ... }");
    
    // ตัวอย่างจริง
    const name = "John";
    let age = 25;
    const hobbies = ["reading", "coding"];
    
    console.log(`  ✅ const name: ${name}`);
    console.log(`  ✅ let age: ${age}`);
    console.log(`  ✅ const hobbies: ${hobbies.join(", ")}`);
    
    age = 26; // ✅ reassign ได้
    hobbies.push("gaming"); // ✅ modify array ได้
    
    console.log(`  ✅ updated age: ${age}`);
    console.log(`  ✅ updated hobbies: ${hobbies.join(", ")}`);
}

migrationExample();

// ==========================================
// 10. Common Anti-patterns และ Solutions
// ==========================================
console.log("\n🔟 Common Anti-patterns");
console.log("-".repeat(40));

console.log("⚠️ Common Anti-patterns และ Solutions:");

// Anti-pattern 1: ใช้ var ในโค้ดใหม่
console.log("\n❌ Anti-pattern 1: ใช้ var ในโค้ดใหม่");
console.log("  // ไม่ดี");
console.log("  var username = 'admin';");
console.log("  ✅ Solution: ใช้ const หรือ let");
console.log("  const username = 'admin';");

// Anti-pattern 2: ใช้ let เมื่อไม่ต้องการ reassign
console.log("\n❌ Anti-pattern 2: ใช้ let เมื่อไม่ต้องการ reassign");
console.log("  // ไม่ดี");
console.log("  let PI = 3.14159;");
console.log("  ✅ Solution: ใช้ const");
console.log("  const PI = 3.14159;");

// Anti-pattern 3: กลัวใช้ const กับ objects
console.log("\n❌ Anti-pattern 3: กลัวใช้ const กับ objects");
console.log("  // ไม่ดี");
console.log("  let user = { name: 'John' };");
console.log("  ✅ Solution: ใช้ const ได้");
console.log("  const user = { name: 'John' };");
console.log("  user.name = 'Jane'; // ได้");

// ==========================================
// 11. Linting Rules
// ==========================================
console.log("\n1️⃣1️⃣ Linting Rules");
console.log("-".repeat(40));

console.log("🔧 แนะนำ ESLint Rules:");
console.log('  "no-var": "error" // ห้ามใช้ var');
console.log('  "prefer-const": "error" // ใช้ const เมื่อเป็นไปได้');
console.log('  "no-undef": "error" // ห้ามใช้ตัวแปรที่ไม่ define');
console.log('  "block-scoped-var": "error" // บังคับ block scope');

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 5 - เปรียบเทียบและ Best Practices:");
console.log("🎯 const > let > var (ลำดับการใช้งานที่แนะนำ)");
console.log("🎯 const: ใช้เป็นค่าเริ่มต้น, block scope, ไม่ reassign");
console.log("🎯 let: ใช้เมื่อต้อง reassign, block scope, แก้ปัญหา var");
console.log("🎯 var: หลีกเลี่ยงในโค้ดใหม่, function scope, มีปัญหาหลายอย่าง");
console.log("🎯 Migration: var → let → const (ตามความเหมาะสม)");
console.log("🎯 ใช้ linting tools เพื่อ enforce best practices");
console.log("🎯 block scope ดีกว่า function scope สำหรับ maintainability");

export { };
