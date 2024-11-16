import axios from "axios"
import { Appbar } from "../component/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center">

            <div className="max-w-screen-lg w-full px-6 mt-8">

                <label className="block mb-2 text-3xl font-semibold text-gray-900">Title</label>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your blog Title should be here" />

                <TextEditor onChange={(e) => {
                    setContent(e.target.value)
                }} />

            </div>
        </div>

        <div className="flex flex-col justify-center mt-16">
            <div className="flex justify-center">
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers : {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Publish post</button>
            </div>

        </div>

    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <div className="flex justify-center pt-6">
        <div className="w-full max-w-screen-lg">

            <label className="block mb-2 text-3xl font-medium text-gray-900">Your article</label>
            <textarea onChange={onChange} rows={4} className="block p-2.5 h-full w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your article here..."></textarea>

        </div>
    </div>
}