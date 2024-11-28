"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (data.error) {
            alert("kayıt başarısız")
        } else {
            alert("Kayıt başarılı!");
            router.push("/pages/login");
        }
    };

    return (
        <div className="m-auto w-1/2">
            <div className="flex justify-between shadow-2xl w-11/12 m-auto p-24 mb-16 border">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="grid text-center">
                        <span className="text-3xl">Sign Up Shofy.</span>
                        <span className="text-sm py-2">Already have an account?<Link href="/pages/register" className="hover:text-green-800">Sign In</Link></span>
                        <span className="text-sm border-t py-2">Sign up with<Link href="/pages/login" className="hover:text-green-800"> Email</Link></span>
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Name</Label>
                        <Input placeholder="Your Name" type="name" className="p-6 mb-3" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Email</Label>
                        <Input placeholder="Your Email" type="email" className="p-6 mb-3" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Password</Label>
                        <Input placeholder="Your Password" type="password" className="p-6 mb-3" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center space-x-2 mb-5">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I accept the terms of the Service & Privacy Policy.</label>
                    </div>
                    <Button type="submit" className="bg-black w-full rounded-none py-6 hover:bg-green-800">Sign Up</Button>
                </form>
            </div>
        </div>
    )
}



