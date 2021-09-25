const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  tokens = input.toLowerCase().split(" ");

  mathSymbol = tokens[0];
  num1 = Number(tokens[1]);
  num2 = Number(tokens[2]);

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  } else if (mathSymbol === "-") {
    console.log(num1 - num2);
  } else if (mathSymbol === "*" || mathSymbol === "x") {
    console.log(num1 * num2);
  } else if (mathSymbol === "/" || mathSymbol === "divide") {
    console.log(num1 / num2);
  } else if (
    mathSymbol === "[]" ||
    mathSymbol === "square" ||
    mathSymbol === "^"
  ) {
    console.log(num1 * num1);
  } else {
    console.log("incorrect input try again");
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
