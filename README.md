# TypeScript Basics และ Variable Scope

บทเรียนพื้นฐาน TypeScript และการเรียนรู้เรื่อง Variable Scope (var, let, const) แบบครบถ้วน

## 📚 เนื้อหาที่เรียน

### 1. TypeScript พื้นฐาน
- Types และ Type Annotations
- Arrays, Objects, Interfaces
- Functions และ Arrow Functions
- Union Types และ Optional Properties

### 2. Variable Scope
- **var**: Function Scope และปัญหาต่างๆ
- **let**: Block Scope และข้อดี
- **const**: Immutability และการใช้งาน
- การเปรียบเทียบและ Best Practices

### 3. Template System
- Template Literals และ String Interpolation
- Multiline Templates
- Tagged Templates
- Expression ใน Templates

### 4. Variable Declaration แบบละเอียด
- Destructuring Assignment
- Type Assertions และ Type Casting
- Declaration Patterns
- Scope Management

### 5. Functions แบบครบถ้วน
- Function Declarations และ Expressions
- Function Overloading
- Generic Functions
- Async Functions และ Higher-Order Functions

## 🗂️ โครงสร้างไฟล์

```
src/
├── index.ts                      # ไฟล์หลักสำหรับรันบทเรียนทั้งหมด
├── 01-typescript-basics.ts       # บทที่ 1: TypeScript พื้นฐาน
├── 02-var-scope.ts              # บทที่ 2: Variable Scope - var
├── 03-let-scope.ts              # บทที่ 3: Variable Scope - let
├── 04-const-scope.ts            # บทที่ 4: Variable Scope - const
├── 05-comparison.ts             # บทที่ 5: เปรียบเทียบและ Best Practices
├── 06-templates.ts              # บทที่ 6: Template Literals และ String Templates
├── 07-variable-declaration.ts   # บทที่ 7: Variable Declaration แบบละเอียด
├── 08-functions.ts              # บทที่ 8: Functions แบบครบถ้วน
└── exercises/
    └── practice.ts              # แบบฝึกหัดและโจทย์ทดลอง
```

## 🚀 วิธีการใช้งาน

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันบทเรียนทั้งหมด
```bash
npm run dev
```

### 3. Build TypeScript
```bash
npm run build
```

### 4. รันไฟล์ที่ build แล้ว
```bash
npm start
```

### 5. Build แบบ Watch Mode
```bash
npm run build:watch
```

## 📖 วิธีการเรียน

1. **เริ่มจากไฟล์ `index.ts`** - รันเพื่อดูภาพรวมของบทเรียนทั้งหมด
2. **ศึกษาแต่ละบท** - เปิดไฟล์แต่ละบทเพื่อดูโค้ดและคำอธิบาย
3. **ทำแบบฝึกหัด** - ไปที่ `exercises/practice.ts` เพื่อทดลองเขียนโค้ด
4. **ทดลองแก้ไข** - ลองแก้ไขโค้ดและดูผลลัพธ์

## 🎯 สิ่งที่จะได้เรียนรู้

### TypeScript Basics
- ✅ การประกาศตัวแปรด้วย Type Annotations
- ✅ Type Inference
- ✅ Arrays และ Objects
- ✅ Interfaces
- ✅ Functions และ Arrow Functions
- ✅ Union Types และ Optional Properties

### Variable Scope
- ✅ **var**: Function Scope, Hoisting, Re-declaration
- ✅ **let**: Block Scope, Temporal Dead Zone
- ✅ **const**: Block Scope, Immutable Reference
- ✅ การเปรียบเทียบพฤติกรรมใน Loops
- ✅ Best Practices และ Performance

### Template System
- ✅ **Template Literals**: String interpolation และ multiline
- ✅ **Tagged Templates**: Custom formatting functions
- ✅ **Expression Support**: Functions และ calculations ใน templates
- ✅ **Performance Tips**: การใช้งานอย่างมีประสิทธิภาพ

### Variable Declaration
- ✅ **Destructuring**: Array และ object destructuring
- ✅ **Type Assertions**: Type casting และ non-null assertions
- ✅ **Declaration Patterns**: Different ways to declare variables
- ✅ **Scope Management**: Advanced scope patterns

### Functions
- ✅ **Function Types**: Declarations, expressions, arrows
- ✅ **Function Overloading**: Multiple function signatures
- ✅ **Generic Functions**: Type-safe reusable functions
- ✅ **Async Functions**: Promises และ async/await
- ✅ **Higher-Order Functions**: Functions that operate on functions

## 💡 Best Practices

1. **ใช้ const เป็นหลัก** - เริ่มด้วย const เสมอ
2. **ใช้ let เมื่อจำเป็น** - เมื่อต้องการ reassign
3. **หลีกเลี่ยง var** - มีปัญหามากมาย
4. **ใช้ TypeScript Strict Mode** - เพื่อความปลอดภัย
5. **ใช้ Type Annotations** - ทำให้โค้ดชัดเจน

## 🔧 Scripts

- `npm run dev` - รันด้วย ts-node
- `npm run build` - Build TypeScript
- `npm start` - รันไฟล์ที่ build แล้ว
- `npm run build:watch` - Build แบบ watch mode

## 📝 แบบฝึกหัด

ไฟล์ `exercises/practice.ts` มีแบบฝึกหัดดังนี้:
1. TypeScript Basic Types
2. Object และ Interface
3. ทำนายผลลัพธ์ var vs let vs const
4. แก้ไขโค้ดที่มีปัญหา
5. ปรับปรุงโค้ดให้เป็น Best Practices
6. Mini Project - ระบบจัดการนักเรียน

## 🎓 เป้าหมายการเรียนรู้

หลังจากเรียนจบแล้ว คุณจะสามารถ:
- เขียน TypeScript ขั้นพื้นฐานได้
- เข้าใจความแตกต่างระหว่าง var, let, const
- เลือกใช้ตัวแปรประเภทที่เหมาะสม
- หลีกเลี่ยงปัญหาที่พบบ่อยใน JavaScript/TypeScript
- เขียนโค้ดที่ปลอดภัยและมีประสิทธิภาพ

Happy Coding! 🚀