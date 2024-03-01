import React from "react";

export default function About() {
  return (
    <>
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
            ><h2>About This Application</h2>
              
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>
                <li>NewsVilla is a web-based application accessible from any device with an internet <br /> connection.</li>
                <li>It offers a responsive design optimized for seamless navigation on desktops,<br /> tablets, and mobile phones</li>
              </strong> 
              
            </div>
          </div>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h2>News Feature Using API Key</h2>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong><li>NewsVilla leverages a powerful API key to fetch real-time news articles from <br /> a variety of trusted sources.</li>
                <li>Users can explore a diverse range of topics including world news, <br />business, technology, sports, entertainment, and more.</li>
                <li>The application categorizes news articles based on relevance and popularity, <br /> ensuring users can easily find the information they're interested in.</li>
                </strong> 
            </div>
          </div>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h2>Dark & Light Mode</h2>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
            <strong><li>NewsVilla provides a customizable viewing experience with both  dark <br /> and light mode options.</li>
                <li>Dark mode offers reduced screen glare and may be preferred by users <br />browsing in low-light environments or during nighttime.</li>
                <li>Light mode maintains a traditional appearance and may be preferred <br /> for daytime browsing or in well-lit environments.</li>
                </strong> 
            </div>
          </div>

        </div>
        {/* You can make similar changes to other accordion items */}
      </div>
    </div>
    </>
  );
}
