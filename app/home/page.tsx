 import React from "react";
 import Link from "next/link";
 const HomePage=()=>{
  const blogs=[
    {
      id:1,
      title:"blog1"
    },
    {
      id:2,
      title:"blog2"
    },
    {
      id:3,
      title:"blog3"
    },
    {
      id:4,
      title:"blog4"
    }
  ]
return( 
  <div className="border border-black h-80">
    <h1 className="text-4xl text-center mt-10">Welcome to the home page</h1>
    <ul className="text-center mt-10 flex flex-col">
      {blogs.map((blog)=>(
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)
}
export default HomePage;