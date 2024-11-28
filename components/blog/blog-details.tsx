"use client"
import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiVimeoLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

export default function BlogDetails() {

    return (
        <div className="p-32 w-3/4 flex-col">
            <div className="flex justify-center">
                <span className="font-bold text-7xl my-7">S</span>
                <span>ales process is critically important to the success of your reps and your business. If you have never seen a really skilled salesperson work, it seems almost effortless. They ask great questions, craftt perfect proposal, answer questions, address concerns and seamlessly seal the Underneath the surface of all of that, the salesperson has probably dedicated hours honing their craft and ensuring the process moves smoothly.</span>
            </div>
            <span>One of the challenges that often surfaces when working with a remote sales team is a lack of transparency over what is happening, and where in the process things are taking place. We’re going to peel back the curtain and show you how to create the best sales.</span>
            <div className="font-bold text-3xl pt-10 pb-3"><span>Breaking Up With Fast Fashion Has Been Easier</span></div>
            <span>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium, sem. Nulla onsequat massa quis enim. donec pede justo fringilla vel aliquet.</span>
            <div className="pY-10">
                <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fdetails%2Fblog-details-sm-1.jpg&w=640&q=75" className="mx-auto pb-10" />
                <span>“We’re so glad we’ll be working with you to get your new marketing strategy up and running. I have attached the details of your package. Next you’ll get an email from Jen to schedule your kick-off meeting and be assigned your account rep. During your kick-off meeting, we will introduce your project team, let you know what access we need to start.”</span>
            </div>
            <div className="py-10">
                <Card className="h-48 text-white rounded-none" style={{ backgroundColor: "rgb(103, 142, 97)" }}>
                    <CardContent className="flex items-center justify-center h-32">
                        <p className="text-center text-2xl">There is a way out of every box, a solution to every puzzle, it's just a matter of finding it.</p>
                    </CardContent>
                    <CardContent className="">
                        <p className="text-start">- Shahnewaz Sakil.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="">
                <div className="font-bold text-3xl pt-10 pb-3"><span>Exploring the English Countryside</span></div>
                <span>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. Nulla onsequat massa quis enim.</span>
                <ul className="py-10">
                    <li><span>Lorem ipsum dolor sit amet.</span></li>
                    <li><span>At vero eos et accusamus et iusto odio.</span></li>
                    <li><span>Excepteur sint occaecat cupidatat non proident.</span></li>
                </ul>
                <span>Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae lorem.</span>
            </div>
            <div className="flex justify-between">
                <div className="flex  my-10 text-md items-center rounded-none">
                    <span className="font-bold">Tags: </span>
                    <Button className="bg-transparent text-black">Summer</Button>
                    <Button className="bg-transparent text-black">Vintage</Button>
                    <Button className="bg-transparent text-black">Sunglasses</Button>
                    <Button className="bg-transparent text-black">Organic Food</Button>
                    <Button className="bg-transparent text-black">Lifesttyle</Button>
                    <Button className="bg-transparent text-black">Nature</Button>
                </div>
                <div className="flex my-10 text-md items-center">
                    <span className="font-bold">Share: </span>
                    <div className="border-2 p-2 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaFacebookF /></Link></div>
                    <div className="border-2 p-2 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaTwitter /></Link></div>
                    <div className="border-2 p-2 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaLinkedinIn /></Link></div>
                    <div className="border-2 p-2 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><RiVimeoLine /></Link></div>
                </div>
            </div>
            <div className="flex items-start py-7">
                <Avatar className="w-24 h-24">
                    <AvatarImage src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-1.e69f0ea7.jpg&w=256&q=75" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid ms-5">
                    <span className="text-xs">Written by</span>
                    <Link href="/blog/details" className="text-xl font-bold"><span >Theodore Handle</span></Link>
                    <span>By defining and following internal and external processes, your team will have clarity on resources to attract and retain customers for your business.</span>
                    <div className="flex my-10 text-md items-center">
                        <div className="border-2 p-1 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaFacebookF /></Link></div>
                        <div className="border-2 p-1 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaTwitter /></Link></div>
                        <div className="border-2 p-1 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><FaLinkedinIn /></Link></div>
                        <div className="border-2 p-1 hover:bg-green-800 hover:text-white"><Link href="/blog/details"><RiVimeoLine /></Link></div>
                    </div>
                </div>
            </div>
            <div>
                <form className="full">
                    <div className="mb-3">
                        <Label className="text-xs">Your Name</Label>
                        <Input placeholder="Your Name" type="name" className="p-6" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Email</Label>
                        <Input placeholder="Your Email" type="email" className="p-6 mb-3" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-xs">Your Message</Label>
                        <textarea placeholder="Your Message" className="border w-full p-8"></textarea>
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
                    <Button className="p-5 rounded-none bg-green-800 hover:bg-black">Post Comment</Button>
                </form>
            </div>
        </div>
    );
}
