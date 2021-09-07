const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	
	
	// addition
	if (mathSymbol === "+") {
		console.log(num1 + num2);
	}
	
	// subtraction
	else if (mathSymbol === "-") {
		console.log(num1 - num2);
	}
	
	// multiplication
	else if (mathSymbol === "*") {
		console.log(num1 + num2);
	}

	// division
	else if (mathSymbol === "/") {
		console.log(num1 + num2);
	}

	// square root
	else if (mathSymbol === "√") {
		console.log(Math.sqrt(num1));
	}
	
	// This line closes the connection to the command line interface.
	reader.close()

});