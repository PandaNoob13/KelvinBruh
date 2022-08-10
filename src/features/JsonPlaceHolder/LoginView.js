import React from "react";
import UseLogin from "./UseLogin";

const LoginView = () => {
    const {isLoading, posts, onCreatePost} = UseLogin();
    return (
        <div>
            <h2>{posts.status}</h2>
            <p>{posts.token}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Login</button>
        </div>
    )
}
export default LoginView;