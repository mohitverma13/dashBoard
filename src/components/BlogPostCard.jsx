import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"

// Sample blog post data
const blogPosts = [
    { title: 'Blended Learning: What It Is, Why It Matters & How to Apply', daysAgo: 7 },
    { title: 'Join the Course Sales Bootcamp [Free Live Workshops]', daysAgo: 12 },
    { title: '12 Steps to Creating Awesome Live Classes in 2021', daysAgo: 20 },
    { title: 'Guy Kawasaki on the Future of Business in the Midst of a Pandemic', daysAgo: 22 },
    { title: 'What is Educational Marketing & How to Use It to Grow with Examples', daysAgo: 23 },
]

export default function BlogPostCard() {
    return (
        <Card className='flex flex-col w-[20rem]'>
            <CardHeader className='flex flex-row justify-start items-center'>
                <h4 className=" text-left flex justify-center items-center text-base gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    How to sell courses blog</h4>
                <button className='bg-[#3bd7c5] rounded-xl text-sm w-[50px] flex items-center justify-center mx-2'> see all</button>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {blogPosts.map((post, index) => (
                        <li key={index} className="flex flex-col sm:flex-row sm:justify-between">
                            <a href="#" className="text-sm text-teal-500 hover:underline">{post.title}</a>
                            <span className="text-xs text-gray-500 mt-1 sm:mt-0">{post.daysAgo} days ago</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}