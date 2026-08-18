export default function ApprovalsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Approval Queue</h1>
      <p>Pending approvals for admin review.</p>
      <button className="primary-btn" style={{ marginTop: '1rem' }}>Review Next Request</button>
    </div>
  );
}
