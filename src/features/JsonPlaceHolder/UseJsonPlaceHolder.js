import { useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { useEffect } from "react";

const UseJsonPlaceHolder = () => {
    const {jsonPlaceHolderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});
    useEffect( () => {
        onGetPostById();
    }, [])
    const onGetPostById = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceHolderService.getPostById('1')
            setPosts(response)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const onCreatePost = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceHolderService.createPost({
                title: 'Hello Samuel', 
                body: 'Yoiii'
            });
            setPosts(response)
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }
    return {
        isLoading, posts, onCreatePost
    }
}
export default UseJsonPlaceHolder;