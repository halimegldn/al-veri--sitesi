"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Users } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function LoginPage({ users }: { users: Users[] }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const findUser = users.find(user => user.email === email); //Email olup olmasığını kontrol etme
        if (!findUser) {
            alert("Email bulunamadı");
            return;
        }
        const findPassword = await bcrypt.compare(password, findUser.password); //Şifre karşılaştırması
        if (findPassword) {
            router.push("/");
        }
        else {
            alert("Lütfen geçerli şifre giriniz");
            setEmail("");
            setPassword("");
        }

    }
    return (
        <div className="m-auto w-1/2">
            <div className="flex justify-between shadow-2xl w-11/12 m-auto p-24 mb-16 border">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="grid text-center">
                        <span className="text-3xl">Sign in Shofy.</span>
                        <span className="text-sm py-2">Don’t have an account?<Link href="/pages/register" className="hover:text-green-800"> Create a free account</Link></span>
                        <span className="text-sm border-t py-2">Sign in with<Link href="/pages/login" className="hover:text-green-800"> Email</Link></span>
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Email</Label>
                        <Input placeholder="Your Email" type="email" className="p-6 mb-3" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Password</Label>
                        <Input placeholder="Your Password" type="password" className="p-6 mb-3" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button className="bg-black w-full rounded-none py-6 hover:bg-green-800" type="submit">Login</Button>

                </form>
            </div>
        </div>
    )
}




