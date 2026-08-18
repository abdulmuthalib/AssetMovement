import { PageShell } from '@/components/page-shell';
import { StatCard } from '@/components/stat-card';
import { activityRows, requestRows, stats } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <PageShell
      title="Dashboard"
      subtitle="Overview of asset movement, approvals, and availability across the organization."
      actions={
        <>
          <button className="secondary-btn">Export PDF</button>
          <button className="primary-btn">New Request</button>
        </>
      }
    >
      <section className="card-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} trend={stat.trend} tone={stat.tone as 'trend-up' | 'trend-down'} />
        ))}
      </section>

      <section className="metric-row">
        <div className="panel">
          <div className="section-header">
            <h2>Request Status</h2>
            <button className="ghost-btn">View details</button>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Requester</th>
                  <th>Asset</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {requestRows.slice(0, 3).map((row) => (
                  <tr key={row.requester}>
                    <td>{row.requester}</td>
                    <td>{row.asset}</td>
                    <td><span className={`badge ${row.status.toLowerCase()}`}>{row.status}</span></td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <button className="ghost-btn">Timeline</button>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>User</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {activityRows.map((row) => (
                  <tr key={`${row.action}-${row.time}`}>
                    <td>{row.action}</td>
                    <td>{row.user}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
