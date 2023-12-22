export async function getProducts(id = null) {
  let apiEndpoint = ""
  if (id == null) {
    apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  } else {
    apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`
  }

  const response = await fetch(apiEndpoint, { method: "GET" })
  return await response.json()
}
