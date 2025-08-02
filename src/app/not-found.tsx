// pages/404.tsx
import Link from 'next/link';
export default function Custom404() {
  return (
    <div style={{
      backgroundColor: 'var(--tj-theme-accent-1)',
      width: '100%',
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '80px', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>Oops! Page Not Found</p>
      <p style={{ marginBottom: '30px' }}>The page you’re looking for doesn’t exist.</p>
      <Link href="/" style={{
        backgroundColor: 'white',
        color: 'var(--tj-theme-accent-1)',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '6px',
        fontWeight: 'bold'
      }}>
        Go to Homepage
      </Link>
    </div>
  );
}
