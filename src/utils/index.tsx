const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

const percentage = (num: number): number => {
  return num / 100;
};

const toggleSign = (num: number): number => {
  return -num;
};

export { add, subtract, multiply, divide, percentage, toggleSign };
