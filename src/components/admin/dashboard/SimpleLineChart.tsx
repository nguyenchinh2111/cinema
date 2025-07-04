"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LineChartData {
  name: string;
  value: number;
}

interface SimpleLineChartProps {
  title: string;
  description?: string;
  data: LineChartData[];
}

export function SimpleLineChart({
  title,
  description,
  data,
}: SimpleLineChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Simple line chart visualization */}
          <div className="h-32 flex items-end justify-between border-b border-l border-gray-200 p-4">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div
                  className="w-2 bg-blue-500 rounded-t"
                  style={{
                    height: `${(item.value / maxValue) * 80}px`,
                  }}
                ></div>
                <span className="text-xs text-muted-foreground transform -rotate-45">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Data points */}
          <div className="grid grid-cols-2 gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
