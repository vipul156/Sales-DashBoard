"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Calendar } from "lucide-react"

export default function StatsCards({ data }) {
  const totalSales = data.reduce((sum, item) => sum + item.total, 0)
  const avgSales = totalSales / data.length
  const maxYear = data.reduce((max, item) => (item.total > max.total ? item : max), data[0])

  const growth =
    data.length >= 2 ? (((data[data.length - 1].total - data[0].total) / data[0].total) * 100).toFixed(1) : 0

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalSales.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground mt-1">Across all years</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Sales</CardTitle>
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${avgSales.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
          <p className="text-xs text-muted-foreground mt-1">Per year</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Best Year</CardTitle>
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{maxYear.year}</div>
          <p className="text-xs text-muted-foreground mt-1">${maxYear.total.toLocaleString()} in sales</p>
        </CardContent>
      </Card>
    </div>
  )
}
