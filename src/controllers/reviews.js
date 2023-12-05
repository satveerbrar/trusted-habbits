export async function getReviews() {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews/`
  const response = await fetch(apiEndpoint, { method: "GET" })
  return await response.json()
}

export async function postReview(reviewData) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews/`
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  })
  return await response.json()
}
