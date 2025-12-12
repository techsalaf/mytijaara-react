// pages/500.js
export default function Custom500() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#dc3545' }}>500</h1>
      <h2 style={{ fontSize: '24px', margin: '16px 0', color: '#333' }}>Internal Server Error</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>Something went wrong on our end. Please try again later.</p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Refresh Page
      </button>
    </div>
  );
}
