import { PageShell } from '@/components/page-shell';
import { returnRows } from '@/lib/mock-data';

export default function ReturnsPage() {
  return (
    <PageShell
      title="Return Management"
      subtitle="Track equipment returns, damage checks, refund processing, and member follow-up."
      actions={
        <>
          <button className="secondary-btn">Export Report</button>
          <button className="primary-btn">Create Return</button>
        </>
      }
    >
      <div className="panel">
        <div className="section-header">
          <h2>Return Requests</h2>
          <button className="ghost-btn">Inspection Log</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Asset</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {returnRows.map((row) => (
                <tr key={`${row.member}-${row.asset}`}>
                  <td>{row.member}</td>
                  <td>{row.asset}</td>
                  <td>{row.date}</td>
                  <td><span className={`badge ${row.status.toLowerCase().replace(/\s+/g, '-')}`}>{row.status}</span></td>
                  <td className="action-row">
                    <button className="ghost-btn">Inspect</button>
                    <button className="ghost-btn">Refund</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
