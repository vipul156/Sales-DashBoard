"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-balance">Sales Analytics Dashboard</h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Visualize and analyze your sales data from 2022 to 2024 with interactive charts and custom filters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Multiple Chart Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Switch between bar, line, and pie charts to visualize your data in different ways
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Year Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Compare sales performance across 2022, 2023, and 2024 with detailed metrics
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Custom Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Set custom sales thresholds to filter and focus on specific data ranges
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8">
              View Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
