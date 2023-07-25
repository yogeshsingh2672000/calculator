const add = (a: number, b: number): number => {
  console.log("add");
  return a + b;
};

const subtract = (a: number, b: number): number => {
  console.log("subtract");
  return a - b;
};

const multiply = (a: number, b: number): number => {
  console.log("multiply");
  return a * b;
};

const divide = (a: number, b: number): number => {
  console.log("divide");
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

const percentage = (num: number): number => {
  console.log("percentage");
  return num / 100;
};

const toggleSign = (num: number): number => {
  console.log("toggleSign");
  return -num;
};

export { add, subtract, multiply, divide, percentage, toggleSign };
