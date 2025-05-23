// CopilotButton.jsx
// This component renders a button to open the Copilot (AI assistant) sidebar.
// Props:
// - onClick: Function to handle button click (opens the Copilot panel)

import "../Styles/CopilotButton.css";

const CopilotButton = ({ onClick }) => {
    return (
        // Button that triggers the Copilot sidebar to open when clicked
        <button className="open-panel-btn" onClick={onClick}>
            AI Copilot/Details
        </button>
    );
};

export default CopilotButton;
