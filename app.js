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

}

