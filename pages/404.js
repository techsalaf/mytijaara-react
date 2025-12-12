// pages/404.js
export default function Custom404() {
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
      <h1 style={{ fontSize: '72px', margin: '0', color: '#6c757d' }}>404</h1>
      <h2 style={{ fontSize: '24px', margin: '16px 0', color: '#333' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>The page you are looking for does not exist.</p>
      <a
        href="/"
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        Go Home
      </a>
    </div>
  );
}
