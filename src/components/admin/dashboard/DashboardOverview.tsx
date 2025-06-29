"use client";

import { StatsCard, ActivityFeed } from "../index";

const sampleActivities = [
  {
    id: "1",
    message: "New movie added: &quot;Avatar 3&quot;",
    timestamp: "2 hours ago",
    type: "info" as const,
  },
  {
    id: "2",
    message: "User John Doe booked tickets",
    timestamp: "4 hours ago",
    type: "success" as const,
  },
  {
    id: "3",
    message: "Showtime updated for Screen 2",
    timestamp: "6 hours ago",
    type: "warning" as const,
  },
  {
    id: "4",
    message: "Payment failed for booking #1234",
    timestamp: "8 hours ago",
    type: "error" as const,
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1E201E] mb-2">
          🎬 Welcome to Cinema Admin Dashboard
        </h2>
        <p className="text-[#1E201E] text-lg">
          Manage your cinema operations from here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Movies"
          value={245}
          change="+20.1% from last month"
          changeType="positive"
        />
        <StatsCard
          title="Active Users"
          value="1,234"
          change="+15.2% from last month"
          changeType="positive"
        />
        <StatsCard
          title="Bookings Today"
          value={89}
          change="+12.5% from yesterday"
          changeType="positive"
        />
        <StatsCard
          title="Revenue"
          value="$12,345"
          change="+8.2% from last month"
          changeType="positive"
        />
      </div>

      <ActivityFeed activities={sampleActivities} />
    </div>
  );
}
