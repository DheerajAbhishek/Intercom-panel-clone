// Inbox.jsx
// This component renders the chat inbox/sidebar.
// Features:
// - Displays a list of chat conversations
// - Highlights the active/selected chat
// - Includes selectors for filtering/sorting chats
// - Renders footer buttons for sidebar actions

import { useState } from "react";
import Chat from "./Chat";
import "../Styles/Inbox.css";
import { PanelLeft, AlignJustify } from "lucide-react"

export default function Inbox() {
    const [activeIndex, setActiveIndex] = useState(null);

    // List of chat conversations to display in the inbox
    const chatData = [
        {
            id: 1,
            name: "Nikola Tesla",
            preview: "I bought a product from  ",
            avatar: "N",
            time: "5min",
        },
        {
            id: 2,
            name: "Marie Curie",
            preview: "I have some questions about the ",
            avatar: "M",
            time: "10min",
        },
        {
            id: 3,
            name: "Alan Turing",
            preview: "How can i get a refund?",
            avatar: "A",
            time: "2min",
        },
    ];

    return (
        <div className="inbox-container">
            <h2>Your Inbox</h2>

            {/* Selectors for filtering/sorting chats */}
            <div className="selectors">
                <select name="open">
                    <option value="open">Open</option>
                </select>
                <select name="waiting">
                    <option value="waiting">Waiting longest</option>
                </select>
            </div>

            {/* Render each chat item */}
            {chatData.map((chat, index) => (
                <Chat
                    key={chat.id}
                    name={chat.name}
                    preview={chat.preview}
                    avatar={chat.avatar}
                    time={chat.time}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}

            {/* Footer buttons for sidebar actions */}
            <div className="chat-footer">
                <button ><PanelLeft size={15} /></button>
                <button><AlignJustify size={15} /></button>
            </div>
        </div>
    );
}
