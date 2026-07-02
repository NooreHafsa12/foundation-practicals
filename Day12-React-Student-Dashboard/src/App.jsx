import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Shaik Noore Hafsa",
      course: "B.Tech CSE",
      email: "shaik.noorehafsa@gmail.com",
    },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app">
      <Header total={students.length} />
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;