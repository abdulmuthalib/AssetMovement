export function StatCard({
  label,
  value,
  trend,
  tone,
}: {
  label: string;
  value: string;
  trend: string;
  tone: 'trend-up' | 'trend-down';
}) {
  return (
    <div className="stat-card">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
      <div className="meta">
        <span className={tone}>{trend}</span>
        <span>vs. last month</span>
      </div>
    </div>
  );
}
