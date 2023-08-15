import Link from 'next/link';
import React from 'react';

const getPosts = async ()=> {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const res = await fetch(url)
    const data = await res.json()
    return data 
}

const page = async () => {
    const posts = await getPosts()
  

    return (
        <div className="container mx-auto">
            blog page
            <div className="mt-4">
                <ul>
                    {
                        posts.map(item => {
                            return (
                              <li className="mb-4" key={item.id}>
                                <h5 className="text-xl ">
                                  {" "}
                                  <span className="mr-2">{item.id}.</span>
                                  <Link
                                    className="hover:text-red-400"
                                    href={{ pathname: `/blogs/${item.id}` ,
                                  //   query:{blogId: item.id}
                                    }}
                                  >
                                    {item.title}{" "}
                                  </Link>
                                </h5>
                              </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default page;