'use client'
import React from 'react';
import blogPostsData from '../../data/blogPosts.json'


const page = ({params: {id,string}}) => {
 
const post = blogPostsData.find(p => p.id.toString() === id)
    return (
        <div>
            {post.img}
            <h1>{post.title}</h1>
            <p>Date: {post.date}</p>
            <div>{post.content}</div>
        </div>
    );
};

export async function generateStaticParams(){
    return blogPostsData.map((p)=>({
        id: p.id.toString(),
    }))
}

export default page;