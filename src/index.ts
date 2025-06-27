/**
 * TypeScript Basics Tutorial
 * ไฟล์หลักสำหรับรันบทเรียนทั้งหมด
 */

console.log("🎓 ยินดีต้อนรับสู่บทเรียน TypeScript Basics และ Variable Scope!");
console.log("=" .repeat(60));

async function runTutorial() {
    console.log("\n📚 เนื้อหาที่จะเรียนรู้:");
    console.log("1. TypeScript พื้นฐาน - Types, Arrays, Objects, Functions");
    console.log("2. Variable Scope: var - Function scope และปัญหาต่างๆ");
    console.log("3. Variable Scope: let - Block scope และข้อดี");
    console.log("4. Variable Scope: const - Immutability และการใช้งาน");
    console.log("5. เปรียบเทียบ var, let, const และ Best Practices");
    console.log("6. Template Literals และ String Templates");
    console.log("7. Variable Declaration แบบละเอียด");
    console.log("8. Functions แบบครบถ้วน");
    
    console.log("\n🚀 เริ่มบทเรียน...\n");
    
    try {
        console.log("📖 บทที่ 1: TypeScript Basics");
        console.log("-".repeat(40));
        await import('./01-typescript-basics');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 2: Variable Scope - var");
        console.log("-".repeat(40));
        await import('./02-var-scope');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 3: Variable Scope - let");
        console.log("-".repeat(40));
        await import('./03-let-scope');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 4: Variable Scope - const");
        console.log("-".repeat(40));
        await import('./04-const-scope');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 5: เปรียบเทียบ var, let, const");
        console.log("-".repeat(40));
        await import('./05-comparison');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 6: Template Literals และ String Templates");
        console.log("-".repeat(40));
        await import('./06-templates');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 7: Variable Declaration แบบละเอียด");
        console.log("-".repeat(40));
        await import('./07-variable-declaration');
        
        console.log("\n" + "=".repeat(60));
        console.log("📖 บทที่ 8: Functions แบบครบถ้วน");
        console.log("-".repeat(40));
        await import('./08-functions');
        
        console.log("\n" + "=".repeat(60));
        console.log("🎉 จบบทเรียน TypeScript Basics!");
        console.log("=" .repeat(60));
        
        console.log("\n📝 สรุปสิ่งที่ได้เรียนรู้:");
        console.log("✅ TypeScript พื้นฐาน: Types, Interfaces, Functions");
        console.log("✅ var: Function scope, Hoisting, ปัญหาต่างๆ");
        console.log("✅ let: Block scope, ไม่มี hoisting, แก้ปัญหาของ var");
        console.log("✅ const: Block scope, Immutable reference, ต้องมีค่าเริ่มต้น");
        console.log("✅ Template Literals: String interpolation, Multiline, Tagged templates");
        console.log("✅ Variable Declaration: Destructuring, Type assertions, Scope patterns");
        console.log("✅ Functions: Overloading, Generics, Async, Higher-order functions");
        console.log("✅ Best Practices: ใช้ const มากที่สุด, let เมื่อจำเป็น, หลีกเลี่ยง var");
        
        console.log("\n💡 Tips สำหรับการพัฒนา:");
        console.log("1. เริ่มด้วย const เสมอ, เปลี่ยนเป็น let เมื่อต้องการ reassign");
        console.log("2. ใช้ TypeScript compiler เพื่อตรวจสอบ errors");
        console.log("3. ตั้งค่า ESLint/TSLint เพื่อ enforce best practices");
        console.log("4. ใช้ strict mode ใน TypeScript");
        console.log("5. ใช้ template literals แทน string concatenation");
        console.log("6. เขียน pure functions เมื่อเป็นไปได้");
        
        console.log("\n🔗 ไฟล์ที่สร้างขึ้น:");
        console.log("- src/01-typescript-basics.ts - TypeScript พื้นฐาน");
        console.log("- src/02-var-scope.ts - Variable scope: var");
        console.log("- src/03-let-scope.ts - Variable scope: let");
        console.log("- src/04-const-scope.ts - Variable scope: const");
        console.log("- src/05-comparison.ts - เปรียบเทียบและ best practices");
        console.log("- src/06-templates.ts - Template literals และ string templates");
        console.log("- src/07-variable-declaration.ts - Variable declaration แบบละเอียด");
        console.log("- src/08-functions.ts - Functions แบบครบถ้วน");
        console.log("- src/exercises/practice.ts - แบบฝึกหัดและโจทย์ทดลอง");
        
    } catch (error) {
        console.error("❌ เกิดข้อผิดพลาดในการโหลดบทเรียน:", error);
    }
}

// รันบทเรียน
runTutorial().then(() => {
    console.log("\n🎓 ขอบคุณที่เรียนรู้ TypeScript กับเรา!");
    console.log("Happy Coding! 🚀");
}).catch(error => {
    console.error("เกิดข้อผิดพลาด:", error);
});

export { };
