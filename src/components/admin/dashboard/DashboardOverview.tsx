"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SimpleBarChart } from "./SimpleBarChart";
import { SimplePieChart } from "./SimplePieChart";
import { SimpleLineChart } from "./SimpleLineChart";
import { SimpleAreaChart } from "./SimpleAreaChart";

// Sample data for charts
const barChartData = [
  { name: "Action", value: 45, percentage: 75, color: "#3b82f6" },
  { name: "Comedy", value: 32, percentage: 53, color: "#10b981" },
  { name: "Drama", value: 28, percentage: 47, color: "#f59e0b" },
  { name: "Horror", value: 15, percentage: 25, color: "#ef4444" },
];

const pieChartData = [
  { name: "Screen 1", value: 120, percentage: 30, color: "#3b82f6" },
  { name: "Screen 2", value: 100, percentage: 25, color: "#10b981" },
  { name: "Screen 3", value: 80, percentage: 20, color: "#f59e0b" },
  { name: "Screen 4", value: 100, percentage: 25, color: "#ef4444" },
];

const lineChartData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1400 },
  { name: "Mar", value: 1100 },
  { name: "Apr", value: 1600 },
  { name: "May", value: 1800 },
  { name: "Jun", value: 2000 },
];

const areaChartData = [
  { name: "Week 1", value: 400 },
  { name: "Week 2", value: 600 },
  { name: "Week 3", value: 800 },
  { name: "Week 4", value: 1200 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-2">
          🎬 Welcome to Cinema Admin Dashboard
        </h2>
        <p className="text-muted-foreground text-lg">
          Manage your cinema operations from here.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <span className="text-2xl">🎬</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                +20.1%
              </Badge>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <span className="text-2xl">👤</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                +15.2%
              </Badge>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Bookings Today
            </CardTitle>
            <span className="text-2xl">🎟️</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                +12.5%
              </Badge>{" "}
              from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <span className="text-2xl">💰</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-green-600">
                +8.2%
              </Badge>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <SimpleBarChart
          title="Movies by Genre"
          description="Distribution of movies across different genres"
          data={barChartData}
        />
        <SimplePieChart
          title="Screen Utilization"
          description="Booking distribution across screens"
          data={pieChartData}
        />
        <SimpleLineChart
          title="Monthly Revenue Trend"
          description="Revenue growth over the past 6 months"
          data={lineChartData}
        />
        <SimpleAreaChart
          title="Weekly Bookings"
          description="Booking trends for the current month"
          data={areaChartData}
        />
      </div>
    </div>
  );
}
