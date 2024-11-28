import prisma from "@/db/db";
import { unstable_noStore as noStore } from "next/cache";

export async function getProducts() {
    noStore();

    try {
        const products = await prisma.products.findMany({
            orderBy: { createdAt: "desc" },
        });
        return products;
    } catch (error) {
        console.error("Veritabanı Hatası:", error);
        throw new Error("Denetimler yüklenirken bir hata oluştu.");
    }
}

export async function getProductsById(id: string) {
    noStore();

    try {
        const product = await prisma.products.findUnique({
            where: { id }
        });
        return product;
    } catch (error) {
        console.error("Veritabanı Hatası:", error);
        throw new Error("Denetim yüklenirken bir hata oluştu.");
    }
}