import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b py-4">
        <Link to={"/blogs"} className="flex justify-center items-center">
            <div className="cursor-pointer">
                Medium
            </div>
        </Link>

        <div className="flex justify-center">
            <Link to={"/publish"}>
                <div>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
                </div>
            </Link>
            <Avatar size={"big"} name="Sam" />
        </div>

    </div>
}