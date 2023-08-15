'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import posts from '../../../data/blogData.json'

// const getSinglePost = async (postId)=> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const data = await res.json()
//     return data 
// }

const Page = ({ searchParams }) => {
   // const [post, setPost] = useState({})
     const { postId } = searchParams;

    // useEffect(() => {
    //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPost(data)
    //   })
    // }, [postId])

    const post = posts.find(post => post.id === parseInt(postId))
  
  return (
    <div className="container mx-auto">
       <div className="p-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>Post-{postId}</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold ">
          Title: <span className="capitalize"> {post.title}</span>
        </h3>
        <div>
          <p className="mt-4">
            <strong>Detail:</strong> {post.content}
          </p>
        </div>
        <div className="flex justify-end w-full">
          <div className="bg-violet-200 p-2 rounded-xl">
            <span className="capitalize">user Id</span>:{post.userId}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Page;