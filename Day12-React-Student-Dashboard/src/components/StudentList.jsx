import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  return (
    <section className="card">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;