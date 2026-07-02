function StudentCard({ student }) {
  const handleProfile = () => {
    alert(
      `Student Profile\n\nName: ${student.name}\nEmail: ${student.email}\nCompany: ${student.company.name}\nCity: ${student.address.city}`
    );
  };

  return (
    <div className="card">
      <div className="avatar">{student.name.charAt(0)}</div>

      <h2>{student.name}</h2>
      <p>📧 {student.email}</p>
      <p>🏫 {student.company.name}</p>
      <p>🌍 {student.address.city}</p>

      <button onClick={handleProfile}>View Profile</button>
    </div>
  );
}

export default StudentCard;