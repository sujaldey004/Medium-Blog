import { Appbar } from "../component/Appbar"
import { BlogCard } from "../component/BlogCard"
import { BlogSkeleton } from "../component/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <div>
                <Appbar />
            </div>
            <div className="flex justify-center flex-col items-center">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div>
                {
                    blogs.map(blog => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"15 Nov 2024"}
                    />)
                }
            </div>
        </div>
    </div>
}