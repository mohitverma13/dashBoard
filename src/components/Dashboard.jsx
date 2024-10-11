import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, RefreshCcw, ShoppingBag, Clock, FileText, Layers, User } from 'lucide-react'

const data = [
    { date: '2021-02-03', users: 0 },
    { date: '2021-02-04', users: 0 },
    { date: '2021-02-05', users: 0 },
    { date: '2021-02-06', users: 0 },
    { date: '2021-02-07', users: 0 },
    { date: '2021-02-08', users: 0 },
    { date: '2021-02-09', users: 1 },
]

const blogPosts = [
    { title: 'Blended Learning: What It Is, Why It Matters & How to Apply', days: 7 },
    { title: 'Join the Course Sales Bootcamp [Free Live Workshops]', days: 12 },
    { title: '12 Steps to Creating Awesome Live Classes in 2021', days: 20 },
    { title: 'Guy Kawasaki on the Future of Business in the Midst of a Pandemic', days: 22 },
    { title: 'What is Educational Marketing & How to Use It to Grow with Examples', days: 23 },
]

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('new-signups')

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="space-x-2">
                    <Button variant="outline">Create course</Button>
                    <Button variant="outline">Preview home page</Button>
                    <Button variant="outline">Preview after login page</Button>
                    <Button variant="outline">View welcome screen</Button>
                    <Button variant="outline">Help</Button>
                </div>
            </header>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Your school</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList>
                            <TabsTrigger value="new-signups">New signups</TabsTrigger>
                            <TabsTrigger value="revenue">Revenue</TabsTrigger>
                            <TabsTrigger value="product-sales">Product sales</TabsTrigger>
                            <TabsTrigger value="active-learners">Active learners</TabsTrigger>
                        </TabsList>
                        <TabsContent value="new-signups">
                            <ChartContainer
                                config={{
                                    users: {
                                        label: "New Users",
                                        color: "hsl(var(--primary))",
                                    },
                                }}
                                className="h-[300px]"
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <ChartTooltip content={<ChartTooltipContent />} />
                                        <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-8 mb-8">
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <Users className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">All users</p>
                                <p className="text-2xl font-bold">1</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <RefreshCcw className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">Conversions</p>
                                <p className="text-2xl font-bold">0%</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <ShoppingBag className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">30 days sales</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <Clock className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">Avg time</p>
                                <p className="text-2xl font-bold">0 min</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <FileText className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">Courses</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <Layers className="h-8 w-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm font-medium">Course categories</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>New users</span>
                            <Button variant="link">see all</Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-4"></div>
                            <div>
                                <p className="font-medium">hubx</p>
                                <p className="text-sm text-gray-500">24 minutes</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>How to sell courses blog</span>
                            <Button variant="link">see all</Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {blogPosts.map((post, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <p className="text-sm">{post.title}</p>
                                    <span className="text-sm text-gray-500">{post.days} days ago</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>Events Log</span>
                                <Button variant="link">see all</Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2" />
                                    <p className="text-sm">hubx</p>
                                </div>
                                <p className="text-sm text-gray-500">22 minutes</p>
                            </div>
                            <p className="text-sm text-primary mt-2">Logged in</p>
                            <Button variant="link" className="text-sm p-0">more info</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Trial period</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <div className="relative w-32 h-32">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-4xl font-bold">30</p>
                                </div>
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    />
                                </svg>
                            </div>
                            <p className="mt-4 text-sm font-medium">DAYS LEFT</p>
                            <Button className="mt-4 bg-pink-500 hover:bg-pink-600">Upgrade now!</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}