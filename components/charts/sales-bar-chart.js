"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SalesBarChart({ data }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Sales by Year (Bar Chart)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
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
          <Bar dataKey="total" fill="hsl(var(--chart-1))" name="Total Sales" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
