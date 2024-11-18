import { SignupInput } from "@robot004/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const Response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs);
            const jwt = Response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            alert("Error while signing up")
        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center flex-col text-center items-center">
            <div className="text-3xl font-extrabold">
                {type ===  "signup" ? "Create an account" : "Welcome Back"}
            </div>
            <div className="text-zinc-500">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline">{type === "signin" ? "Sign up" : "Sign in"}</Link>
            </div>

            <div className="w-5/12 mt-4">
                {type === "signup" ? <LabelledInput label="Name" placeholder="Sam Asher..." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}

                <LabelledInput label="Email" placeholder="samasher@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />

                <LabelledInput label="Password" type={"password"} placeholder="abc123@#$%" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />

                <button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>



        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="flex mb-2 text-sm font-semibold text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex mb-3 w-full p-2.5" placeholder={placeholder} required />
    </div>
}