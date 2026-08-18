export default function CreateRequestPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Create New Request</h1>
      <p>Form to request medical equipment will appear here.</p>
      <div style={{ marginTop: '2rem' }}>
        <button className="secondary-btn">Cancel</button>
        <button className="primary-btn" style={{ marginLeft: '1rem' }}>Submit Request</button>
      </div>
    </div>
  );
}