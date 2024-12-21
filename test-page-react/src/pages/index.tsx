import { useEffect, useState } from "react";

export default function Home() {

const[product, setProduct] =  useState('');

useEffect(() => {
  (async () => {
    try{
    const response = await fetch('/api/load/products')
    const data = await response?.json()
    setProduct(data)
    console.log(product)
    }catch(e){
      console.log(">>>>"+ e)
    }
  })();
}, []);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
            This is page from Sanj
        </div>
      </main>
      <footer/>
    </div>
  );
}
