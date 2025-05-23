import { useState } from "react";
import "../Styles/Details.css";

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
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="sidebar-panel">
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

            {collapsibles.map((section) => (
                <div className="collapsible" key={section}>
                    <div
                        className="collapsible-header"
                        onClick={() => toggleSection(section)}
                    >
                        {section.toUpperCase()}
                        <span>{openSections[section] ? "▴" : "▾"}</span>
                    </div>

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
