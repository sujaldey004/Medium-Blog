import { Blog } from '../hooks'
import { Appbar } from "./Appbar"
import { Avatar } from './BlogCard'

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className='flex justify-center'>
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">

                <div className="grid col-span-8">
                    <div className='text-4xl font-bold'>
                        {blog.title}
                    </div>
                    <div className='text-slate-500 pt-2'>
                        Posted on 15 November 2024
                    </div>
                    <div className='text-gray-800 pt-4'>
                        {blog.content}
                    </div>
                </div>

                <div className="grid col-span-4">
                    <div className='text-slate-600 flex items-end'>
                        Author
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-center p-2'>
                            <Avatar size="big" name={`${blog.author.name || "Anonymous"}`}/>
                        </div>
                        <div>
                            <div className='text-xl font-bold'>
                            {blog.author.name || "Anonymous"}
                            </div>
                            <div className='pt-2 text-slate-500'>
                                Random catch phrase about the author to catch out user attention
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}