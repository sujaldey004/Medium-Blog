import { Circle } from "./BlogCard"
export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">

        <div className="p-4 border-b-2 pb-4 mt-2 cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col w-screen max-w-screen-md">
                    <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2 mt-1">
                    <Circle />
                </div>
                <div className="pl-2 text-md font-thin text-zinc-600">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold mt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="font-thin text-md text-slate-600">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>

            <div className="text-zinc-600 text-sm mt-2 mb-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>

        </div>
        <span className="sr-only">Loading...</span>
    </div>
}