function StudentCard({ student, deleteStudent }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>

      <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;