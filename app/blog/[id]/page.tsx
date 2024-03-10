"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function BlogPage() {
    const pathname = usePathname();
    const id = pathname ? pathname.split("/").pop() : null;
    
    return (
    <div className="h-80">
        <div>Blog:{id}</div>
        <Link href={`/blog/${id}/image`}><div>see blog image</div></Link>
    </div>
)
}