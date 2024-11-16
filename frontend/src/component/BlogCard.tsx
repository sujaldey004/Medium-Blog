import { Link } from "react-router-dom"

interface BlogCardPros {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardPros) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b-2 pb-4 mt-2 cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col w-screen max-w-screen-md">
                    <Avatar name={authorName} />
                </div>
                <div className="pl-2 font-light text-md">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2 mt-1">
                    <Circle />
                </div>
                <div className="pl-2 text-md font-thin text-zinc-600">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold mt-2">
                {title}
            </div>
            <div className="font-thin text-md text-slate-600">
                {content.slice(0, 100) + "..."}
            </div>

            <div className="text-zinc-600 text-sm mt-2 mb-2">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>

        </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`} >
            {name[0]}
        </span>
    </div >
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-zinc-400">

    </div>
}