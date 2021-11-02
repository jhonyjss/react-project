export const PostCard = (post) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2 className="font-semibold text-lg">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
