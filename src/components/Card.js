import React from "react";

export default function Card(props) {
  // const title = props.title
  const thumbnailText = props.title
  // const readLength = props.readLength

  var cardBody = props.content.substr(0, 140) + "\u2026";
  // console.log('card comp', props)
  return (
    <div className="card shadow-sm p-1">
      <div className="card-body">
        <div className="image-wrapper position-relative">
          <img
            alt="img"
            className=""
            src={props.imageUrl}
            style={{ height: "225px", width: "100%" }}
          />
          <h5 className="position-relative h4 my-3">{thumbnailText}</h5>
        </div>
        <div className="flex">
          <h5 className="mr-1 mb-3">{props.author}</h5>
          {/* <h6 className="">{props.date}</h6> */}
        </div>
        <p className="card-text">{cardBody}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" href={props.readMoreUrl} className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          {/* <small className="text-muted">{`${readLength} min`}</small> */}
        </div>
      </div>
    </div>
  );
}
