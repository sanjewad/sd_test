


export async function getProducts(){
  console.log(">>>> "+ process.env.NEXT_PUBLIC_API_URL)
  return await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/load/products`,{
    method: "GET",
  })
}