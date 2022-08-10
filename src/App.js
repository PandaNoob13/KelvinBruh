import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState({})
  const [isLoading, setLoading] = useState(false)
  const getPostById = async () => {
    try {
      const response = await client.get('/posts/1')
      setPosts(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const createPost = async () => {
    setLoading(true)
    try {
      const response = await client.post('/posts', {
        title: 'Hello World',
        body: 'Yoiii'
      })
      setPosts(response.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect( () => {
    getPostById();
  }, [])
  return (
    <div className="App">
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
export default App;
