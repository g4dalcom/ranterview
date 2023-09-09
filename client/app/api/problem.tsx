export const getAllProblems = async () => {
  const response = await fetch('http://localhost:8080/api/problem');
  return response.json();
};
