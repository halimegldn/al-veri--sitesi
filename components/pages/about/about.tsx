"ues client"
import * as React from "react";
import { BiSolidLike, BiSolidUser, BiSolidTruck, BiSolidMedal } from "react-icons/bi";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BlogImages from "@/components/blog/blog-images";
import { LuCrown } from "react-icons/lu";

const images = [
    { image: "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhistory%2Fhistory-1.jpg&w=640&q=75", year: "2016" },
    { image: "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhistory%2Fhistory-2.jpg&w=640&q=75", year: "2017" },
    { image: "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhistory%2Fhistory-1.jpg&w=640&q=75", year: "2018" },
];

export default function AboutPage() {

    return (
        <div className="flex-col justify-center w-4/5 mx-auto">
            <div className="text-5xl py-10 pt-32 max-w-3xl">
                <span>Well-coordinated Teamwork Speaks About Us</span>
            </div>
            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-big-1.58c58029.jpg&w=1200&q=75" />
            <div className="py-10">
                <span className="">We are thrilled to offer you a wide range of products that you wont find anywhere else. Whether you are shopping for clothing, accessories, gadgets, or home decor, we have something for everyone.</span>
            </div>
            <div className="pb-20">
                <span>Our commitment to quality is reflected in every product we offer. We work with top suppliers and manufacturers to ensure that every item we sell meets our high standards for durability, performance, and style. And with a user-friendly interface and intuitive navigation, shopping on our site is a breeze. We understand that security is a top concern for online shoppers, which is why we employ the latest encryption technologies and follow industry best practices to keep your personal information safe. And with fast, reliable shipping options, you can enjoy your purchases in no time.</span>
            </div>
            <div className="flex justify-between">
                <div className="flex justify-center items-center">
                    <BiSolidLike />
                    <div className="flex-col">
                        <div className="text-5xl">
                            <span>750+</span>
                        </div>
                        <span>Happy Customers</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <BiSolidUser />
                    <div className="flex-col">
                        <div className="text-5xl">
                            <span>2016</span>
                        </div>
                        <span>Founding Year</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <BiSolidTruck />
                    <div className="flex-col">
                        <div className="text-5xl">
                            <span>120+</span>
                        </div>
                        <span>Product Orders</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <BiSolidMedal />
                    <div className="flex-col">
                        <div className="text-5xl">
                            <span>60+</span>
                        </div>
                        <span>Quality Products</span>
                    </div>
                </div>
            </div>
            <div className="flex py-32">
                <div className="grid p-10">
                    <span className="text-3xl font-bold">About our Online Store</span>
                    <span>At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.</span>
                    <span>So start browsing today and find the perfect products to suit your needs!</span>
                </div>
                <div>
                    <Carousel className="">
                        <CarouselContent>
                            {images.map((index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <img src={index.image} alt={""} />
                                    </div>
                                    <div className="text-3xl pt-10 text-center">{index.year}</div>
                                </CarouselItem>

                            ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="grid p-10">
                <span className="mx-auto text-4xl font-bold max-w-xs text-center">Take a Look at our Team's Work</span>
                <div className="flex py-10">
                    <div className="border grid p-14 me-5 hover:border-black">
                        <LuCrown className="text-3xl" />
                        <span>We have something for everyone.</span>
                    </div>
                    <div className="border grid p-14 me-5 hover:border-black">
                        <LuCrown className="text-3xl" />
                        <span>We have something for everyone.</span>
                    </div>
                    <div className="border grid p-14 me-5 hover:border-black">
                        <LuCrown className="text-3xl" />
                        <span>We have something for everyone.</span>
                    </div>
                    <div className="border grid p-14 me-5 hover:border-black">
                        <LuCrown className="text-3xl" />
                        <span>We have something for everyone.</span>
                    </div>
                </div>
            </div>
            <div className="grid">
                <BlogImages />
            </div>
        </div>
    )
}