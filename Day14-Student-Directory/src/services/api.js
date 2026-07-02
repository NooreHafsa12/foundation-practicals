export async function fetchStudents() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Unable to fetch students");
  }

  return await response.json();
}