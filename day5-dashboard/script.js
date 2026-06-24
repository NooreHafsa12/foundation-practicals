const form = document.querySelector("#studentForm");
const studentList = document.querySelector("#studentList");
const count = document.querySelector("#count");

let students = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const course = document.querySelector("#course").value;
    const marks = document.querySelector("#marks").value;

    const student = {
        name: name,
        course: course,
        marks: marks
    };

    students.push(student);

    displayStudents();
    form.reset();
});

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Course: ${student.course}</p>
            <p>Marks: ${student.marks}</p>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;

        studentList.appendChild(card);
    });

    count.textContent = students.length;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}