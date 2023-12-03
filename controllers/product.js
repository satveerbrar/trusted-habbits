export async function getProducts() {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`;
  const response = await fetch(apiEndpoint, { method: "GET" });
  return await response.json();
}
