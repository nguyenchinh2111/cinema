"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AreaChartData {
  name: string;
  value: number;
}

interface SimpleAreaChartProps {
  title: string;
  description?: string;
  data: AreaChartData[];
}

export function SimpleAreaChart({
  title,
  description,
  data,
}: SimpleAreaChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Simple area chart visualization */}
          <div className="h-32 flex items-end justify-between border-b border-l border-gray-200 p-4 relative">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 relative"
              >
                <div
                  className="w-4 bg-gradient-to-t from-green-500 to-green-300 rounded-t opacity-80"
                  style={{
                    height: `${(item.value / maxValue) * 80}px`,
                  }}
                ></div>
                <span className="text-xs text-muted-foreground">
                  {item.name}
                </span>
              </div>
            ))}

            {/* Area fill effect */}
            <div className="absolute bottom-8 left-4 right-4 h-16 bg-gradient-to-t from-green-100 to-transparent opacity-30 rounded"></div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Total: </span>
              <span className="font-semibold">
                {data.reduce((sum, item) => sum + item.value, 0)}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Average: </span>
              <span className="font-semibold">
                {Math.round(
                  data.reduce((sum, item) => sum + item.value, 0) / data.length
                )}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
