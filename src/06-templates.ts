/**
 * บทที่ 6: Template Literals และ String Templates
 * เรียนรู้การใช้งาน template literals ใน TypeScript
 */

console.log("🎯 บทที่ 6: Template Literals และ String Templates");
console.log("=" .repeat(50));

// ==========================================
// 1. Basic Template Literals
// ==========================================
console.log("\n1️⃣ Basic Template Literals");
console.log("-".repeat(40));

// Traditional string concatenation
const firstName = "สมชาย";
const lastName = "ใจดี";
const age = 25;

const oldWay = "สวัสดี " + firstName + " " + lastName + " อายุ " + age + " ปี";
console.log("📝 แบบเก่า (concatenation):", oldWay);

// Template literals
const newWay = `สวัสดี ${firstName} ${lastName} อายุ ${age} ปี`;
console.log("✨ แบบใหม่ (template literal):", newWay);

// ==========================================
// 2. Multiline Strings
// ==========================================
console.log("\n2️⃣ Multiline Strings");
console.log("-".repeat(40));

// แบบเก่า
const oldMultiline = "บรรทัดที่ 1\n" +
                    "บรรทัดที่ 2\n" +
                    "บรรทัดที่ 3";

// แบบใหม่
const newMultiline = `บรรทัดที่ 1
บรรทัดที่ 2
บรรทัดที่ 3`;

console.log("📝 Multiline แบบเก่า:");
console.log(oldMultiline);

console.log("\n✨ Multiline แบบใหม่:");
console.log(newMultiline);

// ==========================================
// 3. Expression Interpolation
// ==========================================
console.log("\n3️⃣ Expression Interpolation");
console.log("-".repeat(40));

const a = 10;
const b = 20;

// การคำนวณใน template literals
const calculation = `${a} + ${b} = ${a + b}`;
console.log("🧮 การคำนวณ:", calculation);

// Function calls
const getCurrentTime = () => new Date().toLocaleTimeString("th-TH");
const timeMessage = `เวลาปัจจุบัน: ${getCurrentTime()}`;
console.log("⏰ เรียกใช้ function:", timeMessage);

// Conditional expressions
const score = 85;
const grade = `คะแนน: ${score} เกรด: ${score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "F"}`;
console.log("📊 Conditional expression:", grade);

// Object properties
const user = { name: "อารีย์", role: "developer", experience: 3 };
const userInfo = `ผู้ใช้: ${user.name} (${user.role}) ประสบการณ์ ${user.experience} ปี`;
console.log("👤 Object properties:", userInfo);

// ==========================================
// 4. Advanced Template Literals
// ==========================================
console.log("\n4️⃣ Advanced Template Literals");
console.log("-".repeat(40));

// Nested template literals
const language = "TypeScript";
const level: "beginner" | "intermediate" | "advanced" = "intermediate";
const nestedTemplate = `
เรียนรู้ ${language}
ระดับ: ${level.toUpperCase()}
สถานะ: ${`${level === "beginner" ? "🌱" : level === "intermediate" ? "🌿" : "🌳"} ${level}`}
`;

console.log("🪆 Nested templates:", nestedTemplate);

// Template literals กับ arrays
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม", "มะม่วง"];
const fruitList = `ผลไม้ที่มี:
${fruits.map((fruit, index) => `${index + 1}. ${fruit}`).join('\n')}
รวม ${fruits.length} ชนิด`;

console.log("🍎 Array processing:", fruitList);

// ==========================================
// 5. Tagged Template Literals
// ==========================================
console.log("\n5️⃣ Tagged Template Literals");
console.log("-".repeat(40));

// Simple tagged template
function highlight(strings: TemplateStringsArray, ...values: any[]): string {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `**${values[i]}**` : '';
        return result + string + value;
    }, '');
}

const highlighted = highlight`ชื่อ: ${firstName} อายุ: ${age} ปี`;
console.log("✨ Tagged template (highlight):", highlighted);

// HTML template
function html(strings: TemplateStringsArray, ...values: any[]): string {
    return strings.reduce((result, string, i) => {
        const value = values[i] || '';
        return result + string + String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }, '');
}

const userInput = "<script>alert('xss')</script>";
const safeHtml = html`<div>ข้อมูลผู้ใช้: ${userInput}</div>`;
console.log("🔒 HTML escaping:", safeHtml);

// Currency formatting
function currency(strings: TemplateStringsArray, ...values: number[]): string {
    return strings.reduce((result, string, i) => {
        const value = values[i];
        const formatted = value !== undefined ? 
            new Intl.NumberFormat('th-TH', { 
                style: 'currency', 
                currency: 'THB' 
            }).format(value) : '';
        return result + string + formatted;
    }, '');
}

const price = 1250.50;
const discount = 125;
const invoice = currency`ราคาสินค้า: ${price} ส่วนลด: ${discount} รวม: ${price - discount}`;
console.log("💰 Currency formatting:", invoice);

// ==========================================
// 6. SQL Template (Safe Query Building)
// ==========================================
console.log("\n6️⃣ SQL Template");
console.log("-".repeat(40));

function sql(strings: TemplateStringsArray, ...values: any[]): { query: string; params: any[] } {
    let query = '';
    const params: any[] = [];
    
    strings.forEach((string, i) => {
        query += string;
        if (values[i] !== undefined) {
            query += `$${params.length + 1}`;
            params.push(values[i]);
        }
    });
    
    return { query, params };
}

const userId = 123;
const userName = "สมชาย";
const { query, params } = sql`
    SELECT * FROM users 
    WHERE id = ${userId} 
    AND name = ${userName}
`;

console.log("🗃️ SQL Query:", query);
console.log("🗃️ Parameters:", params);

// ==========================================
// 7. Internationalization (i18n)
// ==========================================
console.log("\n7️⃣ Internationalization");
console.log("-".repeat(40));

// Simple i18n function
const translations = {
    th: {
        greeting: "สวัสดี {name} ยินดีต้อนรับ",
        itemCount: "คุณมีสินค้า {count} รายการ",
        total: "รวม {amount} บาท"
    },
    en: {
        greeting: "Hello {name}, welcome",
        itemCount: "You have {count} items",
        total: "Total {amount} baht"
    }
};

function t(lang: 'th' | 'en') {
    return function(strings: TemplateStringsArray, ...values: any[]): string {
        const key = strings[0].trim();
        const template = translations[lang][key as keyof typeof translations['th']];
        
        if (!template) return key;
        
        return template.replace(/{(\w+)}/g, (match, prop) => {
            const index = strings.indexOf(`{${prop}}`);
            return values[index] || match;
        });
    };
}

const tTh = t('th');
const tEn = t('en');

const customerName = "สมศรี";
const itemCount = 5;
const totalAmount = 1500;

// ใช้งาน i18n templates
console.log("🇹🇭 Thai:", `สวัสดี ${customerName} คุณมีสินค้า ${itemCount} รายการ`);
console.log("🇺🇸 English:", `Hello ${customerName}, you have ${itemCount} items`);

// ==========================================
// 8. Debugging Templates
// ==========================================
console.log("\n8️⃣ Debugging Templates");
console.log("-".repeat(40));

function debug(strings: TemplateStringsArray, ...values: any[]): string {
    const timestamp = new Date().toISOString();
    const debugInfo = values.map((value, index) => {
        return `[${index}]: ${typeof value} = ${JSON.stringify(value)}`;
    }).join(', ');
    
    const message = strings.reduce((result, string, i) => {
        return result + string + (values[i] || '');
    }, '');
    
    return `[${timestamp}] ${message} | DEBUG: {${debugInfo}}`;
}

const debugMessage = debug`ผู้ใช้ ${customerName} ทำรายการ ${itemCount} รายการ`;
console.log("🐛 Debug template:", debugMessage);

// ==========================================
// 9. Performance Considerations
// ==========================================
console.log("\n9️⃣ Performance Considerations");
console.log("-".repeat(40));

function performanceTest() {
    const iterations = 100000;
    const testName = "การทดสอบ";
    const testValue = 42;
    
    // Test concatenation
    const concatStart = performance.now();
    for (let i = 0; i < iterations; i++) {
        const result = "ชื่อ: " + testName + " ค่า: " + testValue;
    }
    const concatEnd = performance.now();
    
    // Test template literals
    const templateStart = performance.now();
    for (let i = 0; i < iterations; i++) {
        const result = `ชื่อ: ${testName} ค่า: ${testValue}`;
    }
    const templateEnd = performance.now();
    
    console.log(`⚡ Concatenation: ${(concatEnd - concatStart).toFixed(2)}ms`);
    console.log(`⚡ Template literal: ${(templateEnd - templateStart).toFixed(2)}ms`);
    console.log("📝 Template literals มักจะเร็วกว่าหรือเท่ากับ concatenation");
}

performanceTest();

// ==========================================
// 10. Best Practices
// ==========================================
console.log("\n🔟 Best Practices");
console.log("-".repeat(40));

console.log("📋 Best Practices สำหรับ Template Literals:");

// ✅ ดี: ใช้ template literals แทน concatenation
const goodExample1 = `สวัสดี ${firstName}!`;
console.log("✅ ใช้แทน concatenation:", goodExample1);

// ✅ ดี: ใช้กับ multiline strings
const goodExample2 = `
    SELECT name, email 
    FROM users 
    WHERE active = true
    ORDER BY name
`;
console.log("✅ ใช้กับ multiline strings");

// ✅ ดี: ใช้กับ complex expressions
const status = "active";
const goodExample3 = `สถานะ: ${status === "active" ? "ใช้งานได้" : "ปิดใช้งาน"}`;
console.log("✅ Complex expressions:", goodExample3);

// ❌ หลีกเลี่ยง: ใช้กับ strings ธรรมดาที่ไม่มี interpolation
const badExample1 = `Hello World`; // ไม่จำเป็น
const betterExample1 = "Hello World";
console.log("⚠️ หลีกเลี่ยงกับ strings ธรรมดา");

// ❌ หลีกเลี่ยง: nested templates ที่ซับซ้อนเกินไป
console.log("⚠️ หลีกเลี่ยง nested templates ที่ซับซ้อน");

// ✅ ดี: ใช้ tagged templates สำหรับ special formatting
const formattedPrice = currency`ราคา: ${1299.99}`;
console.log("✅ Tagged templates:", formattedPrice);

// ==========================================
// 11. Common Use Cases
// ==========================================
console.log("\n1️⃣1️⃣ Common Use Cases");
console.log("-".repeat(40));

// API URLs
const apiBaseUrl = "https://api.example.com";
const userId2 = 456;
const apiUrl = `${apiBaseUrl}/users/${userId2}/profile`;
console.log("🌐 API URL:", apiUrl);

// Log messages
const logLevel = "INFO";
const logMessage = "User logged in";
const timestamp = new Date().toISOString();
const logEntry = `[${timestamp}] [${logLevel}] ${logMessage}`;
console.log("📋 Log entry:", logEntry);

// Email templates
const recipientName = "คุณลูกค้า";
const orderNumber = "ORD-2024-001";
const emailSubject = `ยืนยันคำสั่งซื้อ #${orderNumber}`;
const emailBody = `
เรียน ${recipientName}

ขอบคุณสำหรับคำสั่งซื้อหมายเลข ${orderNumber}
เราจะดำเนินการจัดส่งในเร็วๆ นี้

ด้วยความนับถือ
ทีมงาน
`;

console.log("📧 Email subject:", emailSubject);
console.log("📧 Email body:", emailBody);

// Configuration
const environment = "production";
const databaseUrl = `mongodb://${environment === "production" ? "prod-server" : "dev-server"}:27017/myapp`;
console.log("⚙️ Database URL:", databaseUrl);

// ==========================================
// สรุปบทเรียน
// ==========================================
console.log("\n📚 สรุปบทที่ 6 - Template Literals:");
console.log("🎯 ใช้ backticks (`) แทน quotes สำหรับ string interpolation");
console.log("🎯 ใช้ ${expression} สำหรับ interpolation");
console.log("🎯 รองรับ multiline strings โดยธรรมชาติ");
console.log("🎯 Tagged templates สำหรับ advanced string processing");
console.log("🎯 ดีกว่า string concatenation ในด้านอ่านง่ายและประสิทธิภาพ");
console.log("🎯 เหมาะสำหรับ API URLs, log messages, emails, และ HTML");
console.log("🎯 ระวังการใช้ซ้อนกันที่ซับซ้อนเกินไป");

export { };
