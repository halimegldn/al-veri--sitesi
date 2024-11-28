import BlogPage from "@/components/blog/blog";
import BlogCard from "@/components/blog/blog-card";
import BlogImages from "@/components/blog/blog-images";

const Blog = () => {
    return (
        <div className="pt-24">
            {/* <BlogImages /> */}
            <div className="flex">
                <BlogPage />
                <BlogCard />
            </div>
        </div>
    );
};

export default Blog;
