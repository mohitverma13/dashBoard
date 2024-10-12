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
                <h3 className="text-lg font-semibold text-left">How to sell courses blog</h3>
                <button className='bg-[#3bd7c5] rounded-xl text-sm w-[50px] flex items-center justify-center mx-2'> see all</button>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {blogPosts.map((post, index) => (
                        <li key={index} className="flex flex-col sm:flex-row sm:justify-between">
                            <a href="#" className="text-sm text-teal-500 hover:underline">{post.title}</a>
                            <span className="text-sm text-gray-500 mt-1 sm:mt-0">{post.daysAgo} days ago</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}