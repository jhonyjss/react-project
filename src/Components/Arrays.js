import { Component } from 'react';

class Arrays extends Component {
  state = {
    posts: []
  }
  
  componentDidMount(){
    this.loadPosts()
  }
  
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
    
    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);
    console.log(posts)
    
    const postsJson = await posts.json()
    const photosJson = await photos.json()
    
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })
    
    this.setState({ posts: postsAndPhotos })
  }
  
  render() { 
    const { posts } = this.state
    return (
    <section className="container">
      <div className="posts">
        {posts.map(post => (
          <div className="post">
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className="post-content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
  }
}
 
export default Arrays;