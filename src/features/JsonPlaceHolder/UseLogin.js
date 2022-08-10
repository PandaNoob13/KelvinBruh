import { useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { useEffect } from "react";

const UseJsonPlaceHolder = () => {
    const {loginService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    useEffect(()=>{
        console.log(posts);
        if (posts.token != null){
            console.log(posts.token);
            localStorage.setItem("token", posts.token)
        } else {
            localStorage.removeItem("token")
        }
    }, [posts])
    const onCreatePost = async () => {
        setLoading(true);
        try {
            const response = await loginService.createPost({
                username: username, 
                password: password
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
        isLoading, posts, onCreatePost, username, handleUsernameChange, password, handlePasswordChange
    }
}
export default UseJsonPlaceHolder;