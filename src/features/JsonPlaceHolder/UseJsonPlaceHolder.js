import { useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { useEffect } from "react";

const UseJsonPlaceHolder = () => {
    const {jsonPlaceHolderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    useEffect(()=>{
        console.log(posts);
        if (posts.token != null){
            console.log(posts.token);
            localStorage.setItem("token", posts.token)
        }
    }, [posts])
    const onCreatePost = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceHolderService.createPost({
                username: 'admin', 
                password: '1234'
            });
            setPosts(response)
        } catch (error) {
            setPosts({
                status: "UNAUTHORIZED"
            })
        } finally {
            setLoading(false);
        }
    }
    return {
        isLoading, posts, onCreatePost
    }
}
export default UseJsonPlaceHolder;