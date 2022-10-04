import React from "react";
import "./popup.scss";
import { deleteEvent } from "../../gateway/gateway.js";

const DeletePopUp = ({ eventId, fetchEvents }) => {
  return (
    <div className="popup">
      <button
        className="popup__button"
        onClick={() => {
          deleteEvent(eventId), fetchEvents();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeletePopUp;
