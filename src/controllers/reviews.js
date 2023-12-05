export async function getReviews() {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews/`
  const response = await fetch(apiEndpoint, { method: "GET" })
  return await response.json()
}
