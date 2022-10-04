import React from "react";
import PropTypes from "prop-types";
import "./popup.scss";
import { deleteEvent } from "../../gateway/gateway.js";

const DeletePopUp = ({ eventId, fetchEvents }) => {
  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId).then(() => {
      fetchEvents();
    });
  };

  return (
    <div className="popup">
      <button
        className="popup__button"
        onClick={() => handleDeleteEvent(eventId)}
      >
        Delete
      </button>
    </div>
  );
};

DeletePopUp.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
};

export default DeletePopUp;
