import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inbox from './Components/Inbox'
import Window from './Components/ChatWindow'
import Copilot from './Components/Copilot' // Add this import

function App() {
  const [chatInput, setChatInput] = useState(""); // Lift state up

  return (
    <>
      <div className="main-container">
        <Inbox />
        <div className="chat-section">
          <Window input={chatInput} setInput={setChatInput} className="chat-window" />

        </div>
      </div>
    </>
  )
}

export default App
