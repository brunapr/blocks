export async function getFamilies(skip: number, take:number) {
  const response = await fetch(`https://test-candidaturas-front-end.onrender.com/families?skip=${skip}&take=${take}`);
  const jsonData = await response.json();
  return jsonData;
}