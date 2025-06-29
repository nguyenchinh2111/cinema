interface Activity {
  id: string;
  message: string;
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getStatusColor = (type: Activity["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white backdrop-blur-sm text-[#1E201E] shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-[#1E201E]">
          Recent Activities
        </h3>
        <div className="mt-4 space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div
                className={`w-2 h-2 rounded-full ${getStatusColor(
                  activity.type
                )}`}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1E201E]">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
