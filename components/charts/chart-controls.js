"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, LineChartIcon, PieChart } from "lucide-react"

export default function ChartControls({ chartType, setChartType, threshold, setThreshold }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Chart Type</h3>
        <div className="flex gap-3 flex-wrap">
          <Button
            variant={chartType === "bar" ? "default" : "outline"}
            onClick={() => setChartType("bar")}
            className="gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Bar Chart
          </Button>
          <Button
            variant={chartType === "line" ? "default" : "outline"}
            onClick={() => setChartType("line")}
            className="gap-2"
          >
            <LineChartIcon className="w-4 h-4" />
            Line Chart
          </Button>
          <Button
            variant={chartType === "pie" ? "default" : "outline"}
            onClick={() => setChartType("pie")}
            className="gap-2"
          >
            <PieChart className="w-4 h-4" />
            Pie Chart
          </Button>
        </div>
      </div>

      <div>
        <Label htmlFor="threshold" className="text-lg font-semibold mb-3 block">
          Sales Threshold Filter
        </Label>
        <div className="flex gap-3 items-center">
          <Input
            id="threshold"
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            placeholder="Enter minimum sales amount"
            className="max-w-xs"
          />
          <Button variant="secondary" onClick={() => setThreshold(0)}>
            Reset Filter
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Filter sales data to show only years with sales above this threshold
        </p>
      </div>
    </div>
  )
}
