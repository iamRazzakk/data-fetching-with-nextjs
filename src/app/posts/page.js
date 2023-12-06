const PostsPage = async () => {
    const res = await fetch('http://localhost:5000/posts',{
        next:{
            revalidate:5
        }
    });
    const posts = await res.json();
    // console.log(posts);
    return (
      <div className="w-full">
        <h1 className="text-3xl text-center">Total post: {posts?.length}</h1>
        {posts?.map(post => (
          <div key={post.id} className="card w-[70%] my-5 mx-auto bg-gray-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default PostsPage;  