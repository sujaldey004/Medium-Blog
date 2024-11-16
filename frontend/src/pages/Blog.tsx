import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../component/Fullblog";
import { Appbar } from "../component/Appbar";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar/>

            <div className="flex justify-center h-screen flex-col">
                <div className="flex justify-center">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>

        </div>
    }

    return <div>
        <FullBlog blog={blog} />
    </div>
}