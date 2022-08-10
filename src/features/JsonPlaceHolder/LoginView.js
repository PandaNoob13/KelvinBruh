import React from "react";
import UseLogin from "./UseLogin";

const LoginView = () => {
    const {isLoading, posts, onCreatePost, username, password} = UseLogin();
    return (
        <div>
            <h4>Username: {username}</h4>
            <h4>Password: {password}</h4>
            <h2>{posts.status}</h2>
            <p>{posts.token}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Login</button>
        </div>
    )
}
export default LoginView;