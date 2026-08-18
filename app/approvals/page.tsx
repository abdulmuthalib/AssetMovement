import { PageShell } from '@/app/components/page-shell';
import { requestRows } from '@/lib/mock-data';

export default function ApprovalsPage() {
  return (
    <PageShell
      title="Approval Queue"
      subtitle="Prioritize pending equipment approvals, track reasons, and complete assignment decisions."
      actions={
        <>
          <button className="secondary-btn">Bulk Approve</button>
          <button className="primary-btn">Review Queue</button>
        </>
      }
    >
      <div className="panel">
        <div className="section-header">
          <h2>Pending Requests</h2>
          <button className="ghost-btn">Filters</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Requestor</th>
                <th>Asset</th>
                <th>Qty</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requestRows.map((row) => (
                <tr key={`${row.requester}-approval`}>
                  <td>{row.requester}</td>
                  <td>{row.asset}</td>
                  <td>{row.quantity}</td>
                  <td>{row.date}</td>
                  <td><span className={`badge ${row.status.toLowerCase()}`}>{row.status}</span></td>
                  <td className="action-row">
                    <button className="ghost-btn">Approve</button>
                    <button className="ghost-btn">Reject</button>
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
