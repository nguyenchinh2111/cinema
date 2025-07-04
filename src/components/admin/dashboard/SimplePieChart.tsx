"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PieChartData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

interface SimplePieChartProps {
  title: string;
  description?: string;
  data: PieChartData[];
}

export function SimplePieChart({
  title,
  description,
  data,
}: SimplePieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Simple visual representation */}
          <div className="flex h-32 items-center justify-center">
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="absolute inset-0 rounded-full border-8 border-transparent"
                  style={{
                    borderTopColor: item.color,
                    transform: `rotate(${data
                      .slice(0, index)
                      .reduce((sum, d) => sum + d.percentage * 3.6, 0)}deg)`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.value} ({item.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
