class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  valid(numbers) {
    if (numbers.some(i => i <= 0) || ((numbers.sort()[2] * 2) > numbers.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr)))) alert("Invalid Triangle");
    else if (numbers.every(i => !isNaN(i))) this.triangle(numbers);
  }
  triangle(numbers) {
    if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) alert("Equilateral");
    else if (numbers.sort().some((i, index) => i === numbers[index + 1])) alert("Isosceles");
    else if (numbers.every(i => numbers.indexOf(i) === numbers.lastIndexOf(i))) alert("Scalene");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const number1 = prompt("Enter the first number : ");
  const number2 = prompt("Enter the second number : ");
  const number3 = prompt("Enter the third number : ");

})
