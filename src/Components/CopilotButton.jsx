import "../Styles/CopilotButton.css";
const CopilotButton = ({ onClick }) => {
    return (
        <button className="open-panel-btn" onClick={onClick}>
            AI Copilot/Details
        </button>
    );
};

export default CopilotButton;
