import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function MutualFundCalculator() {
  const [investment, setInvestment] = useState(100000)
  const [returnRate, setReturnRate] = useState(12)
  const [timePeriod, setTimePeriod] = useState(5)
  const [estReturns, setEstReturns] = useState(0)

  useEffect(() => {
    const returns = investment * Math.pow((1 + returnRate / 100), timePeriod) - investment
    setEstReturns(Math.round(returns))
  }, [investment, returnRate, timePeriod])

  const data = [
    { name: 'Total Investment', value: investment },
    { name: 'Est. Returns', value: estReturns },
  ]

  const COLORS = ['#6366f1', '#10b981']

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Mutual Fund Returns Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="investment">Total Investment</Label>
              <div className="flex items-center">
                <span className="mr-2">₹</span>
                <Input
                  id="investment"
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                />
              </div>
              <Slider
                value={[investment]}
                onValueChange={(value) => setInvestment(value[0])}
                max={1000000}
                step={1000}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="returnRate">Expected Return Rate</Label>
              <div className="flex items-center">
                <Input
                  id="returnRate"
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                />
                <span className="ml-2">%</span>
              </div>
              <Slider
                value={[returnRate]}
                onValueChange={(value) => setReturnRate(value[0])}
                max={30}
                step={0.1}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="timePeriod">Time Period</Label>
              <div className="flex items-center">
                <Input
                  id="timePeriod"
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                />
                <span className="ml-2">Yr</span>
              </div>
              <Slider
                value={[timePeriod]}
                onValueChange={(value) => setTimePeriod(value[0])}
                max={30}
                step={1}
                className="mt-2"
              />
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-indigo-500 mr-2"></div>
                <span>Total Investment</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-500 mr-2"></div>
                <span>Est. Returns</span>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Total Investment</span>
                <span className="font-bold">₹{investment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Returns</span>
                <span className="font-bold">₹{estReturns.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total Value</span>
                <span>₹{(investment + estReturns).toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">INVEST NOW</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}