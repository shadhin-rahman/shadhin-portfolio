export default function VersionPage() {
    return (
        <div className="p-10 text-white font-mono">
            <h1>Deployment Version: 4.3 (Vercel Fix)</h1>
            <p>Timestamp: {new Date().toISOString()}</p>
            <p>Status: Build Config Override Applied</p>
        </div>
    );
}
