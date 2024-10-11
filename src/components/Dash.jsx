import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Users, RefreshCcw, ShoppingBag, BookOpen, Tag } from 'lucide-react';
import heartbeat from './../assets/heartbeat.svg'

const data = [
    { date: '2021-02-03', users: 0 },
    { date: '2021-02-04', users: 0 },
    { date: '2021-02-05', users: 0 },
    { date: '2021-02-06', users: 0 },
    { date: '2021-02-07', users: 0 },
    { date: '2021-02-08', users: 0 },
    { date: '2021-02-09', users: 1 },
];

const blogPosts = [
    { title: 'Blended Learning: What It Is, Why It Matters & How To Apply', daysAgo: 7 },
    { title: 'Join the Course Sales Bootcamp [Free Live Workshops]', daysAgo: 12 },
    { title: '12 Steps to Creating Awesome Live Classes in 2021', daysAgo: 20 },
    { title: 'Guy Kawasaki on the Future of Business in the Midst of a Pandemic', daysAgo: 22 },
    { title: 'What is Educational Marketing & How to Use It to Grow with Examples', daysAgo: 23 },
];

const Dashboard = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <header className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="flex space-x-2">
                    <Button variant="outline">Create course</Button>
                    <Button variant="outline">Preview home page</Button>
                    <Button variant="outline">Preview after login page</Button>
                    <Button variant="outline">View welcome screen</Button>
                </div>
            </header>

            <div className='flex'>

                <Card className="mb-6 w-10/12">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <h2 className="text-xl">Your school</h2>
                            <div className="flex space-x-2">
                                <Button variant="ghost" className="text-teal-500 border-b-2 border-teal-500">New signups</Button>
                                <Button variant="ghost">Revenue</Button>
                                <Button variant="ghost">Product sales</Button>
                                <Button variant="ghost">Active learners</Button>
                                <select className="border rounded px-2 py-1">
                                    <option>Last 7 days</option>
                                </select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Line type="monotone" dataKey="users" stroke="#14b8a6" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-2 mb-6 ">
                    <Card>
                        <CardContent className="flex items-center justify-center p-4">
                            <div className="flex items-center flex-col justify-center">
                                <Users className="w-6 h-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">All users</p>
                                    <p className="text-2xl">1</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center justify-center p-4">
                            <div className="flex items-center flex-col justify-center">
                                <RefreshCcw className="w-6 h-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Conversions</p>
                                    <p className="text-2xl">0%</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center justify-center p-4">
                            <div className="flex items-center flex-col justify-center">
                                <ShoppingBag className="w-8 h-8 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">30 days sales</p>
                                    <p className="text-2xl">0</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="outline-none">
                        <CardContent className="flex items-center justify-center p-4 ">
                            <div className="flex items-center flex-col justify-center">
                                <Clock className="w-6 h-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Avg time</p>
                                    <p className="text-2xl items-center">0<sub className='text-sm'>min</sub></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center justify-center p-4">
                            <div className="flex items-center flex-col justify-center">
                                <BookOpen className="w-6 h-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500">Courses</p>
                                    <p className="text-2xl">0</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex items-center justify-center p-4">
                            <div className="flex items-center flex-col justify-center">
                                <Tag className="w-6 h-6 text-gray-400 mr-2" />
                                <div>
                                    <p className="text-sm text-gray-500 text-center">Course categories</p>
                                    <p className="text-2xl">0</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-4  gap-4">
                <Card className='h-[10rem]'>
                    <CardHeader className='flex flex-row justify-start items-center'>
                        <Users className="w-6 h-6 text-gray-400 mr-2" />
                        <h4>New users</h4>
                        <button className='bg-[#3bd7c5] rounded-xl text-sm w-[50px] flex items-center justify-center mx-2'> see all</button>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Avatar className="mr-2">
                                <AvatarImage src="/placeholder-avatar.jpg" />
                                <AvatarFallback>HX</AvatarFallback>
                            </Avatar>

                            <div className='flex flex-col justify-start items-start'>
                                <p className="font">hubx</p>
                                <p className="text-sm text-gray-500">24 minutes ago</p>
                            </div>

                            {/* <div className='flex'>
                                <div className="w-[40px] h-[40px] bg-gray-00 text-center flex justify-center items-center">
                                    <div>HX</div>
                                </div>

                                <div className='flex flex-col justify-start items-start'>
                                <p className="font">hubx</p>
                                <p className="text-sm text-gray-500">24 minutes ago</p>
                                </div>
                            </div> */}


                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">How to sell courses blog</h3>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {blogPosts.map((post, index) => (
                                <li key={index} className="text-sm">
                                    <a href="#" className="text-teal-500 hover:underline">{post.title}</a>
                                    <span className="text-gray-500 ml-2">{post.daysAgo} days ago</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card className='h-[10rem]'>
                    <CardHeader className='flex flex-row justify-start items-center'>
                        <img src={heartbeat} alt="" height={30} width={30} />
                        <h4 className='ml-2'>Event log</h4>
                        <button className='bg-[#3bd7c5] rounded-xl text-sm w-[50px] flex items-center justify-center mx-2'> see all</button>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between'>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mt-2">
                                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                            </svg>

                            <div className='flex flex-col justify-start items-start'>
                                <p className="text-[#56ccc0]">hubx</p>
                                <p className="text-sm text-gray-500">Logged in</p>
                                <p className="text-sm text-[#56ccc0]">more info</p>
                            </div>
                        </div>
                        <p className="text-gray-500 ml-2 text-sm">22min ago</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Trial period</h3>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-8 border-teal-500 rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-3xl font-bold">30</p>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">DAYS LEFT</p>
                        <Button className="mt-4 bg-pink-500 text-white">Upgrade now!</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;