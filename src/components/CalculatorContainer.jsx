import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Share, Twitter, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import MutualFundCalculator from './MutualFundCalculator'

export default function CalculatorContainer() {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    const shareOptions = [
        { name: 'WhatsApp', icon: FaWhatsapp, color: 'bg-green-500' },
        { name: 'Twitter', icon: Twitter, color: 'bg-blue-400' },
        { name: 'Instagram', icon: Instagram, color: 'bg-pink-500' },
    ]

    return (
        <Card className='h-[10rem]'>
            <CardHeader className='flex flex-row justify-start items-center'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-slate-800 text-white' variant="outline">Open Mutual Fund Calculator</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
                        <MutualFundCalculator />
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Button
                    variant="outline"
                    onClick={() => setIsShareModalOpen(true)}
                    className='bg-slate-500'
                >
                    <Share className="mr-2 h-4 w-4" /> Invite
                </Button>
            </CardContent>

            <Dialog open={isShareModalOpen} onOpenChange={setIsShareModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <h2 className="text-2xl font-semibold mb-6">Share Calculator</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {shareOptions.map((option) => (
                            <Button
                                key={option.name}
                                variant="outline"
                                className={`flex flex-col items-center justify-center p-4 ${option.color} text-white hover:opacity-90`}
                                onClick={() => {
                                    // Add actual sharing logic here
                                    console.log(`Sharing via ${option.name}`)
                                }}
                            >
                                <option.icon className="h-8 w-8 mb-2" />
                                {option.name}
                            </Button>
                        ))}
                    </div>
                    <Button onClick={() => setIsShareModalOpen(false)} className="mt-6 w-full">Close</Button>
                </DialogContent>
            </Dialog>
        </Card>
    )
}