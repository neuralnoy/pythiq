import { useState } from 'react'
import './index.css'

function App() {
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFetch = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/');
      const text = await res.text();
      setResponse(text);
    } catch (error) {
      console.error(error);
      setResponse('Error: Could not connect to backend');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Neuralnoy</h1>
        <p className="subtitle">Connect to the backend services</p>
        <button 
          onClick={handleFetch} 
          disabled={loading}
          className="fetch-button"
        >
          {loading ? 'Fetching...' : 'Contact Backend'}
        </button>
        {response && (
          <div className="response-box">
            <h2>Backend Response:</h2>
            <code>{response}</code>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
