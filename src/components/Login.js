import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_collection/IN-en-20241202-TRIFECTA-b3419e13-4d62-4763-9dd8-cd8b9bc0f321_large.jpg" alt="Banner-Img"/>
            </div>
            <form className="absolute bg-black p-10 w-4/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85 ">
                <h1 className="font-bold text-xl py-3 m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm && ( 
                    <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-700 rounded-lg"/>
                ) }
                <input type="email" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700 rounded-lg"/>
                <input type="password" placeholder="Password" className="p-2 m-2  w-full bg-gray-700 rounded-lg"/>
                <button className="p-2 mx-2 my-5 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
                <p className="mx-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </>
    );
}
export default Login;