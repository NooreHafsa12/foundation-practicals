const students = [
  { id: 1, name: "Shaik Noore Hafsa", course: "B.Tech CSE", email: "shaik.noorehafsa@gmail.com" },
  { id: 2, name: "Ayesha Khan", course: "B.Tech IT", email: "ayesha@example.com" },
  { id: 3, name: "Priya Sharma", course: "B.Tech ECE", email: "priya@example.com" },
];

function Students() {
  return (
    <section className="page">
      <h1>Students</h1>

      <div className="student-grid">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Students;