import React, { useState } from "react";
import PropTypes from "prop-types";
import "./event.scss";

import DeletePopUp from "../deletePopUp/DeletePopUp.jsx";

const Event = ({ height, marginTop, title, time, id, fetchEvents }) => {
  const [popUpStatus, setPopUpStatus] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={() => setPopUpStatus(!popUpStatus)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {popUpStatus ? (
        <DeletePopUp eventId={id} fetchEvents={fetchEvents} />
      ) : null}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Event;
