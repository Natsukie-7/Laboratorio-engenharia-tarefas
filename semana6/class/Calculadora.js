class Calculator {
    constructor(rootElement) {
        this.root = rootElement;
        this.currentInput = "0"; 
        this.operator = null; 
        this.firstOperand = null;
        this.isNegative = false;

        this.createCalculator();
    }

    createCalculator() {
        this.calculator = document.createElement("div");
        this.calculator.classList.add("calculator");

        this.display = document.createElement("div");
        this.display.classList.add("display");
        this.display.textContent = this.currentInput;

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons");

        const buttons = [
            ["C", "+/-", "%", "/"],
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ",", "<", "="]
        ];

        buttons.forEach(row => {
            const rowDiv = document.createElement("div");
            row.forEach(buttonText => {
                const button = document.createElement("button");
                button.textContent = buttonText;
                rowDiv.appendChild(button);
            });
            buttonsContainer.appendChild(rowDiv);
        });

        this.calculator.appendChild(this.display);
        this.calculator.appendChild(buttonsContainer);
        this.root.appendChild(this.calculator);

        this.addButtonListeners(buttonsContainer);
    }

    updateDisplay() {
        this.display.textContent = this.currentInput;
    }

    handleNumber(number) {
        if (this.currentInput === "0") {
            this.currentInput = number;
        } else {
            this.currentInput += number;
        }
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.firstOperand === null) {
            this.firstOperand = parseFloat(this.currentInput);
            this.operator = op;
            this.currentInput = "0";
        } else {
            this.firstOperand = this.performCalculation(this.firstOperand, parseFloat(this.currentInput), this.operator);
            this.operator = op;
            this.currentInput = "0";
        }
    }

    performCalculation(firstOperand, secondOperand, operator) {
        switch (operator) {
            case "+":
                return firstOperand + secondOperand;
            case "-":
                return firstOperand - secondOperand;
            case "*":
                return firstOperand * secondOperand;
            case "/":
                if (secondOperand === 0) {
                    return "Error";
                }
                return firstOperand / secondOperand;
            case "%":
                return firstOperand % secondOperand;
            default:
                return secondOperand;
        }
    }

    calculate() {
        if (this.operator !== null) {
            this.currentInput = this.performCalculation(this.firstOperand, parseFloat(this.currentInput), this.operator).toString();
            this.firstOperand = null;
            this.operator = null;
        }
        this.updateDisplay();
    }

    clearDisplay() {
        this.currentInput = "0";
        this.firstOperand = null;
        this.operator = null;
        this.updateDisplay();
    }

    toggleSign() {
        if (this.currentInput.startsWith("-")) {
            this.currentInput = this.currentInput.slice(1);
        } else {
            this.currentInput = "-" + this.currentInput;
        }
        this.updateDisplay();
    }

    addComma() {
        if (!this.currentInput.includes(",")) {
            this.currentInput += ",";
        }
        this.updateDisplay();
    }

    eraseLastNumber() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = "0";
        }
        this.updateDisplay();
    }

    addButtonListeners(buttonsContainer) {
        buttonsContainer.querySelectorAll("button").forEach(button => {
            const buttonText = button.textContent;

            if (buttonText === "C") {
                button.addEventListener("click", () => this.clearDisplay());
            } else if (buttonText === "+/-") {
                button.addEventListener("click", () => this.toggleSign());
            } else if (buttonText === "%") {
                button.addEventListener("click", () => this.handleOperator(buttonText));
            } else if (buttonText === "=") {
                button.addEventListener("click", () => this.calculate());
            } else if (["/", "*", "-", "+"].includes(buttonText)) {
                button.addEventListener("click", () => this.handleOperator(buttonText));
            } else if (buttonText === ",") {
                button.addEventListener("click", () => this.addComma());
            } else if (buttonText === "<") {
                button.addEventListener("click", () => this.eraseLastNumber());
            } else {
                button.addEventListener("click", () => this.handleNumber(buttonText));
            }
        });
    }
}
