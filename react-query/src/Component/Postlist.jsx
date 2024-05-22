import { useQuery } from '@tanstack/react-query'
import React from 'react'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const Postlist = () => {
  const { data: postData, error, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return (
    <div className='container'>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>{error?.message}</p>}

      {postData && postData.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Postlist;
