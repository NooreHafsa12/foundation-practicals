function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "65%" },
    { name: "Flutter", level: "70%" },
    { name: "Git & GitHub", level: "80%" },
  ];

  return (
    <section className="card">
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>
          <div className="bar">
            <div style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;