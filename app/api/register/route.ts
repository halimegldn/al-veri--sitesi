import db from "@/db/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        const existingUserByEmail = await db.users.findUnique({
            where: { email: email },
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "Email already in use" }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.users.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });


        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User successfully created" });
    } catch (error) {
        console.error("Kullanıcı oluşturulurken hata oluştu:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
