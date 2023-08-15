import Link from 'next/link';
import React from 'react';
import { getPosts } from './api/routes';
import classes from './page.module.css'




const page =  () => {
  
    const posts =  getPosts()
  

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
                                    className={classes.blogTitle}
                                    href={{ pathname: `/blogs/post` ,
                                   query:{postId: item.id}
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