import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inbox from './Components/Inbox'
import Window from './Components/ChatWindow'
import Copilot from './Components/Copilot' // Add this import

// This is the root component of the application.
// Features:
// - Manages the global chat input state
// - Renders the main layout with Inbox sidebar and Chat window
function App() {
  const [chatInput, setChatInput] = useState(""); // State for chat input, shared with child components

  return (
    <>
      {/* Main container for the app layout */}
      <div className="main-container">
        {/* Sidebar with chat conversations */}
        <Inbox />
        <div className="chat-section">
          {/* Main chat window, passes input state and setter as props */}
          <Window input={chatInput} setInput={setChatInput} className="chat-window" />

        </div>
      </div>
    </>
  )
}

export default App
