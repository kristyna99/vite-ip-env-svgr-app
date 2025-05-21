import { useEffect, useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const greeting = import.meta.env.VITE_GREETING
  const [count, setCount] = useState(0)
  const [ipAdress, setIpAdress] = useState("")

  useEffect(() => {
    const fetchIpAdress = async () => {
      const apiUrl = import.meta.env.VITE_API_URL

      try {
        const response = await fetch(`${apiUrl}?format=json`)
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }
        const data = await response.json()
        setIpAdress(data.ip)
      } catch (err) {
        setIpAdress("NOT AVAILABLE")
        console.log(err.message)
      }
    }
    fetchIpAdress()
  }, [])

  return (
    <>
      <Header />
      <h2>{greeting}</h2>
      <h3>Your IP address is {ipAdress}</h3>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
