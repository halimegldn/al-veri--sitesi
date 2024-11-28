import db from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(contact: Request) {
    try {
        const body = await contact.json();
        console.log(body); // Log the request body to check if it contains email and message
        const { email, message } = body;
        const newMessage = await db.contacts.create({
            data: {
                email,
                message,
            },
        });
        return NextResponse.json({ message: "User successfully created" });
    } catch (error) {
        console.error(error); // Log error if any
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
