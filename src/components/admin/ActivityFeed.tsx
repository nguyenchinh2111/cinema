interface StatisticalData {
  id: string;
  label: string;
  value: number;
  change: number;
  changeType: "increase" | "decrease" | "neutral";
  icon?: string;
}

interface StatisticalFeedProps {
  statistics: StatisticalData[];
}

export function StatisticalFeed({ statistics }: StatisticalFeedProps) {
  const getChangeColor = (changeType: StatisticalData["changeType"]) => {
    switch (changeType) {
      case "increase":
        return "text-green-600";
      case "decrease":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getChangeIcon = (changeType: StatisticalData["changeType"]) => {
    switch (changeType) {
      case "increase":
        return "↗";
      case "decrease":
        return "↘";
      default:
        return "→";
    }
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white backdrop-blur-sm text-[#1E201E] shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-[#1E201E]">
          Statistics Overview
        </h3>
        <div className="mt-4 space-y-4">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {stat.icon && <div className="text-xl">{stat.icon}</div>}
                <div>
                  <p className="text-sm font-medium text-[#1E201E]">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-[#1E201E]">
                    {stat.value.toLocaleString()}
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center space-x-1 ${getChangeColor(
                  stat.changeType
                )}`}
              >
                <span className="text-lg">
                  {getChangeIcon(stat.changeType)}
                </span>
                <span className="text-sm font-medium">
                  {Math.abs(stat.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
