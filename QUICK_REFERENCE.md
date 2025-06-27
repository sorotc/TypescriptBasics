# TypeScript Quick Reference

## 🚀 Quick Start Commands

```bash
# ติดตั้ง dependencies
npm install

# รันบทเรียนทั้งหมด
npm run dev

# Build TypeScript
npm run build

# รันไฟล์เฉพาะ
npx ts-node src/01-typescript-basics.ts
```

## 📝 Variable Declaration Cheat Sheet

### var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes | No (TDZ) | No (TDZ) |
| Re-declaration | Yes | No | No |
| Re-assignment | Yes | Yes | No |
| Initialization | Optional | Optional | Required |

### Best Practices

```typescript
// ✅ ใช้ const เป็นหลัก
const name = "สมชาย";
const users = ["สมชาย", "สมหญิง"];

// ✅ ใช้ let เมื่อต้องการ reassign
let counter = 0;
counter++;

// ❌ หลีกเลี่ยง var
var oldWay = "ไม่แนะนำ";
```

## 🎯 Template Literals

```typescript
const name = "สมชาย";
const age = 25;

// Basic interpolation
const message = `สวัสดี ${name} อายุ ${age} ปี`;

// Multiline
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;

// Expressions
const calculation = `ผลลัพธ์: ${10 + 5 * 2}`;

// Tagged templates
function currency(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `฿${values[i]}` : '';
    return result + string + value;
  }, '');
}

const price = currency`ราคา ${100} บาท`;
```

## 🔧 Destructuring

```typescript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, city = "กรุงเทพ" } = person;

// Nested destructuring
const { address: { street, zipCode } } = user;

// Function parameters
function greet({ name, age }: { name: string; age: number }) {
  return `สวัสดี ${name} อายุ ${age} ปี`;
}
```

## ⚡ Functions

```typescript
// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, title?: string): string {
  return `สวัสดี${title ? ` ${title}` : ''} ${name}`;
}

// Default parameters
function createUser(name: string, age: number = 25): User {
  return { name, age };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Async function
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}
```

## 🎭 Function Overloading

```typescript
// Overload signatures
function process(input: string): string;
function process(input: number): number;
function process(input: boolean): boolean;

// Implementation
function process(input: string | number | boolean): any {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return input * 2;
  if (typeof input === "boolean") return !input;
}
```

## 🔄 Type Assertions

```typescript
// as syntax (แนะนำ)
const value = (someValue as string).toUpperCase();

// angle bracket syntax
const length = (<string>someValue).length;

// Non-null assertion
const element = document.getElementById("id")!;
```

## 🏗️ Interface และ Types

```typescript
// Interface
interface User {
  name: string;
  age: number;
  email?: string; // optional
  readonly id: number; // readonly
}

// Type alias
type Status = "active" | "inactive" | "pending";

// Function type
type Calculator = (a: number, b: number) => number;

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

## 🎪 Common Patterns

### Module Pattern
```typescript
const MyModule = (function() {
  let privateVar = 0;
  
  return {
    increment() { privateVar++; },
    getCount() { return privateVar; }
  };
})();
```

### Memoization
```typescript
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
```

### Pipe Pattern
```typescript
const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T): T =>
  fns.reduce((acc, fn) => fn(acc), value);

const transform = pipe(addOne, double, square);
```

## 🐛 Common Pitfalls

### 1. var ใน Loop
```typescript
// ❌ ปัญหา
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10); // 3, 3, 3
}

// ✅ แก้ไข
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10); // 0, 1, 2
}
```

### 2. Object Mutation
```typescript
// ❌ ปัญหา
const config = { debug: true };
config.debug = false; // mutation

// ✅ แก้ไข
const config = Object.freeze({ debug: true });
// หรือใช้ readonly ใน interface
```

### 3. Type Assertions
```typescript
// ❌ อันตราย
const element = document.getElementById("id") as HTMLElement;
element.click(); // อาจเกิด error ถ้า element เป็น null

// ✅ ปลอดภัย
const element = document.getElementById("id");
if (element) {
  element.click();
}
```

## 🎯 TypeScript Compiler Options

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 📚 Useful Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [ESLint TypeScript Rules](https://typescript-eslint.io/rules/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

Happy Coding with TypeScript! 🚀
