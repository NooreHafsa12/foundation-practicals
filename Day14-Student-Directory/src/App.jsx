import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import StudentCard from "./components/StudentCard";
import { fetchStudents } from "./services/api";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents()
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>🎓 Student Directory</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid">
          {filtered.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;