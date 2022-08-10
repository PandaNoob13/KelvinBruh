import React from "react";
import UseLogin from "./UseLogin";

const LoginView = () => {
    const {        isLoading, posts, onCreatePost, username, handleUsernameChange, password, handlePasswordChange
    } = UseLogin();
    return (
        <div>
            <input id="username" placeholder="username" value={username} onChange={handleUsernameChange}/><br/>
            <input id="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
            <h2>{posts.status}</h2>
            <p>{posts.token}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Login</button>
        </div>
    )
}
export default LoginView;