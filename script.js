function calculatefact() {
            // Prompt user for input
            let num = prompt("Enter a number to calculate its factorial:");
            
            // Validate input
            if (num === null || num === "") {
                document.getElementById("result").innerHTML = "No input provided!";
                return;
            }
            
            num = parseInt(num);
            
            if (isNaN(num)) {
                document.getElementById("result").innerHTML = "Please enter a valid number!";
                return;
            }
            
            if (num < 0) {
                document.getElementById("result").innerHTML = "Factorial not defined for negative numbers!";
                return;
            }
            
            // Calculate factorial
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            
            // Display result
            document.getElementById("result").innerHTML = `<strong>${num}! = ${factorial}</strong>`;
        }