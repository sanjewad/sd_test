import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { getProducts } from "@/server/servercall";
import handler from "./api/hello";


export default function Home() {

const[product, setProduct] =  useState('');

useEffect(() => {
  (async () => {
    try{
    const response = await fetch('/api/load/products')
    const data = await response?.json()
    setProduct(data)
    }catch(e){
      console.log(">>>>"+ e)
    }
  })();
}, []);

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          {product}
        </div>
      </main>
      <footer/>
    </div>
  );
}
