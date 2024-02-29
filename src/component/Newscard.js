import React, { Component } from "react";

export class Newscard extends Component {
  render() {
    let { title, description, Imageurl, newsUrl } = this.props;
    return (
      <div>
        <div className="card " style={{ width: "18rem" }}>
          <img
            src={
              !Imageurl
                ? "https://www.livelaw.in/h-upload/2024/02/21/523741-fali-s-nariman.jpg"
                : Imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-sn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscard;
