// InputArea.jsx
// This component renders an auto-growing textarea for chat input.
// Features:
// - Automatically adjusts its height based on content
// - Accepts value and onChange as props for controlled input

import { useRef, useEffect } from "react";
import "../Styles/input.css"; // optional

export default function AutoGrowingTextarea({ value, onChange }) {
    const textareaRef = useRef(null);

    // Adjusts the textarea height to fit content
    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`; // adjust height
    };

    // Adjust height when value changes
    useEffect(() => {
        handleInput();
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            onInput={handleInput}
            className="auto-textarea"
            placeholder="Use ⌘K for shortcuts"
            rows={1}
            id="input"
        />
    );
}
