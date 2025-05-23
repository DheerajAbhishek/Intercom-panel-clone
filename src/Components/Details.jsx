// Details.jsx
// This component renders the sidebar panel with conversation and user details.
// Features:
// - Shows assignee and team info
// - Renders collapsible sections for various integrations (Links, User Data, etc.)
// - Each section can be expanded/collapsed to show more details

import { useState } from "react";
import "../Styles/Details.css";

// List of collapsible section names
const collapsibles = [
    "Links",
    "User Data",
    "Conversation Attributes",
    "Company Details",
    "Salesforce",
    "Stripe",
    "Jira for Tickets"
];

const Details = () => {
    const [openSections, setOpenSections] = useState({}); // Tracks which sections are open

    // Toggles a section open/closed
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="sidebar-panel">
            {/* Assignee and team info */}
            <div className="assignee-info padded">
                <div className="status">
                    <div className="label">Assignee</div>
                    <div className="label">Team</div>
                </div>
                <div>
                    <div className="value">🧑‍💼 Brian Byrne</div>
                    <div className="value">👥 Unassigned</div>
                </div>
            </div>

            {/* Render collapsible sections */}
            {collapsibles.map((section) => (
                <div className="collapsible" key={section}>
                    {/* Section header, clickable to expand/collapse */}
                    <div
                        className="collapsible-header"
                        onClick={() => toggleSection(section)}
                    >
                        {section.toUpperCase()}
                        <span>{openSections[section] ? "▴" : "▾"}</span>
                    </div>

                    {/* Section content, only visible if open */}
                    {openSections[section] && (
                        <div className="collapsible-content">
                            {section === "Links" ? (
                                <>
                                    <div className="link-item">
                                        <span>📎 Tracker ticket</span>
                                        <button>+</button>
                                    </div>
                                    <div className="link-item">
                                        <span>🗂️ Back-office tickets</span>
                                        <button>+</button>
                                    </div>
                                    <div className="link-item">
                                        <span>↗ Side conversations</span>
                                        <button>+</button>
                                    </div>
                                </>
                            ) : (
                                <p style={{ marginLeft: 29 }}>Details for {section}</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Details;
