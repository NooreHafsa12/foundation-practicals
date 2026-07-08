const students = require("../models/studentModel");

// GET ALL
exports.getStudents = (req, res) => {
  res.status(200).json(students);
};

// GET BY ID
exports.getStudentById = (req, res) => {
  const student = students.find(
    (s) => s.id == req.params.id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
};

// ADD
exports.addStudent = (req, res) => {
  students.push(req.body);

  res.status(201).json({
    message: "Student added successfully",
    student: req.body
  });
};

// UPDATE
exports.updateStudent = (req, res) => {
  const index = students.findIndex(
    (s) => s.id == req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students[index] = req.body;

  res.json({
    message: "Student updated successfully"
  });
};

// DELETE
exports.deleteStudent = (req, res) => {
  const index = students.findIndex(
    (s) => s.id == req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students.splice(index, 1);

  res.json({
    message: "Student deleted successfully"
  });
};