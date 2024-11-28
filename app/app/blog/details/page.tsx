import BlogPage from "@/components/blog/blog";
import BlogCard from "@/components/blog/blog-card";
import BlogDetails from "@/components/blog/blog-details"
import Link from "next/link";

const Details = () => {
    return (
        <div className="pt-64">

            <div className="grid justify-center">
                <Link href="/blog/details" className="hover:text-green-800 text-lg pb-5">Beauty,Trends</Link>
                <span className="text-6xl max-w-6xl pb-16">How to Clean Your Home Faster and More Efficiently</span>
                <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fdetails%2Fblog-big-1.jpg&w=1200&q=75" />
                <div className="text-center text-white">
                    <p className="text-4xl">Our Blog</p>
                    <Link href="/" className="text-lg">Home</Link>
                </div>
            </div>
            <div className="flex">
                <BlogDetails />
                <BlogCard />
            </div>
        </div>
    )
}
export default Details;