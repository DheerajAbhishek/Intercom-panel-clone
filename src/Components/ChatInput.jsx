// ChatInput.jsx
// This component renders the chat input area at the bottom of the chat window.
// Props:
// - input: The current value of the chat input (string)
// - setInput: Function to update the chat input value
// Features:
// - Uses an auto-growing textarea for message input
// - Includes icons for actions (send, attach, emoji, etc.)
// - Displays a "Send" button

import "../Styles/ChatInput.css";
import AutoGrowingTextarea from "./InputArea";
import { Zap, Smile, Paperclip, MessageSquareText, ChevronDown } from 'lucide-react';

export default function ChatInput({ input, setInput }) { // Accept as props
    return (
        <>
            {/* Label and header for the chat input area */}
            <label htmlFor="input" className="chat-input">
                <div>
                    {/* Icon and dropdown for chat type */}
                    <MessageSquareText color="black" size={18} style={{ marginLeft: "5px", marginRight: "3px", position: "relative", top: "5px" }} />
                    <span>Chat <ChevronDown size={15} /></span>
                </div>
                {/* Auto-growing textarea for user input */}
                <AutoGrowingTextarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                {/* Bottom row with action icons and send button */}
                <div className="input-bottom">
                    <div className="input-icons">
                        {/* Action icons: AI suggestion, divider, attach, emoji */}
                        <button className="icon-btn"><Zap size={18} /></button>
                        <span style={{ fontSize: "26px", opacity: "37%" }}>&#10072;</span>
                        <button className="icon-btn"><Paperclip size={18} /></button>
                        <button className="icon-btn"><Smile color="black" size={18} /></button>
                    </div>
                    {/* Send button */}
                    <button>Send ▾</button>
                </div>
            </label>
        </>
    );
}