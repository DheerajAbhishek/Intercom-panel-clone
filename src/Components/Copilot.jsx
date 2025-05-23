// Copilot.jsx
// This component renders the Copilot sidebar for AI assistance.
// Features:
// - Tabbed interface for Copilot chat and Details
// - AI chat with suggested questions and responses
// - "Add to Composer" button to insert AI response into main chat input
// - Accepts setChatInput to update the main chat input from Copilot
// Props:
// - isOpen: Boolean, controls sidebar visibility
// - onClose: Function to close the sidebar
// - setChatInput: Function to set the main chat input value

import { useState } from "react";
import "../Styles/Copilot.css";

import Details from "./Details";
import intercomIcon from "../assets/intercom.png";
import { PanelRight, ArrowUp, SquarePen } from "lucide-react";

// Accept setChatInput as a prop
const Copilot = ({ isOpen, onClose, setChatInput }) => {
    const [activeTab, setActiveTab] = useState("copilot"); // Controls which tab is active
    const [input, setInput] = useState(""); // Input for Copilot chat box
    const [chat, setChat] = useState([]);   // Stores chat messages

    // Handles sending a message in Copilot chat
    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        const aiResponse = {
            from: "ai", text: `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. To assist you with your refund request, could you please provide your order ID and proof of purchase. Please note: We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned. Please check when you placed your order before proceeding.
Once I have checked these details, if everything looks OK, I will send a returns QR code which you can use to post the item back to us. Your refund will be automatically issued once you put it in the post.` };

        setChat([...chat, userMessage, aiResponse]);
        setInput("");
    };

    // Handles clicking a suggested question
    const handleSuggestedClick = (suggestedText) => {
        setInput(suggestedText);
    };

    return (
        <div className="copilot-sidebar open">
            {/* Tab row for switching between Copilot and Details */}
            <div className="tab-row">
                <button
                    className={`tab ${activeTab === "copilot" ? "active" : ""}`}
                    onClick={() => setActiveTab("copilot")}
                >
                    <div className="copilot-text">Copilot</div>
                </button>
                <button
                    className={`tab ${activeTab === "details" ? "active" : ""}`}
                    onClick={() => setActiveTab("details")}
                >
                    <div className="details-text">Details</div>
                </button>
                {/* Button to close the Copilot sidebar */}
                <button className="back-btn" onClick={onClose}>
                    <PanelRight color="black" />
                </button>
            </div>

            <div className="tab-content-wrapper">
                {/* Copilot chat tab */}
                {activeTab === "copilot" ? (
                    <div className="copilot-content">
                        {/* Show intro if no chat yet */}
                        {chat.length === 0 ? (
                            <div className="midcontent">
                                <img style={{ height: 32, margin: 11 }} src={intercomIcon} alt="" />
                                <h3 style={{ margin: 8 }}>Hi, I'm Fin AI Copilot</h3>
                                Ask me anything about this conversation.
                            </div>
                        ) : (
                            // Render chat messages
                            <div className="chat-box" style={{
                                width: "100%", padding: " 0 10px"
                            }}>
                                {chat.map((msg, index) => (
                                    <div key={index} className="message-row left">
                                        <div className="avatar">
                                            {msg.from === "user" ? "Y" : <img src={intercomIcon} alt="Fin" />}
                                        </div>
                                        <div className={`message-bubble ${msg.from === "user" ? "user-bubble" : "ai-bubble"}`}>
                                            <div className="name">{msg.from === "user" ? "You" : "Fin"}</div>
                                            <div className="text">  {msg.text}
                                                {/* "Add to Composer" button for AI responses */}
                                                {msg.from === "ai" && (
                                                    <div style={{ marginTop: "8px" }}>
                                                        <button
                                                            className="add-to-composer-btn"
                                                            onClick={() => setChatInput(msg.text)} // Use setChatInput here
                                                        >
                                                            <SquarePen size={15} /> Add to Composer
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Suggested question if no chat yet */}
                        {chat.length === 0 && (
                            <div className="suggest-box">
                                <span
                                    className="tag"
                                    onClick={() => handleSuggestedClick("How do I get a refund?")}
                                >
                                    <b>Suggested&nbsp;</b> How do I get a refund?
                                </span>
                            </div>
                        )}

                        {/* Input area for Copilot chat */}
                        <div style={{ position: "relative" }}>
                            <div className="bottom-gradient"></div>
                            <div className="input-wrapper">
                                <input
                                    className="ask-input"
                                    placeholder="Ask a question..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                />
                                <button className="send-icon" onClick={handleSend}>
                                    <ArrowUp size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Details tab content
                    <div className="copilot-content">
                        <Details />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Copilot;
