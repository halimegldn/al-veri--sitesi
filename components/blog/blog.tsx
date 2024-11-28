"use client"
import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const images = [
    "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-4.jpg&w=1080&q=75",
    "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-5.jpg&w=1080&q=75",
    "https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-6.jpg&w=1080&q=75"
];

export default function BlogPage() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const handlePageChange = (page: React.SetStateAction<number>) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-32 w-3/4">
            {currentPage === 1 && (
                <>
                    <div className="flex-col justify-center pb-10">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-3.jpg&w=1080&q=75" className="mb-10" />
                        <p className="text-4xl mb-5">How to Clean Your Home Faster and More Efficiently</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <Link href="/blog/details"><Button className="rounded-2xl">Read More</Button></Link>
                    </div>
                    <div className="flex-col justify-center pb-10">
                        <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fblog-big-2.jpg&w=1080&q=75" className="mb-10" />
                        <p className="text-4xl mb-5">Four Ways a Clean Workplace Makes Employees Happy and Healthy</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <Link href="/blog/details"><Button className="rounded-2xl">Read More</Button></Link>
                    </div>
                    <div className="flex-col justify-center pb-10">
                        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width="100%" height="400px" className="mb-10"></iframe>
                        <p className="text-4xl mb-5">Four Ways a Clean Workplace Makes Employees Happy and Healthy</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <Link href="/blog/details"><Button className="rounded-2xl">Read More</Button></Link>
                    </div>
                </>
            )}
            {currentPage === 2 && (
                <div className="flex-col justify-center bg-background">
                    <Carousel className="w-full pt-[80px]">
                        <CarouselContent>
                            {images.map((src, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1 static">
                                        <img src={src} alt={`Resim ${index + 1}`} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <p className="text-4xl mb-5">Four Ways a Clean Workplace Makes Employees Happy and Healthy</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <Link href="/blog/details"><Button className="rounded-2xl">Read More</Button></Link>
                </div>
            )}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(1)} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => handlePageChange(2)} isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(2)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
