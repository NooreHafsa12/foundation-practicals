let studentName = "Shaik Noore Hafsa";
let course = "Web and Mobile App Development";
let age = 21;

console.log("Name:", studentName);
console.log("Course:", course);
console.log("Age:", age);

function showMessage() {
    alert("Welcome Noor! JavaScript is working.");
}

function calculateMarks() {
    let marks = prompt("Enter your marks:");

    marks = Number(marks);

    if (marks >= 90) {
        alert("Grade: A+");
    } else if (marks >= 75) {
        alert("Grade: A");
    } else if (marks >= 60) {
        alert("Grade: B");
    } else if (marks >= 40) {
        alert("Grade: C");
    } else {
        alert("Fail");
    }
}

function simpleCalculator() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let division = num1 / num2;

    alert(
        "Sum: " + sum +
        "\nDifference: " + difference +
        "\nProduct: " + product +
        "\nDivision: " + division
    );
}

let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);

let student = {
    name: "Noor",
    branch: "CSE",
    goal: "Developer"
};

console.log(student);