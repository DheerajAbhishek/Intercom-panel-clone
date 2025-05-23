import { useState } from "react";
import "../Styles/ChatWindow.css";
import snoozeIcon from '../assets/snooze.png';
import CopilotButton from "./CopilotButton";
import CopilotPanel from "./Copilot";
import ChatInput from "./ChatInput";

export default function Window({ input, setInput }) { // Accept as props
    const [isOpen, setIsOpen] = useState(true);


    return (

        <div className={`main ${isOpen ? "copilot-open" : ""}`}>

            {/* Main chat window area */}
            <div className="chat-window media">
                <div className="chat-window-content">
                    {/* Chat header with contact name and action buttons */}
                    <div className="chat-header">
                        <h3>Nikola Tesla</h3>
                        <div className="header-buttons">
                            {/* Action buttons: more options and snooze */}
                            <button className="icon-btn-white">...</button>
                            <button className="icon-btn-white">
                                <img src={snoozeIcon} alt="Snooze" />
                            </button>
                            {/* Button to close Copilot panel */}
                            {isOpen && <button className="icon-btn" onClick={() => setIsOpen(false)}>
                                Close
                            </button>}
                            {/* Button to open Copilot panel (only when closed) */}
                            {!isOpen && (
                                <CopilotButton onClick={() => setIsOpen(true)} />
                            )}
                        </div>
                    </div>
                    {/* Chat messages area */}
                    <div className="chat-messages">
                        {/* Received message with avatar */}
                        <div className="message-row received-avatar">
                            <p className="avatar-recieved">N</p>
                            <div className="message-row received">
                                <div className="message received">
                                    I bought a product from your store in november as christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping to return it for a refund. I have the order number and the product is unopened. Can you help me with this?
                                    <div className="timestamp">1 min ago</div>
                                </div>
                            </div>
                        </div>
                        {/* Sent message with avatar */}
                        <div className="message-row sent">
                            <div>
                                <div className="message sent">
                                    Sure! I can help you with that. Please provide me with the order number and I'll assist you with the return process.
                                    <div className="timestamp">just now</div>
                                </div>
                            </div>
                            <p className="avatar-sent">U</p>
                        </div>
                    </div>
                    <ChatInput input={input} setInput={setInput} /> {/* Pass as props */}
                </div>

                {isOpen && (
                    <CopilotPanel
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        setChatInput={setInput} // Pass setter as prop
                    />
                )}
            </div>
        </div>
    );
}
