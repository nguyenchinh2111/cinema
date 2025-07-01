"use client";

import { StatsCard, StatisticalFeed } from "../index";


const statistics = [
  {
    id: "1",
    label: "Total Movies",
    value: 245,
    change: 20.1,
    changeType: "increase" as const,
    icon: "🎬",
  },
  {
    id: "2",
    label: "Active Users",
    value: 1234,
    change: 15.2,
    changeType: "increase" as const,
    icon: "👤",
  },
  {
    id: "3",
    label: "Bookings Today",
    value: 89,
    change: 12.5,
    changeType: "increase" as const,
    icon: "🎟️",
  },
  {
    id: "4",
    label: "Revenue",
    value: 12345,
    change: 8.2,
    changeType: "increase" as const,
    icon: "💰",
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
      <StatisticalFeed statistics={statistics} />
    </div>
  );
}
