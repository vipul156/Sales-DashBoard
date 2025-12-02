"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import SalesBarChart from "@/components/charts/sales-bar-chart"
import SalesLineChart from "@/components/charts/sales-line-chart"
import SalesPieChart from "@/components/charts/sales-pie-chart"
import ChartControls from "@/components/charts/chart-controls"
import StatsCards from "@/components/dashboard/stats-cards"
import { getSalesData } from "@/lib/sales-data"

export default function DashboardPage() {
  const [chartType, setChartType] = useState("bar")
  const [threshold, setThreshold] = useState(0)
  const salesData = getSalesData()

  const filteredData = salesData.filter((item) => item.total >= threshold)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sales Dashboard</h1>
          <p className="text-muted-foreground">Analyze sales performance from 2022 to 2024</p>
        </div>

        <StatsCards data={salesData} />

        <Card className="p-6 mb-6">
          <ChartControls
            chartType={chartType}
            setChartType={setChartType}
            threshold={threshold}
            setThreshold={setThreshold}
          />
        </Card>

        <Card className="p-6">
          {chartType === "bar" && <SalesBarChart data={filteredData} />}
          {chartType === "line" && <SalesLineChart data={filteredData} />}
          {chartType === "pie" && <SalesPieChart data={filteredData} />}
        </Card>
      </div>
    </div>
  )
}
