// Chat.jsx
// This component renders a single chat item in the chat list.
// Props:
// - name: Name of the chat/contact
// - preview: Preview text of the last message
// - avatar: Avatar element or image
// - time: Time of the last message
// - isActive: Boolean, highlights if this chat is selected
// - onClick: Handler for when the chat is clicked

import "../Styles/Chat.css";

export default function Chat({ name, preview, avatar, time, isActive, onClick }) {
    return (
        <div
            className={`chat-container ${isActive ? "active-chat" : ""}`}
            onClick={onClick}
        >
            {/* Avatar for the chat/contact */}
            <div className="chat-avatar">{avatar}</div>
            <div className="chat-details">
                {/* Name and time of last message */}
                <div className="chat-name-time">
                    <span className="chat-name">{name}</span>
                    <span className="chat-time">{time}</span>
                </div>
                {/* Preview of the last message */}
                <div className="chat-preview">{preview}</div>
            </div>
        </div>
    );
}

