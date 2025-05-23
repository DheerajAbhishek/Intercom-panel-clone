import "../Styles/Chat.css";

export default function Chat({ name, preview, avatar, time, isActive, onClick }) {
    return (
        <div
            className={`chat-container ${isActive ? "active-chat" : ""}`}
            onClick={onClick}
        >
            <div className="chat-avatar">{avatar}</div>
            <div className="chat-details">
                <div className="chat-name-time">
                    <span className="chat-name">{name}</span>
                    <span className="chat-time">{time}</span>
                </div>
                <div className="chat-preview">{preview}</div>
            </div>
        </div>
    );
}

