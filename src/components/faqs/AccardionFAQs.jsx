import React, { useState } from "react";
import faqs from "../../jsons/faqs.json";

export default function AccardionFAQs() {
  const [activeId, setActiveId] = useState(null);

  const handleActive = (id) => {
    if (activeId === id) {
      setActiveId(id);
    }
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="elementor-section">
      {faqs.map((faqGroup, groupIndex) => (
        <div className="elementor-column" key={groupIndex}>
          {faqGroup.map((item) => (
            <div className="elementor-toggle-wrap" key={item.id}>
              <div
                className="elementor-tab-item"
                onClick={() => handleActive(item.id)}
              >
                <p className="elementor-tab-title">{item.title}</p>
              </div>
              <div
                className={`elementor-tab-content ${
                  activeId === item.id
                    ? `accar-active accar-active-${item.id}`
                    : " accar-activeRe-Call"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
