export function getSalesData() {
  return [
    {
      year: "2022",
      total: 1250000,
      products: 15420,
      customers: 8750,
      avgOrderValue: 81.1,
    },
    {
      year: "2023",
      total: 1580000,
      products: 19235,
      customers: 11200,
      avgOrderValue: 141.1,
    },
    {
      year: "2024",
      total: 1920000,
      products: 23180,
      customers: 13840,
      avgOrderValue: 138.7,
    },
  ]
}

// Detailed monthly sales data for potential API integration
export function getDetailedSalesData() {
  return {
    2022: [
      { month: "Jan", sales: 95000, orders: 1170 },
      { month: "Feb", sales: 88000, orders: 1085 },
      { month: "Mar", sales: 102000, orders: 1258 },
      { month: "Apr", sales: 98000, orders: 1208 },
      { month: "May", sales: 110000, orders: 1356 },
      { month: "Jun", sales: 105000, orders: 1295 },
      { month: "Jul", sales: 112000, orders: 1381 },
      { month: "Aug", sales: 108000, orders: 1332 },
      { month: "Sep", sales: 103000, orders: 1270 },
      { month: "Oct", sales: 115000, orders: 1418 },
      { month: "Nov", sales: 120000, orders: 1480 },
      { month: "Dec", sales: 94000, orders: 1167 },
    ],
    2023: [
      { month: "Jan", sales: 118000, orders: 1455 },
      { month: "Feb", sales: 122000, orders: 1504 },
      { month: "Mar", sales: 135000, orders: 1665 },
      { month: "Apr", sales: 128000, orders: 1578 },
      { month: "May", sales: 142000, orders: 1751 },
      { month: "Jun", sales: 138000, orders: 1702 },
      { month: "Jul", sales: 145000, orders: 1788 },
      { month: "Aug", sales: 140000, orders: 1726 },
      { month: "Sep", sales: 132000, orders: 1628 },
      { month: "Oct", sales: 148000, orders: 1825 },
      { month: "Nov", sales: 155000, orders: 1911 },
      { month: "Dec", sales: 177000, orders: 2182 },
    ],
    2024: [
      { month: "Jan", sales: 152000, orders: 1874 },
      { month: "Feb", sales: 148000, orders: 1825 },
      { month: "Mar", sales: 165000, orders: 2035 },
      { month: "Apr", sales: 158000, orders: 1948 },
      { month: "May", sales: 172000, orders: 2121 },
      { month: "Jun", sales: 168000, orders: 2071 },
      { month: "Jul", sales: 175000, orders: 2158 },
      { month: "Aug", sales: 170000, orders: 2096 },
      { month: "Sep", sales: 162000, orders: 1997 },
      { month: "Oct", sales: 178000, orders: 2195 },
      { month: "Nov", sales: 185000, orders: 2281 },
      { month: "Dec", sales: 187000, orders: 2306 },
    ],
  }
}
