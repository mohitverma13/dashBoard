import React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
const BelowNav = () => {
    const [activeTab, setActiveTab] = useState('new-signups')
    return (
        <div className='flex'>
            {/* left part */}
            <div className='w-4/5'>
                <Card className="mb-8">
                    {/* <CardHeader>
                    <CardTitle>Your school</CardTitle>
                </CardHeader> */}
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <div className='flex justify-between'>
                            <CardHeader>
                                <CardTitle>Your school</CardTitle>
                            </CardHeader>
                            <TabsList>
                                <TabsTrigger value="new-signups">New signups</TabsTrigger>
                                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                                <TabsTrigger value="product-sales">Product sales</TabsTrigger>
                                <TabsTrigger value="active-learners">Active learners</TabsTrigger>
                            </TabsList>
                            </div>
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
            </div>

            {/* right part */}
            <div className='flex-1/4'>
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
            </div>
        </div>
    )
}

export default BelowNav
