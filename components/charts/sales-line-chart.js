"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SalesLineChart({ data }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Sales Trend (Line Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="year" stroke="hsl(var(--foreground))" />
          <YAxis stroke="hsl(var(--foreground))" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Total Sales"]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="hsl(var(--chart-2))"
            strokeWidth={3}
            name="Total Sales"
            dot={{ fill: "hsl(var(--chart-2))", r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
