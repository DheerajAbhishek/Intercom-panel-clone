import "../Styles/Chatnput.css";
import AutoGrowingTextarea from "./InputArea";
import { Zap, Smile, Paperclip, MessageSquareText, ChevronDown } from 'lucide-react';

export default function ChatInput({ input, setInput }) { // Accept as props
    return (
        <>
            <label htmlFor="input" className="chat-input">
                <div>
                    <MessageSquareText color="black" size={18} style={{ marginLeft: "5px", marginRight: "3px", position: "relative", top: "5px" }} />
                    <span>Chat <ChevronDown size={15} /></span>
                </div>
                <AutoGrowingTextarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <div className="input-bottom">
                    <div className="input-icons">
                        <button className="icon-btn"><Zap size={18} /></button>
                        <span style={{ fontSize: "26px", opacity: "37%" }}>&#10072;</span>
                        <button className="icon-btn"><Paperclip size={18} /></button>
                        <button className="icon-btn"><Smile color="black" size={18} /></button>
                    </div>
                    <button>Send ▾</button>
                </div>
            </label>
        </>
    );
}