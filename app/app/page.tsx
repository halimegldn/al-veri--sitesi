import Footer from "@/components/footer/footer";
import HomePage from "@/components/home/home";
import { getProducts } from "@/data/product";
import Image from "next/image";

export default async function Home() {
  const product = await getProducts();
  return (
    <div>
      <HomePage data={product} />
    </div>
  )
}
