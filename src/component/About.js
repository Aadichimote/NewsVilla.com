import React from "react";

export default function About() {
  return (
    <div className="container" id="aboutAccordion">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1 - Updated
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>This is the first item's updated accordion body.</strong> It is
              shown by default <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        {/* You can make similar changes to other accordion items */}
      </div>
    </div>
  );
}
