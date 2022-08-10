import React from "react";
import UseJsonPlaceHolder from "./UseJsonPlaceHolder";

const JsonPlaceHolderView = () => {
    const {isLoading, posts, onCreatePost} = UseJsonPlaceHolder();
    return (
        <div>
            <h2>{posts.status}</h2>
            <p>{posts.token}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Login</button>
        </div>
    )
}
export default JsonPlaceHolderView;