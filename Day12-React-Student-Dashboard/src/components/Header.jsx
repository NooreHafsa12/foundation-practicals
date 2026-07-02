function Header({ total }) {
  return (
    <header className="header">
      <h1>Student Management Dashboard</h1>
      <p>Day 12 - Components, Props & State in React</p>
      <h3>Total Students: {total}</h3>
    </header>
  );
}

export default Header;