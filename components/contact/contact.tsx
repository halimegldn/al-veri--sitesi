"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

export default function ContactPage() {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const contactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, message }),
        });

        const comment = await response.json();

        if (comment.error) {
            alert("Mesaj başarısız")
        } else {
            alert("Mesaj başarılı!");
            setMessage("");
            setEmail("");

        }
    };
    return (
        <div className="flex-col justify-center p-24">
            <div className="text-center pt-24 pb-3">
                <h3 className="font-bold text-4xl">Keep In Touch with Us</h3>
                <Link href="/" className="hover:text-green-800">Home</Link>
            </div>
            <div className="flex justify-between shadow w-11/12 m-auto p-16 mb-16 border">
                <form className="w-3/4" onSubmit={contactSubmit}>
                    <div className="mb-3">
                        <Label className="text-xs">Your Name</Label>
                        <Input placeholder="Your Name" type="name" className="p-6" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Email</Label>
                        <Input placeholder="Your Email" type="email" className="p-6 mb-3" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Subject</Label>
                        <Input placeholder="Your Subject" type="name" className="p-6 mb-3" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Message</Label>
                        <textarea placeholder="Your Message" className="border w-full p-8" onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <Button type="submit" className="bg-black p-5 rounded-none">Send Message</Button>
                </form>
                <div className="flex-col ps-8 my-4">
                    <div className="flex-col text-start mb-7">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact-icon-1.9066600e.png&w=64&q=75" />
                        <div className="hover:text-green-800">
                            <Link href="/" >contact@shofy.com</Link>
                        </div>
                        <div className="hover:text-green-800">
                            <Link href="/" >+670 413 90 762</Link>
                        </div>
                    </div>
                    <div className="flex-col text-start mb-7">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact-icon-2.7114edc9.png&w=96&q=75" />
                        <div className="hover:text-green-800">
                            <Link href="https://www.google.com/maps/place/New+York,+Amerika+Birle%C5%9Fik+Devletleri/@40.6974881,-73.979681,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">84 sleepy hollow st.
                                jamaica, New York 1432</Link>
                        </div>
                    </div>
                    <div className="flex-col text-start">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact-icon-3.a1ff7720.png&w=96&q=75" />
                        <div className="hover:text-green-800">
                            <p>Find on social media</p>
                        </div>
                        <div className="flex mt-2">
                            <div className="border me-2 p-2" ><FaFacebookF /></div>
                            <div className="border me-2 p-2" ><FaTwitter /></div>
                            <div className="border p-2" ><FaLinkedinIn /></div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678114595329!5m2!1sen!2sbd" frameBorder="0" width="92%" height="400px" className="mx-auto" allowFullScreen></iframe>

        </div>
    )
}