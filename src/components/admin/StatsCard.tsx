interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "positive",
}: StatsCardProps) {
  const changeColor = {
    positive: "text-green-400",
    negative: "text-red-400",
    neutral: "text-slate-400",
  }[changeType];

  return (
    <div className="rounded-lg border border-slate-700 backdrop-blur-sm text-slate-700 shadow-lg p-6 hover:bg-slate-800/70 transition-colors">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium text-slate-700">
          {title}
        </h3>
      </div>
      <div className="text-2xl font-bold text-slate-700">{value}</div>
      <p className={`text-xs ${changeColor}`}>{change}</p>
    </div>
  );
}
