import { useState } from "react";
import Chat from "./Chat";
import "../Styles/Inbox.css";
import { PanelLeft, AlignJustify } from "lucide-react"

export default function Inbox() {
    const [activeIndex, setActiveIndex] = useState(null);

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

            <div className="selectors">
                <select name="open">
                    <option value="open">Open</option>
                </select>
                <select name="waiting">
                    <option value="waiting">Waiting longest</option>
                </select>
            </div>

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
            <div className="chat-footer">
                <button ><PanelLeft size={15} /></button>
                <button><AlignJustify size={15} /></button>
            </div>
        </div>
    );
}
