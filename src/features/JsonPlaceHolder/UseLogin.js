import { useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { useEffect } from "react";

const UseJsonPlaceHolder = () => {
    const {loginService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        let username = 'admin';
        let password = '1234'
        setUsername(username)
        setPassword(password)
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
        isLoading, posts, onCreatePost, username, password
    }
}
export default UseJsonPlaceHolder;