import { useEffect, useState } from 'react';

// Define the shape of the data we expect from the API
interface ServerResponse {
  message: string;
  time?: string;
}

function App() {
  const [data, setData] = useState<ServerResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // We use localhost because this runs in YOUR browser, not inside the docker container
    fetch('http://localhost:5000/db-test')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to connect to backend");
      });
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>NeuroxAI Experiment</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Backend Status:</h2>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {!data && !error && <p>Loading...</p>}
        
        {data && (
          <>
            <p><strong>Message:</strong> {data.message}</p>
            <p><strong>DB Time:</strong> {data.time}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;