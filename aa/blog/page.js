import React from 'react';
import Link from 'next/link';
import blogPostsData from '../data/blogPosts.json'
import fs from 'fs';
import path from 'path';

const page = () => {
    return (
        <div>
          <h1>Blog Posts</h1>
          
          <ul className='mt-10'>
            {blogPostsData.map(post => (
              <li key={post.id} className='mt-5'>{post.id}.
                <Link href={`../post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
         
        </div>
      );
    };

    // export async function getStaticProps() {
    //   const filePath = path.join(process.cwd(), 'blogData.json');
    //   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    //   return {
    //     props: {
    //       posts: jsonData,
    //     },
    //   };
    // }
export default page;