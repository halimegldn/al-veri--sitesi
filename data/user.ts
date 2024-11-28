import prisma from "@/db/db";
import { unstable_noStore as noStore } from "next/cache";

export async function getUsers() {
    noStore();

    try {
        const users = await prisma.users.findMany({
            orderBy: { createdAt: "desc" },
        });
        return users;
    } catch (error) {
        console.error("Veritabanı Hatası:", error);
        throw new Error("Denetimler yüklenirken bir hata oluştu.");
    }
}

export async function getUsersById(id: string) {
    noStore();

    try {
        const user = await prisma.users.findUnique({
            where: { id }
        });
        return user;
    } catch (error) {
        console.error("Veritabanı Hatası:", error);
        throw new Error("Denetim yüklenirken bir hata oluştu.");
    }
}