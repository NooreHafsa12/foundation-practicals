import { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.course || !student.email) {
      setError("Please fill all fields");
      return;
    }

    addStudent(student);

    setStudent({
      name: "",
      course: "",
      email: "",
    });

    setError("");
  };

  return (
    <section className="card">
      <h2>Add Student</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={student.course}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={student.email}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;