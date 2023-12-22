export async function getCart(userId) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart?userId=${userId}`
  const response = await fetch(apiEndpoint, { method: "GET" })
  return await response.json()
}

export async function addItemToCart(cartData) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/`
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData),
  })
  return await response.json()
}
