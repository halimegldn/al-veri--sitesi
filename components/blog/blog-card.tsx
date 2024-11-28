import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
const categories: { title: string, number: string, href: string }[] = [
    { title: "Farming", number: "12", href: "/blog" },
    { title: "Crisp Bread & Cake", number: "6", href: "/blog" },
    { title: "Milk & Meal", number: "2", href: "/blog" },
    { title: "Orange Fruits", number: "8", href: "/blog" },
    { title: "Sea Foods", number: "0", href: "/blog" },
    { title: "Vegetable", number: "3", href: "/blog" }
]
export default function BlogCard() {
    return (
        <div className="flex flex-col pt-32 w-1/5">
            <div className="flex border mb-10 ">
                <Input placeholder="Search" className="me-3" />
                <CiSearch className="m-auto text-xl" />
            </div>
            <div className="text-center">
                <Card className="p-4 rounded-none">
                    <CardHeader>
                        <Avatar className="w-1/2 h-1/2 mx-auto static">
                            <AvatarImage src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-1.e69f0ea7.jpg&w=256&q=75" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle>Ravi O'Leigh</CardTitle>
                        <CardDescription>Photographer & Blogger</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient!</p>
                    </CardContent>
                    <CardFooter>
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignature.691f176b.png&w=256&q=75" />
                    </CardFooter>
                </Card>
            </div>
            <div className="text-start text-sm">
                <Card className="p-6 rounded-none mt-10">
                    <Link href="/blog/details">
                        <CardContent className="flex border-b-2 mb-3">
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-3.jpg&w=96&q=75" />
                            <div className="flex-col hover:text-green-800 ms-3">
                                <p>July 21, 2023</p>
                                <p>How to Clean Your Home Faster ...</p>
                            </div>
                        </CardContent>
                    </Link>
                    <Link href="/blog/details">
                        <CardContent className="flex">
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-3.jpg&w=96&q=75" />
                            <div className="flex-col hover:text-green-800 ms-3">
                                <p>July 21, 2023</p>
                                <p>How to Clean Your Home Faster ...</p>
                            </div>
                        </CardContent>
                    </Link>
                </Card>
            </div>
            <div className="text-start text-sm mt-10">
                <Card className="p-6 rounded-none">
                    {categories.map((item) =>
                        <Link href={item.href}>
                            <CardContent className="flex justify-between hover:text-green-800 mb-1">
                                <p>{item.title}</p>
                                <p>({item.number})</p>
                            </CardContent>
                        </Link>
                    )}
                </Card>
                <div className="text-start text-sm mt-10">
                    <div className="font-bold text-lg">
                        <p>Popular Tags</p>
                    </div>
                    <div className="flex-col border-t-2 mt-3 mb-20">
                        <Button className="bg-transparent text-black">Summer</Button>
                        <Button className="bg-transparent text-black">Vintage</Button>
                        <Button className="bg-transparent text-black">Sunglasses</Button>
                        <Button className="bg-transparent text-black">Organic Food</Button>
                        <Button className="bg-transparent text-black">Lifesttyle</Button>
                        <Button className="bg-transparent text-black">Nature</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}